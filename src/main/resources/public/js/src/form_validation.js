function validate(){
	
	if (validateFirstName() && validateLastName() && validatePwd() && validateEmail() 
			&& validateConfirmPwd() && validatePhoneNumber() && validateAddress() && validatePincode() &&
			validateCity() && validateCountry() ) {
		return true;
	}
	
	return true;
}

function validateFirstName() {
	
	var vFirstName = $('#firstName').val();
	var re = /^[\w ]+$/;
	if(vFirstName ==  '' || !re.test(vFirstName) ) {
		
		$('#firstName').css('border-color','red');
		$('#firstName').focus();
		$('#error_first').html("Please enter First name."); 
		return false;
	} 
	
	$('#firstName').css('border-color','black');
	$('#error_first').html(""); 
	
	return true;
	
}

function validateLastName() {
	
	var vLastName = $('#lastName').val();
	var re = /^[\w ]+$/;
	if(vLastName ==  '' || !re.test(vLastName) ) {
		
		$('#lastName').css('border-color','red');
		$('#error_last').html("Please enter Last name");
		return false;
	} 
	
	$('#lastName').css('border-color','black');
	$('#error_last').html("");
	return true;
	
}

function validateEmail() {
	
	var vEmail = $('#email').val();
	var pattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	//var pattern = new RegExp ("/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/");
	if(vEmail ==  '' || !pattern.test(vEmail) ) {
		
		$('#email').css('border-color','red');
		$('#error_email').html("Please enter valid email address.");
		return false;
	} 
	
	$('#email').css('border-color','black');
	$('#error_email').html("");
	return true;
	
}

function validatePwd() {
	
	var vPassword = $('#password').val();
	var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

		
	if(vPassword ==  '' || !pattern.test(vPassword) ) {
		$('#password').css('border-color','red');
		$('#error_pwd').html("Password must contain atleast one number, one upper case letter, one lowercase letter and one special charater. Password should be of min 6 and max 20 chars length.");
		return false;
	 } 
			
	$('#password').css('border-color','black');
	 $('#error_pwd').html("");
	 return true;
		
}

function validateConfirmPwd() {
	
	var vPassword = $('#password').val();
	var vCpassword = $('#confirmPassword').val();
		
	if(vCpassword ==  '' || vCpassword != vPassword ) {
		$('#confirmPassword').css('border-color','red');
		$('#error_confirmpwd').html("Password should match the entered password.");
		return false;
	 } 
			
	$('#confirmPassword').css('border-color','black');
	$('#error_confirmpwd').html("");
	return true;
		
}

function validatePhoneNumber() {
	
	var vNum = $('#phoneNumber').val();
	var pattern = new RegExp ("[1-9]{1}[0-9]{9}");
	
	if( !pattern.test(vNum)  ) {
		
		$('#phoneNumber').css('border-color','red');
		$('#error_phone').html("Please enter a valid phone number.");
		return false;
	 } 
			
	$('#phoneNumber').css('border-color','black');
	$('#error_phone').html("");
	return true;
	
}

function validateAddress() {
	
	var vAdd = $('#address').val();
	var pattern = new RegExp ("^.{1,150}$");
	
	if(vAdd ==  '' || !pattern.test(vAdd)  ) {
		
		$('#address').css('border-color','red');
		$('#error_address').html("Please enter a valid address.");
		return false;
	 } 
	$('#address').css('border-color','black');
	$('#error_address').html("");
	return true	
}

function validatePincode() {
	
	var vPincode = $('#pincode').val();
	var pattern = new RegExp ("^[0-9]{5,6}$");
	
	if(vPincode ==  '' || !pattern.test(vPincode)  ) {
		
		$('#pincode').css('border-color','red');
		$('#error_pincode').html("Please enter a valid pincode.");
		return false;
	} 
	$('#pincode').css('border-color','black');
	$('#error_pincode').html("");
	return true;
		
}

function validateCity() {
	
	var vCity = $('#city').val();
	var pattern = new RegExp("([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)");
	
	if(vCity ==  '' || !pattern.test(vCity)  ) {
		
		$('#city').css('border-color','red');
		$('#error_city').html("Please enter a city name.");
		return false;
	} 
	$('#city').css('border-color','black');
	$('#error_city').html("");
	return true;
	
}

function validateCountry() {
	
	var vCountry = $('#country').val();
	
	
	if(vCountry ==  '' ) {
		
		$('#country').css('border-color','red');
		$('#error_country').html("Please select a country from the list.");
		return false;
	} 
	$('#country').css('border-color','black');
	$('#error_country').html("");
	return true;
}

