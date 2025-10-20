package com.research.assistant;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/research")
@CrossOrigin(origins = "*") //your backend allows requests from any website or domain.
@AllArgsConstructor
public class ResearchController {
    private final ResearchService researchService;



    @PatchMapping("/process")
    public ResponseEntity<String>processContent(@RequestBody ResearchRequest request){
        String result = researchService.processContent(request);
        return ResponseEntity.ok(result);
    }
}
