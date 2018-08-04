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
