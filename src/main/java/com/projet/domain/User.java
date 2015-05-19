package com.projet.domain;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
	@NamedQuery(
		name="findUserByEmail",
		query = "SELECT OBJECT(u) FROM User u WHERE u.email = :uemail"
	),
	@NamedQuery(
		name="findUserByLogin",
		query = "SELECT OBJECT(u) FROM User u WHERE u.login = :ulogin"
	)
})
public class User {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String firstName; // prénom
	private String lastName; // nom
	private String password;
	private String login;
	private String email;
	private String telephone;
	
	private String role;
	private boolean active;
	
	@ManyToMany
	@JoinTable(name="users_addresses",
		joinColumns={@JoinColumn(name="user_id", referencedColumnName="id")},
		inverseJoinColumns={@JoinColumn(name="address_id", referencedColumnName="id")}
	)
	private List<Address> addresses;
	
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

	public List<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}
	
}
