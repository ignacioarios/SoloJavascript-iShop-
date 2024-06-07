const signupForm = document.querySelector('#signupform')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value


    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isuserregistered = Users.find(user => user.email === email)
    if (isuserregistered) {
        return Swal.fire({
            title: "el email ya esta registrado",
            text: "intente nuevamente",
            icon: "error"
        });
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    Swal.fire({
        title: "Hola! Bienvenido",
        text: "Gracias por su confianza",
        icon: "success"
    });
    window.location.href = "../pages/login.html"
})
 