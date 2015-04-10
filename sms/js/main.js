$(document).ready(function() {
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-fade' // Class that is added to popup wrapper and background make it unique to apply your CSS animations just to this exact popup
    });


    $("#enter_number").submit(function(e) {
        e.preventDefault();
		$('#error_display').empty();
		if(validatePhone()){
			$.post("http://gazalp-mql.rhcloud.com/sms.php", {
                name: encodeURIComponent($("#popup_name").val()),
                phone_number: $("#phone_number").val()
            },
            function(data) {
                if (data == 2) {
                    $("#error_display").html("Phone Number already registered and verified! Please try again with a different phone number");
                } else if (data == 1) {
                    $("#phone_number2").val($("#phone_number").val());
                    $("#enter_number").fadeOut("fast");
                    $("#verify_number").fadeIn();
                } else {
                    $("#error_display").html("An error occured! Please try again with a different phone number");
                }
            }, "json");	
		}else{
			$('#error_display').html('Invalid Phone Number! Please Check!');
		}
		
    });

    $("#verify_number").submit(function(e) {
        e.preventDefault();
		$('#error_display').empty();
    	if($.isNumeric( $("#verification_code").val())){
		    $.post("http://gazalp-mql.rhcloud.com/status.php", {
                verification_code: $("#verification_code").val(),
                phone_number: $("#phone_number2").val()
            },
            function(data) {
                if (data == 0) {
                    $("#error_display").html(" Please check your verifcation code!");
                } else if (data == 1) {
                    var google_conversion_id = 979945925;
					var google_conversion_language = "ar";
					var google_conversion_format = "3";
					var google_conversion_color = "ffffff";
					var google_conversion_label = "rgaICIWus1YQxZOj0wM";
					var google_remarketing_only = false;
                    $.getScript( "http://www.googleadservices.com/pagead/conversion.js" );
					//alert("Verified! You will be redirected to a new Page!");
					window.location.replace("thankyou.html");
                }
            }, "json");
		}else{
			$('#error_display').html('Invalid Verification Code! Please Check!');
		}
    });
});

function validatePhone() {
    var a = document.getElementById("phone_number").value;
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a) && $.isNumeric(a) ) {
        return true;
    }
    else {
        return false;
    }
}
