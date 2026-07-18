package com.in.email.writer.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.fasterxml.jackson.databind.JsonNode;
import com.in.email.writer.dto.EmailRequest;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final RestClient restClient;

    public GeminiService(RestClient restClient) {
        this.restClient = restClient;
    }


    public String generateReply(EmailRequest request) {

    	String prompt = """
    			You are an AI email assistant.

Generate a complete professional email reply for the given email.

Rules:
- Start with a proper greeting.
- Acknowledge the sender's email.
- Write a clear and polite response.
- End with a professional closing.
- Return only the email reply.
- Do not add explanations.
- Do not provide multiple options.

    			Email:
    			%s

    			Tone:
    			%s
    			""".formatted(
    			        request.getEmailContent(),
    			        request.getTone()
    			);


        String requestBody = """
        {
          "contents": [
            {
              "parts": [
                {
                  "text": "%s"
                }
              ]
            }
          ]
        }
        """.formatted(prompt);


        JsonNode response = restClient.post()
        		.uri("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent")
                .header("x-goog-api-key", apiKey)
                .header("Content-Type", "application/json")
                .body(requestBody)
                .retrieve()
                .body(JsonNode.class);


        if(response == null || response.path("candidates").isEmpty()) {
            return "Unable to generate reply.";
        }


        String reply = response
                .path("candidates")
                .get(0)
                .path("content")
                .path("parts")
                .get(0)
                .path("text")
                .asText();


        return reply;
    }
}