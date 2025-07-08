// Partie 1 : Récupérer les données d'un API
const url = "https://blockchain.info/ticker";
async function afficherPrixBitcoin() {
	// Créer une requete
	// let requete = new XMLHttpRequest();

	// requete.open("GET", url); // Premier requete GET / POST, Deuxième paramète: url
	// requete.responseType = "json"; // Nous attendons du JSON

	// requete.send(); // Nous envoyons notre requete

	// requete.onload = function () {
	// 	// Vérifier si le traitement est terminé
	// 	if (requete.readyState === XMLHttpRequest.DONE) {
	// 		// Vérifier que tout s'est bien passée sans erreur
	// 		if (requete.status === 200) {
	// 			// Stocker les données de l'API
	// 			let reponse = requete.response;
	// 			// Récupérer le prix du bitcoin en Euros
	// 			let prixEnEuros = reponse.EUR.last;
    //             let prixEnDollars = reponse.USD.last;
    //             // Afficher le prix dans le site
	// 			document.querySelector("#price_label_euro").textContent = prixEnEuros;
	// 			document.querySelector("#price_label_dollars").textContent = prixEnDollars;
	// 		} else {
	// 			alert(
	// 				"Un problème est survenu, Veuillez revenir plus tard !"
	// 			);
	// 		}
	// 	}
	// };
	// const requete = await fetch(url, {method: "GET"});

	// if(!requete.ok) {
	// 	alert("Erreur");
	// } else {
	// 	let donnees = await requete.json();
	// 	document.querySelector("#price_label_euro").textContent = donnees.EUR.last;
	// 	document.querySelector("#price_label_dollars").textContent = donnees.USD.last;
	// }

	axios.get(url)
	.then(function(donnees) {
		console.log(donnees);
		document.querySelector("#price_label_euro").textContent = donnees.data.EUR.last;
		document.querySelector("#price_label_dollars").textContent = donnees.data.USD.last;
	})
	.catch(function(erreur) {
		alert("erreur !");
	})
}
setInterval(afficherPrixBitcoin, 1000);


// Partie 2 : Envoyer des données à l'API
const url2 = "https://lesoublisdelinfo.com/api.php";

async function envoyerDonnees(prenom) {
	req = await fetch(url2, { 
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: new URLSearchParams ({
			prenom
		})
	 });

	if (!req.ok) {
		alert("Erreur");
	} else {
		let reponse = await req.json();
		console.log(reponse.resultat)
	}

}

envoyerDonnees("Lucas Falk")
// let envoi = new XMLHttpRequest();
// envoi.open("POST", url2);
// envoi.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// envoi.responseType = "json";
// envoi.send("prenom=Lucas");


// envoi.onload = function() {
//     if(envoi.readyState === XMLHttpRequest.DONE) {
//         if(envoi.status === 200) {
//             let reponse = envoi.response;
//             console.log(reponse)
//         } else {
//             alert("Un problème est intervenu, merci de revenir plus tard !")
//         }
//     }
// }