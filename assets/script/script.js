// Debut declaration des variables globales


let card = document.querySelector(".card");
let liste = document.querySelector(".liste");
// Fin declaration des variables globales



// Debut session commander plat Africain

let divCardAfricain = document.querySelector(".divCardAfricain");
const platsAfricain = [
    {
        id:1,
        image: "assets/imgs/africain/im3.jpg",
        nom: "Escargot sauté",
        prix: "2000 ",
    },

    {
        id:2,
        image: "assets/imgs/africain/im5.jpg",
        nom: "Riz Patte Feuille",
        prix: "7000 ",
    },

    {
        id:3,
        image: "assets/imgs/africain/im6.jpg",
        nom: "Sauce Arrachide",
        prix: "8000 ",
    },

    {
        id:29,
        image: "assets/imgs/africain/im8.jpg",
        nom: "Soupe de mouton",
        prix: "7000",
    },

    {
        id:4,
        image: "assets/imgs/africain/im9.jpg",
        nom: "Soupe du Pêcheur",
        prix: "10.000 Fcfa",
    },

    {
        id:5,
        image: "assets/imgs/africain/im10.jpg",
        nom: "Sauce Graine",
        prix: "8000 Fcfa",
    },

    {
        id:5,
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

    //Debut Ajout des elements selectionnées par dans le boutton dans le panier
    ButtonPlat.onclick = function (e) {
        let card = ButtonPlat.closest('.card')
        let produit =JSON.parse(card.dataset.produit);
        let tr = document.createElement("tr");
        liste.appendChild(tr);
        let td1 = document.createElement("td");
        td1.textContent = produit.id;
        tr.appendChild(td1);
        
        let td2 = document.createElement("td");
        let image = document.createElement("img");
        image.style.width = "8rem";
        image.style.height = "6rem";
        image.src = produit.image;
        td2.appendChild(image);
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = produit.nom;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = produit.prix;
        td4.setAttribute("id","produit-prix-" + produit.id);
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = produit.prix;
        td5.setAttribute("id","produit-total-" + produit.id);
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.textContent = 1;
        td6.setAttribute("id","quantite-total-" + produit.id);
        tr.appendChild(td6)


        let td7 = document.createElement("td");

        // creation des boutton ajouter diminuer et supprimer
        let boutton = `<button class="boutton_Plus boutton" id="bouton-plus-${produit.id}" onClick = AjouterProduit(${produit.id})><i class="bi bi-plus-lg"></i></button><button class="boutton_Moins boutton" id="bouton-moins-${produit.id}" onClick = diminuerProduit(${produit.id})><i class="bi bi-dash"></i></button><button class="boutton_Sup boutton" id="bouton-sup-${produit.id}" onClick = SupprimerProduit(${produit.id})><i class="bi bi-trash3"></i></button>`
        td7.innerHTML = boutton;
        tr.appendChild(td7);
        
    }
    
    //Fin Ajout des elements selectionnées par dans le boutton dans le panier
}

// Fin session commander plat Africain





// Debut session commander plat Americain
let divCardAmericain = document.querySelector(".divCardAmericain");

const platsAmericain = [
    {
        id:6,
        image: "assets/imgs/americain/Cauliflower.jpg",
        nom: "Cauliflower",
        prix: "7000 Fcfa",
    },

    {
        id:7,
        image: "assets/imgs/americain/easy_all_americaine.jpg",
        nom: "Easy all ameriaine",
        prix: "8000 Fcfa",
    },

    {
        id:8,
        image: "assets/imgs/americain/quesadillas_au_poulet.jpg",
        nom: "Quesadillas au poulet",
        prix: "8000 Fcfa",
    },

    {
        id:9,
        image: "assets/imgs/americain/roasted_chilli.jpg",
        nom: "Soupe de mouton",
        prix: "7000 Fcfa",
    },

    {
        id:10,
        image: "assets/imgs/americain/Salade à l'americaine.jpg",
        nom: "Salade à l'americaine",
        prix: "5000 Fcfa",
    },

    {
        id:11,
        image: "assets/imgs/americain/super_bowl.jpg",
        nom: "Super bowl",
        prix: "8000 Fcfa",
    },

    {
        id:12,
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
    ButtonPlat.textContent = "Ajouter Au Panier";

    //Debut Ajout des elements selectionnées par dans le boutton dans le panier
    ButtonPlat.onclick = function (e) {
        let card = ButtonPlat.closest('.card')
        let produit =JSON.parse(card.dataset.produit);
        let tr = document.createElement("tr");
        liste.appendChild(tr);
        let td1 = document.createElement("td");
        td1.textContent = produit.id;
        tr.appendChild(td1);
        
        let td2 = document.createElement("td");
        let image = document.createElement("img");
        image.style.width = "8rem";
        image.style.height = "6rem";
        image.src = produit.image;
        td2.appendChild(image);
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = produit.nom;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = produit.prix;
        td4.setAttribute("id","produit-prix-" + produit.id);
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = produit.prix;
        td5.setAttribute("id","produit-total-" + produit.id);
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.textContent = 1;
        td6.setAttribute("id","quantite-total-" + produit.id);
        tr.appendChild(td6)


        let td7 = document.createElement("td");

        // creation des boutton ajouter diminuer et supprimer
        let boutton = `<button class="boutton_Plus boutton" id="bouton-plus-${produit.id}" onClick = AjouterProduit(${produit.id})><i class="bi bi-plus-lg"></i></button><button class="boutton_Moins boutton" id="bouton-moins-${produit.id}" onClick = diminuerProduit(${produit.id})><i class="bi bi-dash"></i></button><button class="boutton_Sup boutton" id="bouton-sup-${produit.id}" onClick = SupprimerProduit(${produit.id})><i class="bi bi-trash3"></i></button>`
        td7.innerHTML = boutton;
        tr.appendChild(td7);
        
    }
    //Fin Ajout des elements selectionnées par dans le boutton dans le panier
}


// Fin session commander plat Americain




// Debut session commander plat Asiatique


let divCardAsiatique = document.querySelector(".divCardAsiatique");

const platsAsiatique = [
    {
        id:13,
        image: "assets/imgs/Asiatique/Boeuf_lok_lak.jpg",
        nom: "Boeuf lok lak",
        prix: "7000 Fcfa",
    },

    {
        id:14,
        image: "assets/imgs/Asiatique/recette_de_porc_japonnaise.jpg",
        nom: "Recette de porc japonnaise",
        prix: "8000 Fcfa",
    },

    {
        id:15,
        image: "assets/imgs/Asiatique/rice_noodle_soup.jpg",
        nom: "Rice noodle soup",
        prix: "8000 Fcfa",
    },

    {
        id:16,
        image: "assets/imgs/Asiatique/nems.jpg",
        nom: "Nems",
        prix: "7000 Fcfa",
    },

    {
        id:17,
        image: "assets/imgs/Asiatique/sczechuan.jpg",
        nom: "Sczechuan",
        prix: "5000 Fcfa",
    },

    {
        id:18,
        image: "assets/imgs/Asiatique/shrimp.jpg",
        nom: "Shrimp",
        prix: "8000 Fcfa",
    },

    {
        id:19,
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

    //Debut Ajout des elements selectionnées par dans le boutton dans le panier
    ButtonPlat.onclick = function (e) {
        let card = ButtonPlat.closest('.card')
        let produit =JSON.parse(card.dataset.produit);
        let tr = document.createElement("tr");
        liste.appendChild(tr);
        let td1 = document.createElement("td");
        td1.textContent = produit.id;
        tr.appendChild(td1);
        
        let td2 = document.createElement("td");
        let image = document.createElement("img");
        image.style.width = "8rem";
        image.style.height = "6rem";
        image.src = produit.image;
        td2.appendChild(image);
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = produit.nom;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = produit.prix;
        td4.setAttribute("id","produit-prix-" + produit.id);
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = produit.prix;
        td5.setAttribute("id","produit-total-" + produit.id);
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.textContent = 1;
        td6.setAttribute("id","quantite-total-" + produit.id);
        tr.appendChild(td6)


        let td7 = document.createElement("td");

        // creation des boutton ajouter diminuer et supprimer
        let boutton = `<button class="boutton_Plus boutton" id="bouton-plus-${produit.id}" onClick = AjouterProduit(${produit.id})><i class="bi bi-plus-lg"></i></button><button class="boutton_Moins boutton" id="bouton-moins-${produit.id}" onClick = diminuerProduit(${produit.id})><i class="bi bi-dash"></i></button><button class="boutton_Sup boutton" id="bouton-sup-${produit.id}" onClick = SupprimerProduit(${produit.id})><i class="bi bi-trash3"></i></button>`
        td7.innerHTML = boutton;
        tr.appendChild(td7);
        
    }
    //Fin Ajout des elements selectionnées par dans le boutton dans le panier
}

// Fin session commander plat Asiatique




// Debut session commander plat Europeen


let divCardEuropeen = document.querySelector(".divCardEuropeen");

const platsEuropeen = [
    {
        id : 20,
        image: "assets/imgs/Europeen/Escalope_de_veau_milannaise.jpg",
        nom: "Escalope de veau milannaise",
        prix: "7000 Fcfa",
    },

    {
        id:21,
        image: "assets/imgs/Europeen/German_Pot.jpg",
        nom: "German Pot",
        prix: "8000 Fcfa",
    },

    {   
        id:22,
        image: "assets/imgs/Europeen/Haluski.jpg",
        nom: "Haluski",
        prix: "8000 Fcfa",
    },

    {
        id:23,
        image: "assets/imgs/Europeen/potato_Round.jpg",
        nom: "Potato Round",
        prix: "7000 Fcfa",
    },

    {
        id:24,
        image: "assets/imgs/Europeen/poulet_aux_noix_de_cajoux.jpg",
        nom: "poulet aux noix de cajoux",
        prix: "12.000 Fcfa",
    },

    {
        id:25,
        image: "assets/imgs/Europeen/Risoto_Royal.jpg",
        nom: "Risoto_Royal",
        prix: "8000 Fcfa",
    },

    {
        id:26,
        image: "assets/imgs/Europeen/Roti_De_Porc_aux_Pommes_et_pruneaux.jpg",
        nom: "Roti De Porc aux Pommes et pruneaux",
        prix: "10.000 Fcfa",
    },

    {
        id:27,
        image: "assets/imgs/Europeen/Roti_De_Porc.jpg",
        nom: "Roti De Porc",
        prix: "10.000 Fcfa",
    },

    {
        id:28,
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

    //Debut Ajout des elements selectionnées par dans le boutton dans le panier
    ButtonPlat.onclick = function (e) {
        let card = ButtonPlat.closest('.card')
        let produit =JSON.parse(card.dataset.produit);
        let tr = document.createElement("tr");
        liste.appendChild(tr);
        let td1 = document.createElement("td");
        td1.textContent = produit.id;
        tr.appendChild(td1);
        
        let td2 = document.createElement("td");
        let image = document.createElement("img");
        image.style.width = "8rem";
        image.style.height = "6rem";
        image.src = produit.image;
        td2.appendChild(image);
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = produit.nom;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = produit.prix;
        td4.setAttribute("id","produit-prix-" + produit.id);
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = produit.prix;
        td5.setAttribute("id","produit-total-" + produit.id);
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.textContent = 1;
        td6.setAttribute("id","quantite-total-" + produit.id);
        tr.appendChild(td6)


        let td7 = document.createElement("td");

        // creation des boutton ajouter diminuer et supprimer
        let boutton = `<button class="boutton_Plus boutton" id="bouton-plus-${produit.id}" onClick = AjouterProduit(${produit.id})><i class="bi bi-plus-lg"></i></button><button class="boutton_Moins boutton" id="bouton-moins-${produit.id}" onClick = diminuerProduit(${produit.id})><i class="bi bi-dash"></i></button><button class="boutton_Sup boutton" id="bouton-sup-${produit.id}" onClick = SupprimerProduit(${produit.id})><i class="bi bi-trash3"></i></button>`
        td7.innerHTML = boutton;
        tr.appendChild(td7);
        
    }
}

// Fin session commander plat Europeen


// declaration des methodes

function AjouterProduit(id){
    let qteProduit = document.getElementById(`quantite-total-${id}`);
    let valeurQuantiteProduit = parseInt(qteProduit.textContent) + 1;
    qteProduit.textContent = valeurQuantiteProduit;

    let prixProduitT = document.getElementById(`produit-total-${id}`);
    let prixProduitU = document.getElementById(`produit-prix-${id}`);
    let prixproduitTotal = parseInt(prixProduitU.textContent) * qteProduit.textContent
    prixProduitT.textContent = prixproduitTotal

}


function diminuerProduit(id){
    let qteProduit = document.getElementById(`quantite-total-${id}`);
    let valeurQuantiteProduit = parseInt(qteProduit.textContent) - 1;
    qteProduit.textContent = valeurQuantiteProduit;

    let prixProduitT = document.getElementById(`produit-total-${id}`);
    let prixProduitU = document.getElementById(`produit-prix-${id}`);
    let prixproduitTotal = parseInt(prixProduitU.textContent) * qteProduit.textContent
    prixProduitT.textContent = prixproduitTotal
    if(qteProduit.textContent == 0){
    }

}


function SupprimerProduit(id){
    console.log("supression produit", id)
}
