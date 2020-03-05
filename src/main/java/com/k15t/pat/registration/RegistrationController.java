package com.k15t.pat.registration;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.StringWriter;


/**
* Controller class for registration form
*
* @author  Jinu J
* @version 1.0
* @since   03-03-2020 
*/
@RestController
public class RegistrationController {

    @Autowired private VelocityEngine velocityEngine;
    
    /**
     * Methos for velocity template.
     * @param Nil.
     * @return String - Content of HTML page.
     * @exception Nil.
     * 
     */
       
    @RequestMapping("/registration")
    public String registration() {

        Template template = velocityEngine.getTemplate("templates/registration.vm");
        VelocityContext context = new VelocityContext();
        StringWriter writer = new StringWriter();
        template.merge(context, writer);
       
        return writer.toString();
        
    }
 
}