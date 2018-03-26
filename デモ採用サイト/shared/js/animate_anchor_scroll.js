/*!
 * animate_anchor_scroll.js
 * Original author: @Yosuke Nakayama
 * Licensed under the MIT license
 */


$(function () {
    $.fn.animateAnchorScroll = function (options) {
        options = $.extend({
            speed: 800,
            easing: "easeOutExpo",
			marginTop:0
        }, options);

        this.each(function () {
		  $(this).click(function() {
			var target = $(this.hash);
			if (target) {
				var targetOffset = target.offset().top;
				$('html,body').animate({scrollTop: targetOffset-options.marginTop},options.speed,options.easing);
				return false;
			}
			});
        });
        return this;
    };
});