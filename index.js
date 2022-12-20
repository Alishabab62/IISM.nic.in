const navBar=document.getElementById('nav-bar');
const navTab=document.getElementById('nav');
let flag=false;
navBar.addEventListener('click',()=>{
    if(flag===false){
        flag=true
        navTab.style.display='block';
    }
    else if(flag===true){
        flag=false
        navTab.style.display='none';
    }
    
});

const sideBar=document.querySelector('.menu-bar');
sideBar.addEventListener('click',myMove);

function myMove() {
    let id = null;
    const elem = document.getElementById("men");  
    console.log(elem);
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
      if (pos == 400) {
        clearInterval(id);
      } else {
        pos=pos+5; 
        elem.style.marginLeft = pos + "px"; 
      }
    }
  }
