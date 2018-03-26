/*!
 * pageTopSW.js  (var1.1)
 * Original author: @Yosuke Nakayama
 * Licensed under the MIT license
 */

$(function () {
	
    $.fn.pageTopSW = function (options) {

        options = $.extend({
            showPosition: 200,
			stopArea : $("footer"),
			bottom : 150,
			left : 870,
			speed:800,
			easing:"easeOutCubic",
			fadeSW:1	
        }, options);
		
        this.each(function () {
            
			var footerOffset = options.stopArea.offset().top;
			var scrollOffset = 0;
			var winHeight = $(window).height();
			var _self = $(this);
			
			
			$(_self).css({
				"position":"fixed",
				"bottom":options.bottom,
				"margin-left":options.left,
				"display":"none",
				"cursor":"pointer"
			});
			
			if(!options.fadeSW){ $(_self).show();}
			
			$(window).resize(function(){
				winHeight = $(window).height();
				footerOffset = options.stopArea.offset().top;
			});
			
			
			$(this).on("click",function(){
				
				$('html,body').animate({scrollTop: 0},options.speed,options.easing);
			});
			
			$(window).scroll(function(){
				
				
				scrollOffset = $(window).scrollTop()+winHeight;
				footerOffset = options.stopArea.offset().top;
				if(options.fadeSW){
					if(scrollOffset < winHeight + options.showPosition){
						$(_self).fadeOut();
					}else{
						$(_self).fadeIn();
					}
				}
				if(footerOffset < scrollOffset){
					$(_self).css({"position":"absolute"});
				}else{
					$(_self).css({"position":"fixed"});	
				};
			});	
			});
        return this;
    };

});