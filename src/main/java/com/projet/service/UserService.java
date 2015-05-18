package com.projet.service;

import com.projet.domain.User;

public interface UserService {

	public void create(User user);
	public void delete(String login);
	public boolean emailExists(String uemail);
	public boolean loginExists(String ulogin);
	public User find(String login);
	
}
