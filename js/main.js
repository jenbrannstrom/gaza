$(document).ready(function() {
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-fade' // Class that is added to popup wrapper and background make it unique to apply your CSS animations just to this exact popup
    });

    $("#signup_form").submit(function(e){
        //e.preventDefault();

        var errors = 0;
        var name = $("#popup_name");
        var email = $("#popup_email");
        var address = $("#popup_address");

        // Check name.
        if(!validateName(name.val())){
            name.parent(".tooltipster").addClass("error");
            errors++;
        }
        else{
            name.parent(".tooltipster").removeClass("error");
        }

        // Check email.
        if(!validateEmail(email.val())){
            email.parent(".tooltipster").addClass("error");
            errors++;
        }
        else{
            email.parent(".tooltipster").removeClass("error");
        }

        // If no errors, submit the form.
        if(errors == 0){
            /*
            $("div.mfp-content").css("display","none");
            $("div.mfp-preloader").css("display","block");
            $.ajax({
                "method" : "POST",
                "url" : "http://mau.said.ps/mautic/form/submit?formId=3",
                "data" : $(this).serialize(),
                "success" : function(response){
                    top.location = "confirm.html";
                }
            });
            */
            return true;
        }
        else{
            return false;
        }
    });
});

function validateName(name){
    if(name.length < 5){
        return false;
    }
    else{
        return true;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateAddress(address){
    if(address.length < 10){
        return false;
    }
    else{
        return true;
    }
}

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
