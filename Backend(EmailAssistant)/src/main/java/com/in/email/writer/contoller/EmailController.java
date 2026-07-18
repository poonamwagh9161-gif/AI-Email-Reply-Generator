package com.in.email.writer.contoller;



import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.in.email.writer.dto.EmailRequest;
import com.in.email.writer.service.GeminiService;

@RestController
@RequestMapping("api/email")
@CrossOrigin(origins="*")
class EmailController {

	
	public EmailController(GeminiService service) {
	
		this.service = service;
	}
	private  GeminiService service;
	@PostMapping("/generate")
	public  String generateReply(@RequestBody EmailRequest content )
	{
		return service.generateReply(content) ;
	}
	
}
