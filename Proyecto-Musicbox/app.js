window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carrusel__lista'), {
        slidesToScroll: 2,
        draggable: true,
        slidesToShow: 3,
        dots: '.carrusel__indicadores',
        arrows: {
        prev: '.carrusel__anterior',
        next: '.carrusel__siguiente'
        },
        responsive: [
            {
                
              // screens greater than >= 600px
              breakpoint:600,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
            {
              // screens greater than >= 1023px
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                
              }
            },
             {
              // screens greater than >= 1023px
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                
              }
            }
            
            
            ,{
                // screens greater than >= 1023px
                breakpoint: 0,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  
                }
              }
          ]
    });
});