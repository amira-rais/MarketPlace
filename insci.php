<?php
// Inclure le fichier de connexion
include 'base.php';

// Récupérer les données du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $psd = $_POST['psd'];
    $psdc = $_POST['psdc'];
    
        // Insérer dans la table inscrit
        $sql_inscrit = "INSERT INTO inscrit (nom, email, psd, psdc) 
                       VALUES ('$nom', '$email', '$psd', '$psdc')";
        
        if (mysqli_query($connexion, $sql_inscrit)) {
            echo "Inscription réussie dans la table inscrit!";
        } else {
            echo "Erreur: " . $sql_inscrit . "<br>" . mysqli_error($connexion);
        }
        
        // Insérer dans la table connexion
        $sql_connexion = "INSERT INTO connexion (email, psd) 
                         VALUES ('$email', '$psd')";
        
        if (mysqli_query($connexion, $sql_connexion)) {
            echo "<br>Données ajoutées à la table connexion!";
        } else {
            echo "Erreur: " . $sql_connexion . "<br>" . mysqli_error($connexion);
        }


// Fermer la connexion
mysqli_close($connexion);
?>

<!-- Formulaire HTML simple -->
<h2>Formulaire d'inscription</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  Nom: <input type="text" name="nom" required><br><br>
  Email: <input type="email" name="email" required><br><br>
  Mot de passe: <input type="password" name="psd" required><br><br>
  Confirmer mot de passe: <input type="password" name="psdc" required><br><br>
  <input type="submit" value="S'inscrire">
</form>