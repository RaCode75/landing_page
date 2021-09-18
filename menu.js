const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
// //----menu----
const op1 = document.getElementById('group-1');
const op2 = document.getElementById('group-2');
const op3 = document.getElementById('group-3');
//-------menu-principal--------------------------
const navLabel = document.querySelectorAll('.nav-label__sub'); 

//----------Hamburguer menu --------------
hamburguer.addEventListener("click", ()=>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//----------Close Hamburguer Menu---------
navLink.forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}));

//----menu----radios uncheck----------

// function uncheckRadio(radio) {
//     if(!radio) radio = document;
//     if(!window.radioChecked) window.radioChecked = {};
//     window.radioClick = function(e) {
//         const obj = e.target, name = obj.name || "unnamed";
//         if(e.keyCode) return obj.checked = e.keyCode !=32;
//         obj.checked = window.radioChecked[name] != obj;
//         window.radioChecked[name] = obj.checked ? obj : null;
//     }
//     radio = document.querySelectorAll('input[type="radio"]').forEach( r => {
//         r.setAttribute('onclick', "radioClick(event)");
//         r.setAttribute("onkeyup", "radioClick(event)");
//     });
// }

// uncheckRadio();

op1.addEventListener('click', () => {
    if (op1.checked){
      op2.checked = false;
      op3.checked = false;
    }
  });
  op2.addEventListener('click', () => {
    if (op2.checked ){
      op1.checked = false;
      op3.checked = false;
    }
  });
  op3.addEventListener('click', () => {
    if (op3.checked ){
      op2.checked = false;
      op1.checked = false;
    }
  });
  