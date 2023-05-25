






// ============================================================

// js to show and hide scroll to top 
var scrolltotop = document.querySelector(".scrollTop");

window.onscroll = function(){

    if(scrollY > 500){

        scrolltotop.classList.add("show");
    }
    else{
        scrolltotop.classList.remove("show");

    }
}

// js for scroll to top
scrolltotop.onclick = function(){

    window.scrollTo({

        top : 50 ,
        behavior : 'smooth'

    })
}