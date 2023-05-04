var swiper = new Swiper(".books-slider", {
   loop:true,
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


/*features*/

  var swiper = new Swiper(".feature-slider", {
    spaceBetween: 17,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       450: {
        slidesPerView: 1,
        
        
      },

       768: {
         slidesPerView: 3,
        
         
       },
       1024: {
         slidesPerView: 4,
     
        
       },
     },
   });

   /*arrivals*/

   var swiper = new Swiper(".arrivals-books", {
    spaceBetween: 19,
    loop:true,
    
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

   /*rev*////////////////
   var swiper = new Swiper(".rev-silder", {
    spaceBetween: 17,
    loop:true,
    
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       450: {
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


   /////////////////blogs
   var swiper = new Swiper(".blog-slider", {
    spaceBetween: 19,
    loop:true,
    
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       450: {
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
