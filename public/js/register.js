document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const submitButton = document.getElementById('submit-button');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if(submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Memproses...';
            }

            // Simulate API call
            setTimeout(() => {
                // On successful registration, redirect to login:
                alert('Pendaftaran berhasil! Silakan masuk.');
                window.location.href = '/pages/login.html';
            }, 1000);
        });
    }
});
