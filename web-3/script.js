function goto(){
    window.location.href="booking.html";

}
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the form element
    const bookingForm = document.getElementById('bookingForm');
    
    // Add submit event listener to the form
    bookingForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();
        
        // Clear all previous error messages
        clearErrors();
        
        // Validate all fields
        let isValid = true;
        
        // Validate First Name
        const firstName = document.getElementById('firstName');
        if (firstName.value.trim() === '') {
            showError('fnameError', 'First name is required');
            isValid = false;
        } else if (firstName.value.trim().length < 2) {
            showError('fnameError', 'First name must be at least 2 characters');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(firstName.value.trim())) {
            showError('fnameError', 'First name can only contain letters and spaces');
            isValid = false;
        }
        
        // Validate Last Name
        const lastName = document.getElementById('lastName');
        if (lastName.value.trim() === '') {
            showError('lnameError', 'Last name is required');
            isValid = false;
        } else if (lastName.value.trim().length < 2) {
            showError('lnameError', 'Last name must be at least 2 characters');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(lastName.value.trim())) {
            showError('lnameError', 'Last name can only contain letters and spaces');
            isValid = false;
        }
        
        // Validate Date of Birth
        const dob = document.getElementById('dob');
        if (dob.value === '') {
            showError('dobError', 'Date of birth is required');
            isValid = false;
        } else {
            // Check if user is at least 18 years old
            const birthDate = new Date(dob.value);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            if (age < 18) {
                showError('dobError', 'You must be at least 18 years old to book');
                isValid = false;
            } else if (age > 120) {
                showError('dobError', 'Please enter a valid date of birth');
                isValid = false;
            }
        }
        
        // Validate Gender
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            showError('genderError', 'Please select your gender');
            isValid = false;
        }
        
        // Validate Email
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email.value.trim() === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // If all validations pass, submit the form
        if (isValid) {
            alert('Booking confirmed! Thank you for choosing Travel Inc.');
            // Uncomment the next line if you want to actually submit the form
             bookingForm.submit();
            
            // Optional: Reset the form after successful submission
            bookingForm.reset();
        }
    });
    
    // Add real-time validation as user types
    addRealTimeValidation();
});

// Function to show error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    
    // Highlight the corresponding input field
    const inputId = elementId.replace('Error', '');
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.style.borderColor = 'red';
    }
}

// Function to clear all error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    // Remove red borders from all inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

// Function to add real-time validation
function addRealTimeValidation() {
    // First Name real-time validation
    document.getElementById('firstName').addEventListener('input', function() {
        const errorElement = document.getElementById('fnameError');
        if (this.value.trim() === '') {
            errorElement.textContent = 'First name is required';
            this.style.borderColor = 'red';
        } else if (this.value.trim().length < 2) {
            errorElement.textContent = 'First name must be at least 2 characters';
            this.style.borderColor = 'red';
        } else if (!/^[a-zA-Z\s]+$/.test(this.value.trim())) {
            errorElement.textContent = 'First name can only contain letters and spaces';
            this.style.borderColor = 'red';
        } else {
            errorElement.textContent = '';
            this.style.borderColor = 'green';
        }
    });
    
    // Last Name real-time validation
    document.getElementById('lastName').addEventListener('input', function() {
        const errorElement = document.getElementById('lnameError');
        if (this.value.trim() === '') {
            errorElement.textContent = 'Last name is required';
            this.style.borderColor = 'red';
        } else if (this.value.trim().length < 2) {
            errorElement.textContent = 'Last name must be at least 2 characters';
            this.style.borderColor = 'red';
        } else if (!/^[a-zA-Z\s]+$/.test(this.value.trim())) {
            errorElement.textContent = 'Last name can only contain letters and spaces';
            this.style.borderColor = 'red';
        } else {
            errorElement.textContent = '';
            this.style.borderColor = 'green';
        }
    });
    
    // Email real-time validation
    document.getElementById('email').addEventListener('input', function() {
        const errorElement = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (this.value.trim() === '') {
            errorElement.textContent = 'Email is required';
            this.style.borderColor = 'red';
        } else if (!emailPattern.test(this.value.trim())) {
            errorElement.textContent = 'Please enter a valid email address';
            this.style.borderColor = 'red';
        } else {
            errorElement.textContent = '';
            this.style.borderColor = 'green';
        }
    });
    
    // Date of Birth real-time validation
    document.getElementById('dob').addEventListener('change', function() {
        validateDOB(this);
    });
}

// Function to validate date of birth
function validateDOB(element) {
    const errorElement = document.getElementById('dobError');
    
    if (element.value === '') {
        errorElement.textContent = 'Date of birth is required';
        element.style.borderColor = 'red';
        return;
    }
    
    const birthDate = new Date(element.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    if (age < 18) {
        errorElement.textContent = 'You must be at least 18 years old to book';
        element.style.borderColor = 'red';
    } else if (age > 120) {
        errorElement.textContent = 'Please enter a valid date of birth';
        element.style.borderColor = 'red';
    } else {
        errorElement.textContent = '';
        element.style.borderColor = 'green';
    }
}