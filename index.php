<!-- MON SITE INTERNET PORTEFOLIO : index -->
<!DOCTYPE html>
<html>

<head>
    <title>Pierre AUBRY - Portfolio </title>
    <link rel="icon" href="logos/logo_site.png">
<!--     <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">

    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">
 
<body>

<div id="cursor"></div>
<div id="accueil"></div>
<table>
    <tr>
        <td width="19%" style="position:fixed;">
        <!-- inclu menu deroulant -->
            <?php include("menuderoulant.html"); ?>
        </td>
        <td>
            <!-- inclu en-tete -->
            <?php include("entete.html"); ?>
        </td>
    </tr>
</table>


<br>


<!-- include the content of mesprojets.html -->
    <div id="portfolio">
    <?php include("mesprojets.html"); ?>
</div>

<br>

<!-- include the content of contact.html -->
    <div id="contact">
    <?php include("contact.html"); ?>
    </div>

<!-- include the content of footer.html -->
    <?php include("footer.html"); ?>


<!-- JAVASCRIPT CURSEUR -->
<script src="javascript/curseurJS.js"></script>

</body>

</html>

