const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = './pages/login.html'
}