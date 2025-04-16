document.getElementById('login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        event.preventDefault(); // Empêche l'envoi du formulaire
        alert('Veuillez remplir tous les champs !');
    } else {
        alert('Connexion réussie !');
        // Vous pouvez rediriger ou gérer la connexion ici
        window.location.href = 'dashboard.html'; // Exemple de redirection vers une autre page
    }
});