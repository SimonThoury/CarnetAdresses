package com.projet.controller;

import com.projet.domain.User;

/**
 * Classe permettant d'éviter la récursivité lors de la transformation 
 * d'un User en JSON
 */

public class UserJson {

	private int id;

	private String firstName;
	private String lastName;	
	private String password;
	private String login;
	private String email;
	private String telephone;
	
	private String role;
	private boolean active;	

	public UserJson(int id, String firstName, String lastName, String password,
			String login, String email, String telephone, String role) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.login = login;
		this.email = email;
		this.telephone = telephone;
		this.role = role;
	}	
	
	public UserJson(User user) {
		this(user.getId(), 
			user.getFirstName(), 
			user.getLastName(), 
			user.getPassword(), 
			user.getLogin(),
			user.getEmail(), 
			user.getTelephone(),   
			user.getRole());
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}	
	
}
