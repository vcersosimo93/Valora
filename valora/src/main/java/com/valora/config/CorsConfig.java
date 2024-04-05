package com.valora.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
//@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // Permite solicitudes desde este origen (puerto donde se ejecuta tu aplicación React.js)
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos HTTP permitidos
                .allowCredentials(true); // Permitir credenciales (por ejemplo, cookies)
    }


}
