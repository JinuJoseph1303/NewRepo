package com.k15t.pat.service;

import java.util.HashMap;
import java.util.Map;

import org.jvnet.hk2.annotations.Service;
import org.springframework.stereotype.Component;

import com.k15t.pat.model.RegistrationFormDetails;


@Service
@Component
public class RegistrationService {
    private Map <String, RegistrationFormDetails > userHM = new HashMap<String, RegistrationFormDetails>();
		
	public void updateUserDetails(RegistrationFormDetails registrationFormDetails) {
		if(!registrationFormDetails.getEmail().isEmpty()) 
			userHM.put(registrationFormDetails.getEmail(), registrationFormDetails);
	       
       return;
    }
	
	public RegistrationFormDetails getUserDetails (String strID) {
			
		 if(userHM != null) {
			 return userHM.get(strID);
		}
		
		 return new RegistrationFormDetails();
	}
}
