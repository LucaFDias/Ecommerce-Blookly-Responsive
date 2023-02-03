


//search responsivo (aparece quando clicar no search da navegação)
searchForm = document.querySelector('.search-form');

window.document.querySelector('.search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

// login form quando clica no boneco

var loginForm = document.querySelector('.login-form-container');

document.querySelector('.login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}



// scroll de rolagem Y deixa o navbar fixado e esconde o search
window.onscroll = () => {
    searchForm.classList.remove('acitve');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')

    } else{
        document.querySelector('.header .header-2').classList.remove('active')

    }
}

window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')

    } else{
        document.querySelector('.header .header-2').classList.remove('active')

    }

    fadeOut();
}

//animação do carregamento da pagina

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader,4000);
}



// slide swiper - slide book

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // slide swiper - featured

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 4200,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

//arrivals slider

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 4200,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  //comentarios slider

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  //blog sldier

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 9200,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });