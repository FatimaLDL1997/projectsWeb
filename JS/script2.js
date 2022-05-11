const menu = [
{
    id:1, 
    title: "Meditation Website", 
    category: "JS", 
    icon: `/images/yoga.png`, 
    link: `https://fatimaldl1997.github.io/page5.html`, 
}, 
{
    id:2, 
    title: "Grocery Bud", 
    category: "JS", 
    icon: `/images/grocery.png`, 
    link: `https://grocery-list-for-me.netlify.app/`, 
},
];


// const back= document.querySelector('.header__backIcon'); 
// back.addEventListener('click',function(){
//     console.log("goBack");
// });

// const middle = document.querySelectorAll('.middle2__filterBtns'); 
// middle.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         console.log("middle");
//     });
// })
const middle = document.querySelector(".middle2__projectsContainer"); 
const container = document.querySelector(".middle2__buttonContainer"); 

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons(); 
    });


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
      console.log(item);
  
      return `<div class="middle2__projects">
            <div class="middle2__image">
                <img src = ${item.icon} alt=${item.title} class = "middle2__image" />
            </div>
            <div class="middle2__blackContainer">
                <div class="middle2__title">
                    <h1>${item.title}</h1>
                </div>
                <div class = "middle2__linkContainer">
                    <a href = ${item.link} target = "_blank"  class="middle2__linkLogo"></a>
                </div>
            </div>
        </div>`; 
    }) 
  
    displayMenu = displayMenu.join(" ");
    middle.innerHTML = displayMenu;
    console.log("helloHi");

    const link = document.querySelectorAll('.middle2__linkLogo'); 
    link.forEach(function(btn){
        btn.addEventListener('click', function(e){
            console.log("link Clicked");

        })
    });
}
