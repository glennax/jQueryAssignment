$(document).ready(function(){
	$(":text, #first_name, #last_name, #email_address, #home_address, #phone_number").after("<span></span>");
	//validate on submit
	$("#form").submit(
		function(event){
			var first_nameValid = true;
			var last_nameValid = true;
			var home_addressValid = true;
			var phone_numberValid = true;
			var email_addressValid = true;
			// validate first_name field
			var first_name = $("#first_name").val();
			if(first_name.length <= 0){
				$("#first_name").next().text("This field is required.");
				$('#first_name').css('border-color', 'red');
				first_nameValid = false;
			}else{
				$("#first_name").val(first_name);
				$("#first_name").css('border-color', '');
				$("#first_name").next().text("");
			};

			// validate last_name field
			var last_name = $("#last_name").val();
			if(last_name.length <= 0){
				$("#last_name").next().text("This field is required.");
				$("#last_name").css('border-color', 'red');
				last_nameValid = false;
			}else{
				$("#last_name").val(last_name);
				$("#last_name").css('border-color', '');
				$("#last_name").next().text("");
			};

			// validate home_address field
			var home_address = $("#home_address").val();
			if(home_address.length <= 0){
				$("#home_address").next().text("This field is required.");
				$('#home_address').css('border-color', 'red');
				home_addressValid = false;
			}else{
				$("#home_address").val(home_address);
				$("#home_address").css('border-color', '');
				$("#home_address").next().text("");
			};
			
			// validate phone_number field
			var phone_number= $("#phone_number").val();
  			if(isNaN(phone_number) == false){
				$('#phone_number').val( 
					"("+
					phone_number[0] + 
					phone_number[1] +
					phone_number[2]
					 + ")" +
					phone_number[3] +
					phone_number[4] +
					phone_number[5] 
					 + "-" +
					phone_number[6] +
					phone_number[7] +
					phone_number[8] +
					phone_number[9] )
				$('#phone_number').css('border-color', '');
			}else{
				$("#phone_number").css('border-color', 'red');
				$("#phone_number").next().text("Not a number.");
				phone_numberValid == false;
			};

			
			// validate email_address field
			var email_address = $("#email_address").val();
			if(email_address.indexOf("@") > -1){
				$("#email_address").val(email_address);
				$("#email_address").next().text("");
				$('#email_address').css('border-color', '');
			}else{
				$("#email_address").next().text("Not a valid email address.");
				$("#email_address").css('border-color', 'red');
				email_addressValid == false;
			};

			if(!first_nameValid || 
			   !last_nameValid ||
			   !home_addressValid ||
			   !phone_numberValid ||
			   !email_addressValid ) {
				event.preventDefault(); 
			}
		});//on submit

	// validate phone_number field every time you type
	$("#phone_number").keyup(function( event ) {
		$("#phone_number").attr('maxlength','10');
		var phone_number= $("#phone_number").val();

		if (phone_number.length < 10 ) {
			$('#phone_number').css('border-color', 'red');
			$("#phone_number").next().text("This is less than 10 digits.");
		}else {
			$('#phone_number').css('border-color', 'green');
			$("#phone_number").next().text("");
		}
	});
})
