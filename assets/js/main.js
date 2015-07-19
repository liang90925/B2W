$(function(){
	//Cache the window object
	var $window =$(window);

	//Parallax background effect
	$('section[data-type="background"]').each(function(){

		var $bgobj = $(this); 

		$(window).scroll(function(){
			var $ypos = -($window.scrolTop()/ $bgobj.data('speed'));
			
			var coords = '50%' + ypos + 'px';

			$bgobj.css({backgroundposition: coords});
		}); //end window
	});
});