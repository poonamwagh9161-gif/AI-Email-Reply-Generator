package com.in.email.writer.dto;

import lombok.Data;

@Data
public class GeminiRequest {

private String model;
private String input;
public String getModel() {
	return model;
}
public void setModel(String model) {
	this.model = model;
}
public String getInput() {
	return input;
}
public void setInput(String input) {
	this.input = input;
}
}
