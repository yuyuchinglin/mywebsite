  function main(){


	// lazyload
		$(function() {
            $(".lazyload").lazyload({
                  effect : "fadeIn"
            });
      });

	// moments
		jQuery(document).ready(function(){

			jQuery("#gallery").unitegallery({
				tile_enable_icons:false,
				tiles_type:"justified"
			});
		});
	

	// page scroll
	
		$(function() {
    		$('a.page-scroll').bind('click', function(event) {
		        var $anchor = $(this);
		        $('html, body').stop().animate({
		            scrollTop: $($anchor.attr('href')).offset().top
		        }, 800, 'linear');
		        event.preventDefault();
   			});
		});
	
		


	


	// 動畫
		
		// $(document).ready(function(){
		// setTimeout(() => window.scrollTo(0,0), 150);
		// //重新整理回到最上方

		// $(window).scroll(function() {	

		// 	var proportion = 2/3;
		// 	var aboutApear = $('#welcomepic').height()*1/3;
		// 	var portfolioApear =  $('#portfolio').offset().top-($('#about').height()*proportion);
		// 	var skillsApear =  $('#skills').offset().top-($('#portfolio').height()*proportion);
		// 	var momentsApear =  $('#skills').offset().top;
		// 	//注意：moments 會在 skills section top 時，開始跑動畫
		// 	var contactApear =  $('#contact').offset().top-($('#moments').height()*proportion);

		// 	  if($(window).scrollTop() >= aboutApear){
		// 	    $('#about').css('visibility','visible');
		// 	    $('#about').css('animation','rightAnim 1.5s');
		// 	  }

		// 	  if($(window).scrollTop() >= portfolioApear){
		// 		$('#portfolio').css('visibility','visible');
		// 	    $('#portfolio').css('animation','leftAnim 1.5s');
		// 	  }	

		// 	  if($(window).scrollTop() >= skillsApear ){
		// 	    $('#skills').css('visibility','visible');
		// 	    $('#skills').css('animation','rightAnim 1.5s');
		// 	  }		

		// 	  if($(window).scrollTop() >= momentsApear ){
		// 	    $('#moments').css('visibility','visible');
		// 	    $('#moments').css('animation','leftAnim 1.5s');
		// 	  }			

		// 	  if($(window).scrollTop() >= contactApear ){
		// 	    $('#contact').css('visibility','visible');
		// 	    $('#contact').css('animation','rightAnim 1.5s');
		// 	  }

		// 	});
		// })
	

	
		$(function() {

		//easychart + waypoints
		$('.chart').waypoint(function() {
		  $(this).easyPieChart({
		    scaleColor: false,
		    lineWidth: 10,
		    // lineCap: 'round',
		    lineCap: 'butt',
    		barColor: '#c4a046',
    		trackColor: '#ddd' ,
		    size: 150,
		    animate: 2000
		  });		  
		}, {
 		 	triggerOnce: true,
 		 	offset: 'bottom-in-view'
		});



		//barchart waypoints
		$('.software-graph').waypoint(function() {
			$(this).css("visibility","visible");
      		$('.software-graph .bar').addClass('animation');
  		}, { offset: 300 });

  		$('.programming-graph').waypoint(function() {
			$(this).css("visibility","visible");
      		$('.programming-graph .bar').addClass('animation');
  		}, { offset: 300 });

  		//barchart waypoints
		$('#contact').waypoint(function() {
			//$('.bsncard').fadeIn(1500); 
      		$('.bsncard').animate({ opacity: 1 }, 1100); 
  		}, { offset: 300 });

	

		$('.about-intro').waypoint(function() {
			$(this).css("visibility","visible");
			$(this).css('animation','rightAnim 2s');
  		}, { offset:  'bottom-in-view'});

  		$('.about-work').waypoint(function() {
			$(this).css("visibility","visible");
			$(this).css('animation','leftAnim 2s');
  		}, { offset:  'bottom-in-view' });

  		$('.about-edu').waypoint(function() {
			$(this).css("visibility","visible");
			$(this).css('animation','rightAnim 2s');
  		}, { offset:  'bottom-in-view'});


		});
				
		
		
				// Hide Header on on scroll down
				// var didScroll;
				// var lastScrollTop = 0;
				// var delta = 5;
				// var navbarHeight = $('header').outerHeight();
		
				// $(window).scroll(function (event) {
				// 	didScroll = true;
				// });
		
				// setInterval(function () {
				// 	if (didScroll) {
				// 		hasScrolled();
				// 		didScroll = false;
				// 	}
				// }, 250);
		
				// function hasScrolled() {
				// 	var st = $(this).scrollTop();
		
				// 	// Make sure they scroll more than delta
				// 	if (Math.abs(lastScrollTop - st) <= delta)
				// 		return;
		
				// 	// If they scrolled down and are past the navbar, add class .nav-up.
				// 	// This is necessary so you never see what is "behind" the navbar.
				// 	if (st > lastScrollTop && st > navbarHeight) {
				// 		// Scroll Down
				// 		$('header').removeClass('nav-down').addClass('nav-up');
				// 	} else {
				// 		// Scroll Up
				// 		if (st + $(window).height() < $(document).height()) {
				// 			$('header').removeClass('nav-up').addClass('nav-down');
				// 		}
				// 	}
		
				// 	lastScrollTop = st;
				// }

		


}
main();















	