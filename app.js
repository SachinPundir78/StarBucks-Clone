//const, var,let

const bar = document.querySelector('#bars');
const cross = document.querySelector('#cross');
const nav = document.querySelector('.nav');

bar.addEventListener('click', ()=>{
   bar.style.display = 'none';
   cross.style.display = 'block';
   nav.style.left = '20%';
});

cross.addEventListener('click', ()=>{
    bar.style.display = 'block';
    cross.style.display = 'none';
    nav.style.left = '100%';
});

const arrow = document.querySelectorAll('.arrow');

//Array.forEach(function)

arrow.forEach((e)=>{
    e.addEventListener('click', ()=>{
        var footerlist= e.parentElement.nextElementSibling; //footer list
        
        if(e.classList.contains('temp')){
            e.classList.remove('temp');
            footerlist.style.display = 'none';
            e.style.transform = 'rotate(0deg)';
        }
        else{
            e.classList.add('temp');
            footerlist.style.display = 'block';
            e.style.transform = 'rotate(180deg)';
        }
    });
})

const menuNav = document.querySelector('.menu-nav');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > menuNav.offsetTop){
        menuNav.classList.add('sticky');
    }
    else{
        menuNav.classList.remove('sticky');
    }
});

document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'index.html';
});


// rewards section
