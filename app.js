function calculer(){
    let taille = document.getElementById("taille").value;
    let poids = document.getElementById("poids").value;
    const result = (Math.round((poids*10000/(taille*taille))*10)/10);
        if (!isNaN(result) && result != ""){
            resultat.innerText = "Ton IMC est de : " + result
        } else{
            alert("La saisie n'est pas correcte")};
    if (result >30){
        conseils.innerText ="Attention ! Obésité et risque accru de développer certaines maladies.";
        resultat.classList.add("color_red");
    }  else if (result >= 25 && result <=29.9 ) {
        conseils.innerText ="Excès de poids pouvant occasionner certains risques pour la santé.";
        resultat.classList.add("color_yellow");
    } else if (result >= 18.5 && result <=24.9) {
        conseils.innerText ="Ton poids n'augmente pas les risques pour la santé.";
        resultat.classList.add("color_green");
    }  else {
        conseils.innerText ="Poids insuffisant et pouvant occasionner certains risques pour la santé.";
        resultat.classList.add("color_green");
    }
}

function clear(){window.location.reload()}

