let isLoginMode = true; // By default, we show the Login screen

function toggleAuth() {
    isLoginMode = !isLoginMode; // Switches true to false, or false to true

    const title = document.getElementById('auth-title');
    const submitBtn = document.getElementById('submit-btn');
    const toggleLink = document.getElementById('toggle-link');

    if (isLoginMode) {
        title.innerText = "Login to CourtRush";
        submitBtn.innerText = "Login";
        toggleLink.innerText = "Sign Up";
    } else {
        title.innerText = "Create an Account";
        submitBtn.innerText = "Sign Up";
        toggleLink.innerText = "Login";
    }
}