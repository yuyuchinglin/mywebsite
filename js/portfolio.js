
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
    
            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            var def = document.querySelector('.default');

            links.on('mouseover', {el: this.el, multiple: this.multiple},this.dropdown)
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



        // slick (MORE PORTFOLIO)

        if (document.body.clientWidth > 900) {
			$('.more').slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: true,
				autoplaySpeed: 4000,
				dots: true,
			});
		} else {
			$('.more').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				dots: false,
			});
        }
        

        //	NAVBAR	
        
        function openNav() {
			document.getElementById("mySidenav").style.right = "-17px";
			document.querySelector('.window-overlay').style.display = "block";
		}


		function closeNav() {
			document.getElementById("mySidenav").style.right = "-417px";
			document.querySelector('.window-overlay').style.display = "none";
        }
        


        // Hide Header on on scroll down
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('header').outerHeight();

		$(window).scroll(function (event) {
			didScroll = true;
		});

		setInterval(function () {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);

		function hasScrolled() {
			var st = $(this).scrollTop();

			// Make sure they scroll more than delta
			if (Math.abs(lastScrollTop - st) <= delta)
				return;

			// If they scrolled down and are past the navbar, add class .nav-up.
			// This is necessary so you never see what is "behind" the navbar.
			if (st > lastScrollTop && st > navbarHeight) {
				// Scroll Down
				$('header').removeClass('nav-down').addClass('nav-up');
			} else {
				// Scroll Up
				if (st + $(window).height() < $(document).height()) {
					$('header').removeClass('nav-up').addClass('nav-down');
				}
			}

			lastScrollTop = st;
		}



