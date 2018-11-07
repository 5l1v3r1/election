package com.visneweb.election.home;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.visneweb.election.service.Web3jService;

@Component
public class HomeBean implements Serializable{
	private static final long serialVersionUID = 5265537634704352719L;
	@Autowired Web3jService ws;
	
//	@GetMapping("/greeting.html")
//    public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//		test();
//        model.addAttribute("name", name);
//        return "greeting";
//    }
	
	public void test() {
		ws.test();
	}

}
