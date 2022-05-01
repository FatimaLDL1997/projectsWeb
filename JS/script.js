const menu = [{
    id:1, 
    title: "Vanilla Javascript", 
    category: "JS", 
    icon: `/images/js.png`, 
    link: `page2.html`, 
}, 
{
    id:2, 
    title: "CSS3 and HTML5", 
    category: "CSS&HTML", 
    icon: `/images/css.svg`, 
    link: `page3.html`, 
},
];



// const back= document.querySelector('.header__backIcon'); 
// back.addEventListener('click',function(){
//     console.log("goBack");
// });



const middle = document.querySelector(".middle1__projectsContainer"); 
const container = document.querySelector(".middle1__buttonContainer"); 

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();     
    });

    

function displayMenuButtons(){
    const categories = menu.reduce(
      function(values, item){
        if(!values.includes(item.category)){
          values.push(item.category);
        }
        return values; 
      },
      ['All']
    );
    const categoryBtns = categories
    .map(function(category){
        // <button class="middle1__filterBtns">HTML & CSS</button>
        return `<button class="middle1__filterBtns"  type="button" 
        data-id=${category}> ${category}</button>`;
    })
    .join(" "); 
    container.innerHTML = categoryBtns; 
    const filterBtns = container.querySelectorAll(".middle1__filterBtns");
    

    //filter items
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e) {
            console.log("something clicked"); 
            const category = e.currentTarget.dataset.id; 
            console.log(category);
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    console.log("menuItem");
                    return menuItem; 
                }
            });
            if(category == 'All'){
                console.log("All"); 
                displayMenuItems(menu); 
            }
            else {
                
                displayMenuItems(menuCategory);
                console.log(menuCategory); 
            }
        });
    }); 
}


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
      console.log(item);
  
      return `<a  href = "${item.link}" class="middle1__projects">
                <div class="middle1__image">
                    <img src = ${item.icon} alt=${item.title} class = "middle1__image" />
                </div>
                <div class="middle1__blackContainer">
                    <div class="middle1__title">
                        <h1>${item.title}</h1>
                    </div>
                </div>
             </a>`; 
    }) 
  
    displayMenu = displayMenu.join(" ");
    middle.innerHTML = displayMenu;
    console.log("helloHi");

    // const link = document.querySelectorAll('.middle1__linkLogo'); 
    // link.forEach(function(btn){
    //     btn.addEventListener('click', function(e){
    //         console.log("link Clicked");
    //     })
    // });
    const projects= document.querySelectorAll('.middle1__projects'); 
    projects.forEach(function(btn){
        btn.addEventListener('click', function(){
            console.log("link Clicked44");
        })
    });
};


