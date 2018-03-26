$( function () {
	var $SP_WIDTH = 960;
	
	$( '#pageTop' ).pageTopSW( {
		showPosition: 200,         // ボタンが現れる上から位置を設定
		stopArea :    $('footer'), // ボタンが固定される領域を設定
		bottom :      10,          // ボタンの位置を調整
		right:        10,          // ボタンの位置を調整
		speed:        800,         //スピードとeasingを調節
		easing:       'easeOutCubic'

	});
	if ( $ ( window ).width() <= $SP_WIDTH ) {
		$( '#header ul.btn' ).css( 'display', 'none' );
		$( '.menuOpen' ).click( function () {
			if ( $( '#header ul.btn' ).css( 'display' ) === 'none' ) {
				$( '#header ul.btn' ).slideDown( 'slow' );
				$( this ).children( 'img' ).attr( 'src', '/shared/images/header_nav_menu_2.gif' );
			} else {
				$( '#header ul.btn' ).slideUp( 'slow' );
				$( this ).children( 'img' ).attr( 'src', '/shared/images/header_nav_menu_1.gif' );
			}
		} );
	}

	var sliderImg1 = $( '.variable-width_1 .column' ).length;
	console.log('sliderImg1は' + sliderImg1);
	if( sliderImg1 === 1 ) {
		$( '.variable-width_1' ).addClass( 'onlyOneColumnWrapper' );
		$( '.variable-width_1 .column' ).addClass( 'onlyOneColumn' );
	} else if( sliderImg1 === 2 || sliderImg1 === 3 ) {
		$( '.variable-width_1' ).slick( {
			dots:         false,
			centerMode:   false,
			autoplay:      false,
			autoplaySpeed: 3000,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows:       false,
			infinite: false,
			responsive: [
				{
					breakpoint: $SP_WIDTH,
					settings: {
						dots:         true,
						centerMode:   true,
						autoplay:      true,
						autoplaySpeed: 3000,
						slidesToShow:  1,
						arrows:       true,
						infinite: true
					}
				}
			]
		} );
	} else {
		$( '.variable-width_1' ).slick( {
			dots:         true,
			centerMode:   true,
			autoplay:      true,
			autoplaySpeed: 3000,
			responsive: [
				{
				breakpoint: 9999,
				settings: {
					slidesToShow:  3,
					variableWidth: true
				}
				},
				{
					breakpoint: $SP_WIDTH,
					settings: {
						slidesToShow:  1
					}
				}
			]
		} );
	}

	var sliderImg2 = $( '.variable-width_2 .column' ).length;
	console.log('sliderImg2は' + sliderImg2);
	if( sliderImg2 === 1 ) {
		$( '.variable-width_2' ).addClass( 'onlyOneColumnWrapper' );
		$( '.variable-width_2 .column' ).addClass( 'onlyOneColumn' );
	} else if( sliderImg2 === 2 || sliderImg2 === 3 ) {
		$( '.variable-width_2' ).slick( {
			dots:         false,
			centerMode:   false,
			autoplay:      false,
			autoplaySpeed: 3000,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows:       false,
			infinite: false,
			responsive: [
				{
					breakpoint: $SP_WIDTH,
					settings: {
						dots:         true,
						centerMode:   true,
						autoplay:      true,
						autoplaySpeed: 3000,
						slidesToShow:  1,
						arrows:       true,
						infinite: true
					}
				}
			]
		} );
	} else {
		$( '.variable-width_2' ).slick( {
			dots:         true,
			centerMode:   true,
			autoplay:      true,
			autoplaySpeed: 3000,
			responsive: [
				{
				breakpoint: 9999,
				settings: {
					slidesToShow:  3,
					variableWidth: true
				}
				},
				{
					breakpoint: $SP_WIDTH,
					settings: {
						slidesToShow:  1
					}
				}
			]
		} );
	}

	$( '.variable-width_3' ).slick( {
		dots: false,
		responsive: [
			{
				breakpoint: 9999,
				settings: {
					dots:          false,
					speed:         300,
					slidesToShow:  3,
					centerMode:    true,
					variableWidth: true,
					autoplay:      true,
					autoplaySpeed: 3000
				}
			},
			{
				breakpoint: $SP_WIDTH,
				settings: {
					dots:          true,
					speed:         300,
					slidesToShow:  3,
					centerMode:    true,
					variableWidth: true,
					autoplay:      false
				}
			}
		]
	} );
});
