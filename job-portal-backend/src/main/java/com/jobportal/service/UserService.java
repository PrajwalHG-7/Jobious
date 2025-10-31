package com.jobportal.service;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.ResponseDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.exception.JobPortalException;

import jakarta.mail.MessagingException;
import jakarta.validation.Valid;

public interface UserService {
	public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

	public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;

	public Boolean sendOtp(String email) throws Exception;

	public Boolean verifyOtp(String email, String otp) throws JobPortalException;

	public ResponseDTO changePassword(@Valid LoginDTO loginDTO) throws JobPortalException;
}