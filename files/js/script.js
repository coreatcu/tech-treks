jQuery(window).load(function($) {	

	
	/*---------------------------------------------- 
			 D R O P   D O W N   N A  V I
	------------------------------------------------*/
	var timer = [];
   	var timerout= [];
	jQuery("nav#main-nav li").each(function(index) {  
        if (jQuery(this).find("ul").length > 0) {  
            var element = jQuery(this);
            //show subnav on hover  
            jQuery(this).mouseenter(function() {
				if(timer[index]) {
                	clearTimeout(timer[index]);
                	timer[index] = null;
                }
                timer[index] = setTimeout(function() {
                	jQuery(element).children('ul').fadeIn(200); 
                }, 150)
            });  
            //hide submenus on exit  
            jQuery(this).mouseleave(function() {  
				if(timer[index]) {
                	clearTimeout(timer[index]);
                	timer[index] = null;
              }
              timer[index] = setTimeout(function() {
                	jQuery(element).children('ul').fadeOut(200); 
              }, 150) 
            });  
        }  
    });
	
	jQuery('nav#main-nav').on("click", "li", function() {
		if (jQuery(window).width() < 1025) {
			if (jQuery(this).find("ul").length > 0) {
				if (jQuery(this).find("ul").css('display') !== 'block') {
					jQuery(this).children("ul").fadeIn(200);
					return false;	
				}
			}
		}
	});
	
	
	/*---------------------------------------------- 
				R E S P ON S I V E   N A V 
	------------------------------------------------*/
	jQuery('<a class="open-responsive-nav" href=""><span></span></a>').appendTo(".header-inner .menu");
	jQuery("body #page-content").prepend('<div id="menu-responsive"><div id="menu-responsive-inner"><a href="" class="close-responsive-nav"><span></span></a><nav id="responsive-nav"><ul></ul></nav></div></div>');
	jQuery("nav#responsive-nav > ul").html(jQuery("nav#main-nav > ul").html());
	
	jQuery('header').on("click", ".open-responsive-nav", function() { 
		var topPos = jQuery('header').height();
		var fullheight = jQuery("#page-content").height()-topPos;
		jQuery("#menu-responsive").css({'height':fullheight+'px','top':topPos+'px'});
		if (jQuery('#menu-responsive').css('right') == 0 || jQuery('#menu-responsive').css('right') == '0px') {
			hideResponsiveNav();
		} else {
			jQuery('#menu-responsive').animate({'right': '0'}, 800, 'easeInOutQuart');
			jQuery('html, body').animate({scrollTop: 0}, 1000, 'easeInOutQuart');
		}
		return false;
	});
	
	jQuery('#page-content').on("click", "#menu-responsive", function() { 
		hideResponsiveNav();
	});
	
	function hideResponsiveNav(){
		var right = jQuery('#menu-responsive').width()+10;
		jQuery('#menu-responsive').animate({'right': '-'+right+'px'}, 800, 'easeInOutQuart');
	}
	
	
	
	/*---------------------------------------------- 
				        T A B S 
	------------------------------------------------*/	
	jQuery(".tabs").each(function(i) {
		jQuery(this).find('.tab-content').removeClass('active');
		var rel = jQuery(this).find('.active').attr('href');
		jQuery(this).find('.'+rel).addClass('active');
	});
	
	jQuery(".tab-nav").on("click", "a", function() { 
		
		var parentdiv = jQuery(this).parent('li').parent('ul').parent('div');
		var rel = jQuery(this).attr('href');
		
		jQuery(parentdiv).find(".tab-nav a").removeClass("active");
		jQuery(this).addClass("active");
		
		jQuery(parentdiv).find(".tab-container .tab-content").hide().removeClass('active');
		jQuery(parentdiv).find(".tab-container ."+rel).fadeIn(500).addClass('active');
		
		return(false);
		
	});
	
	
	
	/*---------------------------------------------- 
				    R E V O L U T I O N   S L I D E R
	------------------------------------------------*/
	if(jQuery().revolution) {
		jQuery('.home-slider').revolution({
			startwidth:1100,
			startheight:500,
			delay:10000,
			onHoverStop:"on",
			navigationType:"none",
			fullWidth:"off",
			fullScreen:"on",
			fullScreenOffsetContainer: "#pseudo-header"
		});
	}
	
	smoothShow();
		
});


jQuery( window ).scroll(function() {
	
	smoothShow();

});



// SMOOTH SHOW FUNCION FOR ELEMENTS THAT TAKE ACTION WHEN VISIBLE (counter & animations & skills)
function smoothShow() {
	
	
	
	
	/*---------------------------------------------- 
		 	S K I L L   A N I M A T I O N
	------------------------------------------------*/
	jQuery('.skill').each(function() {
		var visible = jQuery(this).visible(true);
		var percent = jQuery(this).find('.skill-bar .skill-active ').attr('data-perc');
		if (jQuery(this).hasClass( "anim" )) {} 
		else if (visible) {
			var randomval = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
			jQuery(this).addClass("anim");
			jQuery(this).find('.skill-bar .skill-active ').animate({'width': percent+'%',}, 2000, 'easeInOutQuart', function(){
				jQuery(this).find('.tooltip').delay(randomval).animate({'top':'-28px','opacity':1}, 500);	
			}).css('overflow', 'visible');
		}
	});
	
		
}



// FLEXSLIDER INIT FUNCTION BECAUSE IT ALSO HAS TO BE REINITIALISED AFTER A PORTFOLIO ITEM IS LOADED
function flexInit(el) { 

	/*---------------------------------------------- 
				   F L E X S L I D E R
	------------------------------------------------*/
	if(jQuery().flexslider) { 
		jQuery(el+" .flexslider").flexslider({
			animation: "slide",
			slideshowSpeed: 7000,
			animationDuration: 1000,
			slideshow: false,
			directionNav: false,
			controlNav: true,
			smoothHeight: true,
			touch: true,
			video: true,
			randomize: false
		}); 
	}
	
}