function toggleFunc() {
    var x = document.getElementById("nav-menu");
    x.classList.toggle("responsive");
}

function validateForm() {
    let errorMsg = "There are error(s):\n";

    let fName = document.forms["contactForm"]["name"].value
    let rGender = document.forms["contactForm"]["gender"].value
    let fEmail = document.forms["contactForm"]["email"].value
    let fPhone = document.forms["contactForm"]["phone"].value
    let fPreference = document.forms["contactForm"]["preference"].value
    let fNewsletter = document.getElementById("newsletter").checked

    if (fName == "") {
        errorMsg += "Name must be filled out\n"
    } if (rGender == "") {
        errorMsg += "Gender must be chosen\n"
    } if (fEmail == "" ){
        errorMsg += "Email must be filled out\n"
    } if (fPreference == "") {
        errorMsg += "Preference must be chosen\n"
    }
    
    if (fPhone == "") {
        errorMsg += "Phone must be filled out\n"
    } else if(fPhone.length > 13 || fPhone.length < 11) {
        errorMsg += "Phone number digit must be in range of 11-13 digits\n"
    } else {
        for (let i = 0; i < fPhone.length; i++) {
            var num = fPhone[i]
            if(isNaN(num)) {
                errorMsg += "Wrong phone number format\n"
                break
            }            
        }
    }


    if(errorMsg != "There are error(s):\n") {
        alert(errorMsg)
    } else {
        var message = "Your response submitted successfully"
        if (fNewsletter == true) {
            message += `.\nWe will send our latest newsletter to ${fEmail}.`
        } 
        confirm(message)
    }
}