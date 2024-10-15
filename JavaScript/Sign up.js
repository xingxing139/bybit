document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const passwordHint = document.getElementById('password-hint');

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!passwordPattern.test(password)) {
            passwordHint.style.display = 'block';
        } else {
            passwordHint.style.display = 'none';
        }
    });
});
