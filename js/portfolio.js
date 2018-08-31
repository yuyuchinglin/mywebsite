var navItem = document.querySelectorAll('.navbar-nav .nav-item');
    var subNavbar = document.querySelectorAll('.sub-navbar');
    var port = document.querySelector('#port');

    navItem.forEach(function(item){

        item.addEventListener("mouseover", function(item) {

        subNavbar.forEach(function(sub){
          if(!sub.classList.contains('d-none')){
              sub.classList.add('d-none')
          }
        })

        document.querySelector('.'+item.target.name+'-subnavbar').classList.remove('d-none');
        })

    })


    port.addEventListener("mouseover", function(item) {
        subNavbar.forEach(function(sub){
          if(!sub.classList.contains('d-none')){
              sub.classList.add('d-none')
          }
        })
    })


    // document.querySelectorAll('.left-navbar a').forEach(function(item){
    //     console.log(item);
    //     item.addEventListener("mouseover", function(e){
    //         var thisimg = e.target.querySelector('img');
    //         // document.querySelectorAll('.left-navbar img').forEach(function(img){
    //         //     if(img!=thisimg){
    //         //         if(!img.classList.contains('d-none')){
    //         //             img.classList.add('d-none');
    //         //         }
    //         //     }
                
    //         // })
    //         if(e.target.querySelector('img').classList.contains('d-none')){
    //             e.target.querySelector('img').classList.remove('d-none')
    //         }else{
    //             e.target.querySelector('img').classList.add('d-none')
    //         };
    //     }),
    //     item.addEventListener("mouseout", function(e){
    //         //console.log(e.target.querySelector('img'));
    //         // e.target.querySelector('img').classList.add('d-none');
    //     })
    // })


    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
    
            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            var def = document.querySelector('.default');

            links.on('mouseenter', {el: this.el, multiple: this.multiple},this.dropdown)
        }
    
        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
                $this = $(this),
                $next = $this.next();
    
            $next.slideToggle();
            $this.parent().toggleClass('open');
    
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }	
    
        var accordion = new Accordion($('#accordion'), false);
    });


    // function dropdown(this){
    //     console.log(this);
    //     this.dropdown;
    // }