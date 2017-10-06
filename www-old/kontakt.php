<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Eigentumswohnungen, Frankfurt, Bockenheim"/>
<meta name="description" content="Auf diesen Seiten können Sie sich über ein besonderes Bauvorhaben an einem ebenso besonderen Standort informieren. Wenn sie auf Qualität Wert legen und Ihnen eine gute Lage wichtig ist, könnte dies genau das richtige Projekt für Sie sein! Unsere Eigentumswohnungen sind für Selbstnutzer und Kapitalanleger geplant und bestechen durch eine anspruchsvolle Architektur."/>
<meta name="city" content="Frankfurt" /> 
<meta name="country" content="Germany" /> 
<meta name="state" content="Hessen" /> 
<meta name="zipcode" content="60487" /> 
<meta name="language" content="de"/> 
<meta name="robots" content="index,follow"/> 
<meta name="publisher" content="Marc Schwarz immobilien GmbH" /> 
<meta name="copyright" content="Marc Schwarz" />

<!-- Geo Meta Daten -->
<meta name="geo.region" content="DE-HE" />
<meta name="geo.placename" content="Rödelheimer Landstraße, 60487 Frankfurt, Deutschland" />

<!-- ICONS -->
<link rel="apple-touch-icon" href="img/layout/logo_iphone.png" type="image/png" />
<link rel="shortcut icon" href="img/layout/favicon.ico" />

<!-- CSS -->
<link href="css/layout.css" rel="stylesheet" type="text/css" />

<!-- JQUERY -->
<script type="text/javascript" src="js/jquery-1.7.1.js"></script>

<!-- LIGHTBOX SCRIPT -->
<link rel="stylesheet" href="lightbox/css/lightbox.css" type="text/css" media="screen" />
<script type="text/javascript" src="lightbox/js/jquery-ui-1.8.18.custom.min.js"></script>
<script type="text/javascript" src="lightbox/js/jquery.smooth-scroll.min.js"></script>
<script type="text/javascript" src="lightbox/js/lightbox.js"></script>
<title>Bernhardhof– Kontakt</title>

<script language="javascript" type="text/javascript">
function validate() {

	if ( document.formular.vorname.value=="" ) {
		alert("Bitte geben Sie Ihren Vornamen ein.");
		document.formular.vorname.focus();
		return false;
	}
	if ( document.formular.name.value=="" ) {
		alert("Bitte geben Sie Ihren Nachnamen ein.");
		document.formular.name.focus();
		return false;
	}
	if ( document.formular.telefon.value=="" ) {
		alert("Bitte geben Sie Ihren Telefonnummer ein.");
		document.formular.telefon.focus();
		return false;
	}
	if ( document.formular.email.value=="" || document.formular.email.value.indexOf("@")==-1 ) {
		alert("Bitte geben Sie Ihre E-Mail-Adresse ein.");
		document.formular.email.focus();
		return false;
	}
	
	
	return true;
}

</script>
<style type="text/css">
div#navi ul li a#kontakt { color:#b70718; }
</style>

</head>

<body>

<?php include_once("analyticstracking.php") ?>

<div id="page">
	<div id="navi">
    	<ul id="Navigation">
        	<li><a id="lage" href="lage.html">Lage</a></li>
            <li><a id="objekt" href="objekt.html">Objekt</a></li>
            <li><a id="wohnungen" href="wohnungen.html">Wohnungen</a></li>
            <li><a id="ausstattung" href="ausstattung.html">Ausstattung</a></li>
            <li><a id="kontakt" href="kontakt.php">Kontakt</a></li>
            <li><a id="finanzierung" href="finanzierung.html">Finanzierung</a></li>
        </ul>
    </div>
      <div id="branding" >
            <h1 style="cursor: pointer;" onkeypress="location.href='/';" onclick="location.href='/';">Mitten in Frankfurt – Eigentumswohnungen in Frankfurt Bockenheim</h1>
            <blockquote>
                in Ihrer nächsten Nachbarschaft, der Rödelheimer Landstraße entstehen ab Sommer diesen Jahres sehr schöne,
                hochwertige Eigentumswohnungen für Kapitalanleger und Selbstnutzer.<br /><br />
                Die eleganten Wohnungen werden mit grosse Preis-Leistungsverhältnis.
            </blockquote>
      </div>
	<div id="content">
<?PHP

			if ($_POST['vorname']) {

				 // hier steht der mail-Befehl zum Versenden
				 echo "<p>Vielen Dank, Ihre Anfrage wurde versandt: <br /><br />

							
							Ihr Vorname: ". $_POST['vorname']."<br />
							Ihr Name: ". $_POST['name']."<br />
							Ihre E-Mail-Adresse: ". $_POST['email']."<br />
							Ihr Zimmerwunsch:<br />";
							
							foreach($_POST['zimmer'] AS $name)
								   {
								   echo $name."<br>";
								   $suchanfrage[] = $name.", ";
								   } 
							
							echo "<br />Ihr Kommentar: <br/>". $_POST['nachricht']."<br /><br />
							
							Mit freundlichen Grüßen<br /><br />

							Marc Schwarz Immobilien GmbH!</p><br /> <br />
							<a href=\"/\">	&laquo; zurück</a>";
							
							
					
					
					$text = "Sie habe eine Nachricht von Ihrer Webseite www.mitten-in-frankfurt.info erhalten:\n Anrede: ".$_POST['anrede']."\n Vorname: ".$_POST['vorname']."\n Nachname: ".$_POST['name']."\n Straße: ".$_POST['strasse']."\n PLZ: ".$_POST['plz']." Ort: ".$_POST['ort']."\n\n Telefon: ".$_POST['telefon']."\n Zimmer: ".$suchanfrage[0].$suchanfrage[1].$suchanfrage[2].$suchanfrage[3].$suchanfrage[4]."\n E-Mail: ".$_POST['email']."\n\n Kommentar:\n ".$_POST['nachricht'];
					$mailheader = "Content-Type: text/plain; charset=utf-8\r\n"; 
					$subject = "Nachricht vom Kontaktformular www.mitten-in-frankfurt.info";
					$email = "m.peters@graphicon.de";
					
					mail($email,$subject,$text,$mailheader);
				 
				
				} else {
				
				 // HTML-Code zur Ausgabe des Formulars
					echo "
						<h2>Kontakt</h2>
						<p>Der Verkauf der Wohnungen Mitten-in-Frankfurt wird von der Marc Schwarz Immobilien GmbH betreut.
						Ihr Ansprechpartner für alle Fragen und einen persönlichen Termin ist Herr Marc Schwarz.</p>
						
						 <p><a target=\"_blank\" href=\"https://www.google.de/maps/place/R%C3%B6delheimer+Landstra%C3%9Fe+22,+60487+Frankfurt+am+Main/@50.1229564,8.6296651,17z/data=!3m1!4b1!4m2!3m1!1s0x47bd096e2b31a70f:0xeeaae5ef41c26b9f\">Anfahrt »</a></p>
						<p>Wenn Sie uns Ihre Kontaktdaten zukommen lassen, werden wir uns umgehend mit Ihnen in Verbindung setzen,
						um all Ihre Fragen zu beantworten.</p>
						 
						<p>Sie können uns selbstverständlich auch gerne anrufen. Unser Telefonsekretariat
						wird dann Ihre Daten aufnehmen, Sie direkt verbinden oder einen Rückrufwunsch notieren.</p>
						<p><b>Telefon: ﻿069 - 63 39 26 71</b></p>
						
						<form method=\"post\" name=\"formular\" action=\"kontakt.php\" onSubmit=\"return validate();\">
							
							<table  width=\"320\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
								<tr>
									<td class=\"formular\">Anrede:</td><td>Frau <input type=\"radio\" name=\"anrede\"  /> Herr <input type=\"radio\" name=\"anrede\" value=\"Herr\"  /></td>
								</tr>
								<tr>
									<td class=\"formular\">Vorname:*</td><td><input type=\"text\" name=\"vorname\" style=\"width:198px;\" /></td>
								</tr>
								<tr>
									<td class=\"formular\">Nachname:*</td><td><input type=\"text\" name=\"name\" style=\"width:198px;\" /></td>
								</tr>
							
								<tr> 
									<td class=\"formular\">E-Mail:*</td><td><input type=\"text\" name=\"email\" style=\"width:198px;\" /></td>
								</tr>
								<tr>
									<td class=\"formular\">Straße:</td><td> <input type=\"text\" name=\"strasse\" style=\"width:198px;\" /></td>
								</tr>
								<tr>
									<td class=\"formular\">PLZ/Ort:</td><td> <input type=\"text\" name=\"plz\" style=\"width:50px;\" maxlength=\"5\"/>&nbsp;<input type=\"text\" name=\"ort\" style=\"width:140px;\"/></td>
								</tr>
								<tr>
									<td class=\"formular\">Telefon:*</td><td> <input type=\"text\" name=\"telefon\" style=\"width:198px;\" /></td>
								</tr>
								<tr>
									<td class=\"formular\">Suchwunsch:</td>
									<td> 
											<select multiple name=\"zimmer[]\" size=\"3\" style=\"width:198px;\">
												<option>3 Zimmer</option>
												<option>4 Zimmer</option>
											</select>
											<p class=\"small\">(um mehrere Felder auszuwählen bitte die [Strg] Taste drücken) </p>
									</td>
								</tr>
								<tr>
									<td class=\"formular\" colspan=\"2\">&nbsp;
									</td>
								</tr>
								<tr>
									<td colspan=\"2\">
										Kommentar:<br />
										<textarea name=\"nachricht\" style=\"width:300px;height:180px;\"></textarea>
									</td>
								</tr>
								
								
								<tr>
									<td class=\"formular\" colspan=\"2\">
									<input type=\"submit\" name=\"Button\" value=\"Abschicken\" /><br /><br />
									</td>
								</tr>
								<tr>
									<td class=\"formular\" colspan=\"2\">
									Die mit * markierten Felder sind Pflichtfelder.
									</td>
								</tr>
							</table>
						</form>
						";
					}

			?>
        
    </div>
	
	<div id="left-col"> </div>
	<div id="footer"><a href="impressum.html">Impressum</a>
	</div>
	
</div>



</body>
</html>
