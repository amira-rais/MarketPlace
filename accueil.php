<?php
// Démarrer la session
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}

// Inclure le fichier de connexion
include 'connexion.php';

// Récupérer les informations de l'utilisateur
$email = $_SESSION['email'];
$sql = "SELECT * FROM inscrit WHERE email='$email'";
$result = mysqli_query($connexion, $sql);
$utilisateur = mysqli_fetch_assoc($result);
?>

<h2>Bienvenue <?php echo $utilisateur['nom']; ?>!</h2>
<p>Email: <?php echo $utilisateur['email']; ?></p>

<a href="deconnexion.php">Déconnexion</a>