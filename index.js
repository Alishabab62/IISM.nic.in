const learningBar=document.getElementById('learning-bar');
const learningTab=document.getElementById('learning-subtab');

learningTab.addEventListener('mouseover',()=>{
    learningTab.style.display='block';
})
learningTab.addEventListener('mouseout',()=>{
    learningTab.style.display='none';
})
learningBar.addEventListener('mouseover',()=>{
    learningTab.style.display="block"
});
learningBar.addEventListener('mouseout',()=>{
    learningTab.style.display="none"
});


const facultyTab=document.getElementById('faculty-subtab');
const facultyBar=document.getElementById('faculty-bar');


facultyTab.addEventListener('mouseover',()=>{
    facultyTab.style.display='block';
})
facultyTab.addEventListener('mouseout',()=>{
    facultyTab.style.display='none';
})
facultyBar.addEventListener('mouseover',()=>{
    facultyTab.style.display="block"
});
facultyBar.addEventListener('mouseout',()=>{
    facultyTab.style.display="none"
});

const home=document.getElementById('home');
home.style.backgroundColor="#336699"
home.style.color="white"
