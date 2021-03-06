//package com.visneweb.election.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
////@Configuration
////@ComponentScan(basePackages = { "com.visneweb.election" })
////@EnableWebMvc
//public class MvcConfig implements WebMvcConfigurer {
//
////    @Autowired
////    private MessageSource messageSource;
//
////    @Override
////    public void addViewControllers(ViewControllerRegistry registry) {
////        registry.addViewController("/").setViewName("forward:/pages/home.xhtml");
////        registry.addViewController("/pages/home.xhtml");
////        registry.addViewController("/loginRememberMe");
////        registry.addViewController("/customLogin");
////        registry.addViewController("/registration.html");
////        registry.addViewController("/registrationCaptcha.html");
////        registry.addViewController("/logout.html");
////        registry.addViewController("/pages/homepage.html");
////        registry.addViewController("/expiredAccount.html");
////        registry.addViewController("/badUser.html");
////        registry.addViewController("/emailError.html");
////        registry.addViewController("/home.html");
////        registry.addViewController("/invalidSession.html");
////        registry.addViewController("/console.html");
////        registry.addViewController("/admin.html");
////        registry.addViewController("/successRegister.html");
////        registry.addViewController("/forgetPassword.html");
////        registry.addViewController("/updatePassword.html");
////        registry.addViewController("/changePassword.html");
////        registry.addViewController("/users.html");
////        registry.addViewController("/qrcode.html");
////    }
//
////    @Override
////    public void configureDefaultServletHandling(final DefaultServletHandlerConfigurer configurer) {
////        configurer.enable();
////    }
//
////    @Override
////    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
////        registry.addResourceHandler("/resources/**").addResourceLocations("/", "/resources/");
////    }
//
////    @Override
////    public void addInterceptors(final InterceptorRegistry registry) {
////        final LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
////        localeChangeInterceptor.setParamName("lang");
////        registry.addInterceptor(localeChangeInterceptor);
////    }
//
//    // beans
//    
////    @Bean
////    public ViewResolver viewResolver() {
////       InternalResourceViewResolver bean = new InternalResourceViewResolver();
////  
////       bean.setViewClass(JstlView.class);
//////       bean.setPrefix("/WEB-INF/resources/");
////       bean.setSuffix(".xhtml");
////  
////       return bean;
////    }
//
////    @Bean
////    public LocaleResolver localeResolver() {
////        final CookieLocaleResolver cookieLocaleResolver = new CookieLocaleResolver();
////        cookieLocaleResolver.setDefaultLocale(Locale.ENGLISH);
////        return cookieLocaleResolver;
////    }
//
//    // @Bean
//    // public MessageSource messageSource() {
//    // final ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
//    // messageSource.setBasename("classpath:messages");
//    // messageSource.setUseCodeAsDefaultMessage(true);
//    // messageSource.setDefaultEncoding("UTF-8");
//    // messageSource.setCacheSeconds(0);
//    // return messageSource;
//    // }
//
////    @Bean
////    public EmailValidator usernameValidator() {
////        return new EmailValidator();
////    }
////
////    @Bean
////    public PasswordMatchesValidator passwordMatchesValidator() {
////        return new PasswordMatchesValidator();
////    }
//
////    @Bean
////    @ConditionalOnMissingBean(RequestContextListener.class)
////    public RequestContextListener requestContextListener() {
////        return new RequestContextListener();
////    }
////
////    @Override
////    public Validator getValidator() {
////        LocalValidatorFactoryBean validator = new LocalValidatorFactoryBean();
////        validator.setValidationMessageSource(messageSource);
////        return validator;
////    }
//
//}