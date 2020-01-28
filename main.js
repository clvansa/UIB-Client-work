const menu = document.querySelector('.menu').children[0];
const myList = document.querySelector('.myList')


menu.addEventListener('click',()=>{
    if(myList.style.display === 'none'){
        myList.style.display = 'inline-block'
    }else{

        myList.style.display = 'none';
    }
    
})
