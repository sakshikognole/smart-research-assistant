package com.research.assistant;

import lombok.Data;

@Data
public class ResearchRequest {
    public void setOperation(String operation) {
        this.operation = operation;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getOperation() {
        return operation;
    }

    private String content;
    private String operation;
}
