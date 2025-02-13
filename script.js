document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const responseDiv = document.getElementById('response');
    const loadingDiv = document.getElementById('loading');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from refreshing the page

        // Disable the submit button and show loading message
        submitBtn.disabled = true;
        loadingDiv.style.display = 'block';
        responseDiv.innerHTML = ''; // Clear previous response

        // Create a FormData object from the form
        const formData = new FormData(form);

        // Send the form data using Fetch API
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text()) // Parse the response as text
        .then(data => {
            responseDiv.innerHTML = data; // Display the response from the server
        })
        .catch(error => {
            responseDiv.innerHTML = 'An error occurred: ' + error; // Display an error message
        })
        .finally(() => {
            // Re-enable the submit button and hide loading message
            submitBtn.disabled = false;
            loadingDiv.style.display = 'none';
        });
    });
});