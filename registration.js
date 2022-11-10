function register() {
    
    // 1. Get all the text fields using document.getElementsByClassName();
    var fields = document.getElementsByClassName('form-control');
    

    // 2. Assign to these variables the corresponding fields
    //    firstNameField, lastNameField, emailField, passwordField
    var firstNameField = fields[0];
    var lastNameField = fields[1];
    var emailField = fields[2];
    var passwordField = fields[3];


    var errors = [];

    // 3. Use the appropriate control statements to validate the fields
    //    Note: for now, only check if the field is empty

    // 4. If any field is empty, push the error into the errors array
    // e.g, "Please enter your first name"

    var errorsAlertBox = document.getElementsByClassName('alert-danger')[0];
    var errorsSuccessBox = document.getElementsByClassName('alert-success')[0];

    // 8. Reset the state of the alert boxes

    if( firstNameField.value.length === 0 ) {
        errors.push('First Name error');
    }

    if( lastNameField.value.length === 0 ) {
        errors.push('Last Name error');
    }

    if( emailField.value.length === 0 ) {
        errors.push('Email error');
    }

    if( passwordField.value.length === 0 ) {
        errors.push('Password error');
    }

    // 5. Reveal results to user
    if(errors.length > 0) {

        errorsSuccessBox.className = 'alert alert-success mt-3 d-none'
        errorsAlertBox.classList.remove('d-none');
        errorsAlertBox.innerHTML = errors.join('</br>')

        // 6. Replace the text inside the errors alert box with the errors
        // in the 'errors' array. In other words,
        // "Please enter your first name"
        // "Please enter your last name"
        // etc.

    } else {
        // 7. Make the success alert box appear.
        errorsAlertBox.className = 'alert alert-danger mt-3 d-none'
        errorsSuccessBox.classList.remove('d-none');
        errorsSuccessBox.innerHTML = 'Registration successful!'
    }
}