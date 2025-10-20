document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['researchNotes'], function (result) {
        if (result.researchNotes) {
            document.getElementById('notes').value = result.researchNotes;
        }
    });

    document.getElementById('summarizeBtn').addEventListener('click', summarizeText);
    document.getElementById('saveBtn').addEventListener('click', saveNotes);
    document.getElementById('deleteBtn').addEventListener('click', deleteNotes); // ✅ Added
});

const summarizeBtn = document.getElementById("summarizeBtn");

summarizeBtn.addEventListener("click", () => {
    // Add loading class
    summarizeBtn.classList.add("loading");

    // Simulate async task (like API call)
    setTimeout(() => {
        summarizeBtn.classList.remove("loading");
        // Your summarize logic goes here
    }, 1000); // 2 seconds demo
});


async function summarizeText() {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const [{ result }] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => window.getSelection().toString(),
        });

        if (!result) {
            showResult("No text selected. Please select text to summarize.");
            return;
        }

        const response = await fetch('http://localhost:8080/api/research/process', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: result, operation: 'summarize' }),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const text = await response.text();
        showResult(text.replace(/\n/g, '<br>'));
    } catch (error) {
        showResult('Error: ' + error.message);
    }
}

async function saveNotes() {
    const notes = document.getElementById('notes').value;
    await chrome.storage.local.set({ researchNotes: notes });
    alert('Notes saved!');
}

// ✅ New delete function
async function deleteNotes() {
    const confirmDelete = confirm('Are you sure you want to delete your saved notes?');
    if (confirmDelete) {
        await chrome.storage.local.remove('researchNotes');
        document.getElementById('notes').value = '';
        alert('Notes deleted!');
    }
}

function showResult(content) {
    const resultsEl = document.getElementById('results');
    if (!resultsEl) return;
    resultsEl.innerHTML = `<div class="result-item"><div class="result-content">${content}</div></div>`;
}
