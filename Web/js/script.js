$(document).ready(function() {
	
    $("#more").on('mouseenter' ,function(){
		//console.log('Hello world');
		$("#more").removeClass("line_on_both_sides").addClass('button');
	});
	
	$("#more").on('mouseleave' ,function(){
		//console.log('Hello world');
		$("#more").addClass("line_on_both_sides").removeClass('button');
	});
	
		
	$(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.section_icon').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                       
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
				$(this).addClass("animated fadeInDown");
				$(this).parents(".section_block").children('.content_row').children(".title_container").children(".left_bracket").addClass("animated slideInLeft");
				$(this).parents(".section_block").children('.content_row').children(".title_container").addClass("special");
				$(this).parents(".section_block").children('.content_row').children(".title_container").children(".right_bracket").addClass("animated slideInRight");

            }
        }); 
		
		// $('').each( function(){
//            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//            var bottom_of_window = $(window).scrollTop() + $(window).height();
//                       
//            /* If the object is completely visible in the window, fade it it */
//            if( bottom_of_window > bottom_of_object ){
//				$(this).addClass("animated fadeInDown").removeClass("hidden");
//            }
//        }); 
    
    });
});
