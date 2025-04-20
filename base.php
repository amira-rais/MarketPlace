<?php
// Paramètres de connexion EasyPHP (par défaut)
$serveur = "localhost";
$utilisateur = "root"; // Utilisateur par défaut d'EasyPHP
$motdepasse = ""; // Mot de passe par défaut (vide)
$basededonnees = "shop";

// Établir la connexion
$connexion = mysqli_connect($serveur, $utilisateur, $motdepasse, $basededonnees);

// Vérifier la connexion
if (!$connexion) {
    die("Échec de la connexion : " . mysqli_connect_error());
}
echo "Connexion réussie à la base de données shop";
?>