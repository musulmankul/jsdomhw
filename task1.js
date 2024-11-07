function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    let isValid = true;

    if (name.value === '') {
        isValid = false;
        name.classList.add('error');
        document.getElementById('nameError').textContent = 'не может быть пустым';
    } else {
        name.classList.remove('error');
        document.getElementById('nameError').textContent = '';
    }

    if (!email.value.includes('@') || !email.value.includes('.')) {
        isValid = false;
        email.classList.add('error');
        document.getElementById('emailError').textContent = 'должно содержать символы "@" и "."';
    } else {
        email.classList.remove('error');
        document.getElementById('emailError').textContent = '';
    }

    if (password.value.length < 8) {
        isValid = false;
        password.classList.add('error');
        document.getElementById('passwordError').textContent = 'должен содержать минимум 8 символов';
    } else {
        password.classList.remove('error');
        document.getElementById('passwordError').textContent = '';
    }

    if (isValid) {
        alert('Форма отправлена');
    }
}
