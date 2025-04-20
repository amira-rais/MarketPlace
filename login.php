<?php
// Inclure le fichier de connexion
include 'connexion.php';

// Vérifier les identifiants
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $psd = $_POST['psd'];
    
    $sql = "SELECT * FROM connexion WHERE email='$email' AND psd='$psd'";
    $result = mysqli_query($connexion, $sql);
    
    if (mysqli_num_rows($result) > 0) {
        echo "Connexion réussie!";
        // Démarrer une session et rediriger l'utilisateur
        session_start();
        $_SESSION['email'] = $email;
        header("Location: accueil.php");
    } else {
        echo "Email ou mot de passe incorrect!";
    }
}

// Fermer la connexion
mysqli_close($connexion);
?>

<!-- Formulaire HTML simple -->
<h2>Formulaire de connexion</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  Email: <input type="email" name="email" required><br><br>
  Mot de passe: <input type="password" name="psd" required><br><br>
  <input type="submit" value="Se connecter">
</form>