document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.joinUs-form');
    const successMessage = document.getElementById('successMessage');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the form from submitting normally
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Replace with your deployed Apps Script web app URL
            const webAppUrl = 'https://script.google.com/macros/s/AKfycbyb4A7mrbd2F95DpZ5hfTt9kUdfCqrSSaXIuhE3HxSb0p2aIhLFILPuM5uuocyGJA0Y/exec';

            fetch(webAppUrl, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script web app
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                // Success feedback
                console.log('Form submitted successfully!');
                form.reset();
                successMessage.style.display = 'block';
                // Hide the success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again later.');
            }) 
        });
    }
});