package com.visneweb.election;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Sample Spring Boot Application using web3j.
 */
@SpringBootApplication
public class ElectionApp
//extends SpringBootServletInitializer
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
