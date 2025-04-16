
document.getElementById('signup-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault(); // Empêche l'envoi du formulaire
        alert('Les mots de passe ne correspondent pas !');
    } else {
        event.preventDefault(); // Empêche le comportement par défaut
        alert('Inscription réussie !');
        window.location.href = 'connexion.html'; // Redirige vers connexion.html
    }
});