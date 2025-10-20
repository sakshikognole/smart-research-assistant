package com.research.assistant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ResearchAssistantApplication {

	public static void main(String[] args) {

		SpringApplication.run(ResearchAssistantApplication.class, args);
		System.out.println("✅ Application is running at:http://localhost:8080/api/research/process");
	}

}
