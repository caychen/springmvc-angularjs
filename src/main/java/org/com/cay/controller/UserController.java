package org.com.cay.controller;

import java.util.ArrayList;
import java.util.List;

import org.com.cay.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserController {

	@RequestMapping("/register")
	@ResponseBody
	public User register(User user){
		System.out.println(user);
		return user;
	}
	
	@RequestMapping("/list")
	@ResponseBody
	public List<User> getAll(){
		List<User> users = new ArrayList<User>();
		return users;
	}
}
