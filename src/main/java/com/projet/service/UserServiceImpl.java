package com.projet.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projet.controller.UserAlreadyExistsException;
import com.projet.domain.User;

@Service
public class UserServiceImpl implements UserService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@PersistenceContext(unitName = "entityManagerFactory")
	private EntityManager em;	
	
	@Override
	@Transactional
	public void create(User user) throws UserAlreadyExistsException {
		if(emailExists(user.getEmail()) || loginExists(user.getLogin())) {
			throw new UserAlreadyExistsException();
		}
		else {
			LOGGER.info("Create user with email {}",user.getEmail());
			user.setActive(true);
			user.setRole("c"); // pour client
			em.persist(user);
		}
	}

	@Override
	@Transactional
	public void delete(String login) {
		User user = find(login);
		user.setActive(false);
	}
	
	@Override
	@Transactional
	public void modify(String login, User newProfile) {
		User user = find(login);
		user.setFirstName(newProfile.getFirstName());
		user.setLastName(newProfile.getLastName());
		user.setEmail(newProfile.getEmail());
		user.setTelephone(newProfile.getTelephone());
	}	

	@SuppressWarnings("unchecked")
	@Override
	public boolean emailExists(String uemail) {
		Query queryUserByMail = em.createNamedQuery("findUserByEmail");
		queryUserByMail.setParameter("uemail", uemail);
		List<User> users = queryUserByMail.getResultList();
		return !users.isEmpty();
	}

	@SuppressWarnings("unchecked")
	@Override
	public boolean loginExists(String ulogin) {
		Query queryUserByLogin = em.createNamedQuery("findUserByLogin");
		queryUserByLogin.setParameter("ulogin", ulogin);
		List<User> users = queryUserByLogin.getResultList();
		return !users.isEmpty();
	}

	@Override
	public User find(String ulogin) {
		Query queryUserByLogin = em.createNamedQuery("findUserByLogin", User.class);
		queryUserByLogin.setParameter("ulogin", ulogin);
		User user = (User) queryUserByLogin.getResultList().get(0);
		return user;
	}	
	
	public void setEm(EntityManager em) {
		this.em = em;
	}

}
