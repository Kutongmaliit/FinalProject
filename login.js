document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        window.location.href = 'home.html';
    });
});
