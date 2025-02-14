// Form validation
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const country = document.getElementById('country');

    // Reset previous error states
    clearErrors();

    // Validate fields
    let isValid = true;

    // Name validation
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    } else if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters');
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phone.value.trim()) {
        showError(phone, 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    }

    // Country validation
    if (!country.value) {
        showError(country, 'Please select a country');
        isValid = false;
    }

    // If valid, submit the form
    if (isValid) {
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;
        this.classList.add('loading');

        const formData = {
            name: name.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            country: country.value
        };

        // Send data to Flask backend
        fetch('/submit-lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'same-origin'
        })
        .then(response => {
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Server returned non-JSON response');
            }
            return response.json().then(data => {
                if (!response.ok) {
                    return Promise.reject(data);
                }
                return data;
            });
        })
        .then(data => {
            if (data.status === 'success') {
                showSuccess();
                this.reset();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            let errorMessage = 'An error occurred while submitting the form';
            if (error.errors && Array.isArray(error.errors)) {
                errorMessage = error.errors.join('\n');
            } else if (error.message) {
                errorMessage = error.message;
            }
            showMainError(errorMessage);
        })
        .finally(() => {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            this.classList.remove('loading');
        });
    }
});

// Show error message
function showError(input, message) {
    const formControl = input.parentElement;
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-sm mt-1';
    errorDiv.innerText = message;
    formControl.appendChild(errorDiv);
    input.classList.add('border-red-500');
}

// Show main error message at the top of the form
function showMainError(message) {
    const form = document.getElementById('leadForm');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4';
    errorDiv.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline"> ${message}</span>
    `;
    form.insertBefore(errorDiv, form.firstChild);

    // Remove error message after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Clear all errors
function clearErrors() {
    const errorMessages = document.querySelectorAll('.text-red-500, .bg-red-100');
    errorMessages.forEach(error => error.remove());
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => input.classList.remove('border-red-500'));
}

// Show success message
function showSuccess() {
    const form = document.getElementById('leadForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4';
    successMessage.innerHTML = `
        <strong class="font-bold">Success!</strong>
        <span class="block sm:inline"> Your application has been submitted. We'll contact you soon.</span>
    `;
    form.parentElement.insertBefore(successMessage, form.nextSibling);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}