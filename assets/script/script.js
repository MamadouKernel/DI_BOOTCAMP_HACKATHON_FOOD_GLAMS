// Debut declaration des variables globales


let card = document.querySelector(".card");

// Fin declaration des variables globales



// Debut session commander plat Africain

let divCardAfricain = document.querySelector(".divCardAfricain");
const platsAfricain = [
    {
        image: "assets/imgs/africain/im3.jpg",
        nom: "Escargot sauté",
        prix: "2000 Fcfa",
    },

    {
        image: "assets/imgs/africain/im5.jpg",
        nom: "Riz Patte Feuille",
        prix: "7000 Fcfa",
    },

    {
        image: "assets/imgs/africain/im6.jpg",
        nom: "Sauce Arrachide",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/africain/im8.jpg",
        nom: "Soupe de mouton",
        prix: "7000 Fcfa",
    },

    {
        image: "assets/imgs/africain/im9.jpg",
        nom: "Soupe du Pêcheur",
        prix: "10.000 Fcfa",
    },

    {
        image: "assets/imgs/africain/im10.jpg",
        nom: "Sauce Graine",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/africain/im11.jpg",
        nom: "Garba",
        prix: "3000 Fcfa",
    },
]



for (const plat of platsAfricain) {
    let div1 = document.createElement("div");
    div1.classList.add("col-3");
    divCardAfricain.appendChild(div1);

    let div = document.createElement("div");
    div.classList.add("card");
    div.dataset.produit = JSON.stringify(plat);
    div1.appendChild(div);

    let img = document.createElement("img")
    img.classList.add("imageCard");
    img.src = plat.image;
    div.appendChild(img);

    let nomPlat = document.createElement("h5");
    nomPlat.classList.add("nomPlatCard");
    div.appendChild(nomPlat);
    nomPlat.textContent = plat.nom

    let prixPlat = document.createElement("p");
    prixPlat.classList.add("priPlat");
    div.appendChild(prixPlat);
    prixPlat.textContent = plat.prix;

    let ButtonPlat = document.createElement("button");
    ButtonPlat.classList.add("buttonPlat");
    div.appendChild(ButtonPlat);
    ButtonPlat.textContent = "Ajouter Au Panier"
    ButtonPlat.onclick = function (e) {
        let card = ButtonPlat.closest('.card')
        console.log(card.dataset.produit);
        // ajouter le produit au panier
        let panier = localStorage.getItem('panier')
        if (panier) 
            panier = JSON.parse(panier)
        else 
            panier = {}
        panier.produits = panier.hasOwnProperty('produits') ? panier.produits : [];
        panier.produits.push({...JSON.parse(card.dataset.produit), quantite: 1})
        localStorage.setItem("panier", JSON.stringify(panier))
    }
}



// Fin session commander plat Africain





// Debut session commander plat Americain
let divCardAmericain = document.querySelector(".divCardAmericain");

const platsAmericain = [
    {
        image: "assets/imgs/americain/Cauliflower.jpg",
        nom: "Cauliflower",
        prix: "7000 Fcfa",
    },

    {
        image: "assets/imgs/americain/easy_all_americaine.jpg",
        nom: "Easy all ameriaine",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/americain/quesadillas_au_poulet.jpg",
        nom: "Quesadillas au poulet",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/americain/roasted_chilli.jpg",
        nom: "Soupe de mouton",
        prix: "7000 Fcfa",
    },

    {
        image: "assets/imgs/americain/Salade à l'americaine.jpg",
        nom: "Salade à l'americaine",
        prix: "5000 Fcfa",
    },

    {
        image: "assets/imgs/americain/super_bowl.jpg",
        nom: "Super bowl",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/americain/Travers_de_porc.jpg",
        nom: "Travers de porc",
        prix: "10.000 Fcfa",
    },
]



for (const plat of platsAmericain) {
    let div1 = document.createElement("div");
    div1.classList.add("col-3");
    divCardAmericain.appendChild(div1);

    let div = document.createElement("div");
    div.classList.add("card");
    div1.appendChild(div);

    let img = document.createElement("img")
    img.classList.add("imageCard");
    img.src = plat.image;
    div.appendChild(img);

    let nomPlat = document.createElement("h5");
    nomPlat.classList.add("nomPlatCard");
    div.appendChild(nomPlat);
    nomPlat.textContent = plat.nom

    let prixPlat = document.createElement("p");
    prixPlat.classList.add("priPlat");
    div.appendChild(prixPlat);
    prixPlat.textContent = plat.prix;

    let ButtonPlat = document.createElement("button");
    ButtonPlat.classList.add("buttonPlat");
    div.appendChild(ButtonPlat);
    ButtonPlat.textContent = "Ajouter Au Panier"
}


// Fin session commander plat Americain




// Debut session commander plat Asiatique


let divCardAsiatique = document.querySelector(".divCardAsiatique");

const platsAsiatique = [
    {
        image: "assets/imgs/Asiatique/Boeuf_lok_lak.jpg",
        nom: "Boeuf lok lak",
        prix: "7000 Fcfa",
    },

    {
        image: "assets/imgs/Asiatique/recette_de_porc_japonnaise.jpg",
        nom: "Recette de porc japonnaise",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/Asiatique/rice_noodle_soup.jpg",
        nom: "Rice noodle soup",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/Asiatique/nems.jpg",
        nom: "Nems",
        prix: "7000 Fcfa",
    },

    {
        image: "assets/imgs/Asiatique/sczechuan.jpg",
        nom: "Sczechuan",
        prix: "5000 Fcfa",
    },

    {
        image: "assets/imgs/Asiatique/shrimp.jpg",
        nom: "Shrimp",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/Asiatique/torikatsu.jpg",
        nom: "torikatsu",
        prix: "10.000 Fcfa",
    },
]



for (const plat of platsAsiatique) {
    let div1 = document.createElement("div");
    div1.classList.add("col-3");
    divCardAsiatique.appendChild(div1);

    let div = document.createElement("div");
    div.classList.add("card");
    div1.appendChild(div);

    let img = document.createElement("img")
    img.classList.add("imageCard");
    img.src = plat.image;
    div.appendChild(img);

    let nomPlat = document.createElement("h5");
    nomPlat.classList.add("nomPlatCard");
    div.appendChild(nomPlat);
    nomPlat.textContent = plat.nom

    let prixPlat = document.createElement("p");
    prixPlat.classList.add("priPlat");
    div.appendChild(prixPlat);
    prixPlat.textContent = plat.prix;

    let ButtonPlat = document.createElement("button");
    ButtonPlat.classList.add("buttonPlat");
    div.appendChild(ButtonPlat);
    ButtonPlat.textContent = "Ajouter Au Panier"
}

// Fin session commander plat Asiatique




// Debut session commander plat Europeen


let divCardEuropeen = document.querySelector(".divCardEuropeen");

const platsEuropeen = [
    {
        image: "assets/imgs/Europeen/Escalope_de_veau_milannaise.jpg",
        nom: "Escalope de veau milannaise",
        prix: "7000 Fcfa",
    },

    {
        image: "assets/imgs/Europeen/German_Pot.jpg",
        nom: "German Pot",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/Europeen/Haluski.jpg",
        nom: "Haluski",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/Europeen/potato_Round.jpg",
        nom: "Potato Round",
        prix: "7000 Fcfa",
    },

    {
        image: "assets/imgs/Europeen/poulet_aux_noix_de_cajoux.jpg",
        nom: "poulet aux noix de cajoux",
        prix: "12.000 Fcfa",
    },

    {
        image: "assets/imgs/Europeen/Risoto_Royal.jpg",
        nom: "Risoto_Royal",
        prix: "8000 Fcfa",
    },

    {
        image: "assets/imgs/Europeen/Roti_De_Porc_aux_Pommes_et_pruneaux.jpg",
        nom: "Roti De Porc aux Pommes et pruneaux",
        prix: "10.000 Fcfa",
    },

    {
        image: "assets/imgs/Europeen/Roti_De_Porc.jpg",
        nom: "Roti De Porc",
        prix: "10.000 Fcfa",
    },

    {
        image: "assets/imgs/Europeen/Tartare_De_Boeuf_Du_Bistrot.jpg",
        nom: "Tartare De Boeuf Du Bistrot",
        prix: "10.000 Fcfa",
    },
]



for (const plat of platsEuropeen) {
    let div1 = document.createElement("div");
    div1.classList.add("col-3");
    divCardEuropeen.appendChild(div1);

    let div = document.createElement("div");
    div.classList.add("card");
    div1.appendChild(div);

    let img = document.createElement("img")
    img.classList.add("imageCard");
    img.src = plat.image;
    div.appendChild(img);

    let nomPlat = document.createElement("h5");
    nomPlat.classList.add("nomPlatCard");
    div.appendChild(nomPlat);
    nomPlat.textContent = plat.nom

    let prixPlat = document.createElement("p");
    prixPlat.classList.add("priPlat");
    div.appendChild(prixPlat);
    prixPlat.textContent = plat.prix;

    let ButtonPlat = document.createElement("button");
    ButtonPlat.classList.add("buttonPlat");
    div.appendChild(ButtonPlat);
    ButtonPlat.textContent = "Ajouter Au Panier"
}

// Fin session commander plat Europeen