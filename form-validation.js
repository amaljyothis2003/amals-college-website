document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const firstName = document.getElementById('firstName');
    const middleName = document.getElementById('middleName');
    const lastName = document.getElementById('lastName');
    const dob = document.getElementById('dob');
    const age = document.getElementById('age');
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirmEmail');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const genderOptions = document.querySelectorAll('input[name="gender"]'); // Add gender radios
    const submitButton = document.querySelector('button[type="submit"]');
    const formErrorMessage = document.getElementById('formErrorMessage'); 

    const errorMessages = {
        firstName: "First name is required and should be a valid name.",
        middleName: "Middle name is required and should be a valid name.",
        lastName: "Last name is required and should be a valid name.",
        dob: "Date of birth is required.",
        age: "Age must be calculated automatically.",
        email: "Email is required and must be valid.",
        confirmEmail: "Email addresses must match.",
        password: "Password is required.",
        confirmPassword: "Passwords must match.",
        underAge: "You must be at least 18 years old.",
        gender: "Please select your gender." // Add gender error message
    };

    function showError(input, message) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        const error = input.nextElementSibling;
        if (error) {
            error.textContent = message;
            error.style.display = 'block';
        }
    }

    function showSuccess(input) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        const error = input.nextElementSibling;
        if (error) {
            error.textContent = '';
            error.style.display = 'none';
        }
    }

    function isName(str) {
        const trimmedStr = str.trim();
        return /^[A-Za-z\s]+$/.test(trimmedStr);
    }
    
    function isValidPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,15}$/;
        return regex.test(password);
    }

    function validateForm() {
        let isValid = true;

        // First Name
        if (!(isName(firstName.value.trim()))) {
            showError(firstName, errorMessages.firstName);
            isValid = false;
        } else {
            showSuccess(firstName);
        }

        // Middle Name
        if (!(isName(middleName.value.trim()))) {
            showError(middleName, errorMessages.middleName);
            isValid = false;
        } else {
            showSuccess(middleName);
        }

        // Last Name
        if (!(isName(lastName.value.trim()))) {
            showError(lastName, errorMessages.lastName);
            isValid = false;
        } else {
            showSuccess(lastName);
        }

        // Date of Birth and Age
        const today = new Date();
        const dobValue = new Date(dob.value);
        const userAge = today.getFullYear() - dobValue.getFullYear();
        const monthDifference = today.getMonth() - dobValue.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobValue.getDate())) {
            userAge--;
        }
        age.value = userAge;
        if (dob.value === '' || userAge < 18) {
            showError(dob, dob.value === '' ? errorMessages.dob : errorMessages.underAge);
            isValid = false;
        } else {
            showSuccess(dob);
        }

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            showError(email, errorMessages.email);
            isValid = false;
        } else {
            showSuccess(email);
        }

        // Confirm Email
        if (confirmEmail.value !== email.value || confirmEmail.value === "") {
            showError(confirmEmail, errorMessages.confirmEmail);
            isValid = false;
        } else {
            showSuccess(confirmEmail);
        }

        // Password
        if (password.value.trim() === '' || !(isValidPassword(password.value.trim()))) {
            showError(password, errorMessages.password);
            isValid = false;
        } else {
            showSuccess(password);
        }

        // Confirm Password
        if (confirmPassword.value !== password.value || confirmPassword.value === "") {
            showError(confirmPassword, errorMessages.confirmPassword);
            isValid = false;
        } else {
            showSuccess(confirmPassword);
        }

        // Gender Validation
        let genderSelected = false;
        genderOptions.forEach(option => {
            if (option.checked) {
                genderSelected = true;
            }
        });

        const genderError = document.getElementById('genderError');
        if (!genderSelected) {
            genderError.textContent = errorMessages.gender;
            genderError.style.display = 'block';
            isValid = false;
        } else {
            genderError.textContent = '';
            genderError.style.display = 'none';
        }

        // Update the submit button's state
        submitButton.disabled = !isValid;

        // Display the error message if the form is not valid
        if (!isValid) {
            formErrorMessage.textContent = "You have to enter all the fields.";
            formErrorMessage.style.display = 'block'; 
        } else {
            formErrorMessage.textContent = '';
            formErrorMessage.style.display = 'none'; 
        }

        return isValid;
    }

    // Real-time validation
    firstName.addEventListener('input', validateForm);
    middleName.addEventListener('input', validateForm);
    lastName.addEventListener('input', validateForm);
    dob.addEventListener('change', validateForm);
    email.addEventListener('input', validateForm);
    confirmEmail.addEventListener('input', validateForm);
    password.addEventListener('input', validateForm);
    confirmPassword.addEventListener('input', validateForm);

    // Gender validation on change
    genderOptions.forEach(option => {
        option.addEventListener('change', validateForm);
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault(); 
        }
    });

    // Hover effect for the submit button
    submitButton.addEventListener('mouseover', () => {
        if (submitButton.disabled) {
            submitButton.title = "You have not entered all fields";
        } else {
            submitButton.title = ""; // Clear the title if the button is enabled
        }
    });
});
