package com.visneweb.election.test;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.request.RequestContextListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.context.support.GenericWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import com.visneweb.election.ElectionApp;
import com.visneweb.election.service.Web3jService;

/**
 * Sample Spring Boot Application using web3j.
 */
@SpringBootApplication
public class TestApp
{
	
    public static void main(String[] args) {
        SpringApplication.run(ElectionApp.class, args);
    }
//    @Override
//	public void onStartup(final ServletContext sc) throws ServletException {
//		AnnotationConfigWebApplicationContext root = new AnnotationConfigWebApplicationContext();
//		root.scan("com.visneweb.election");
//		sc.addListener(new ContextLoaderListener(root));
//		ServletRegistration.Dynamic appServlet = sc.addServlet("mvc", new DispatcherServlet(new GenericWebApplicationContext()));
//		appServlet.setLoadOnStartup(1);
//	}
//
//	@Bean
//	public RequestContextListener requestContextListener() {
//		return new RequestContextListener();
//	}
}
