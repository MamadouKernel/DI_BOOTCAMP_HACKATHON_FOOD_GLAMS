let divCard = document.querySelector(".divCard");
let card = document.querySelector(".card");
let elem_partie1 ='<div class="card"><img src="';
let elem_partie2 ='" class="card-img-top" style alt="..."><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This contlittle bit longer.</p></div></div>'


const plats =[
    "assets/imgs/africain/im10.jpg",
    "assets/imgs/africain/im3.jpg",
    "assets/imgs/africain/im5.jpg",
    "assets/imgs/africain/im6.jpg",
    "assets/imgs/africain/im7.jpg",
    "assets/imgs/africain/im8.jpg",
    "assets/imgs/africain/im9.jpg",
    "assets/imgs/africain/im11.jpg",
]


function htmlToElem(html) {
    let temp = document.createElement('template');
    html = html.trim(); // Never return a space text node as a result
    temp.innerHTML = html;
    return temp.content.firstChild;
  }

  let div ;

for (const plat of plats){
    div = htmlToElem(elem_partie1 + plat + elem_partie2);
    divCard.appendChild(div);
}
