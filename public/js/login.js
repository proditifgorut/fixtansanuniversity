document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const submitButton = document.getElementById('submit-button');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if(submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Memproses...';
            }

            // Simulate API call
            setTimeout(() => {
                // On successful login:
                sessionStorage.setItem('isLoggedIn', 'true');
                window.location.href = '/pages/dashboard.html';
            }, 1000);
        });
    }
});
