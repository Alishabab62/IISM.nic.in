const navBar=document.getElementById('nav-bar');
const navTab=document.getElementById('nav');
let flag=false;
navBar.addEventListener('click',()=>{
    if(flag==false){
        flag=true
        navTab.style.display='block';
    console.log("hello")
    }
    else if(flag==true){
        flag=false
        navTab.style.display='none';

    }
    
})