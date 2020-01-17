$(document).ready(function(){


$tip = '';
$ned = '';
$domain = '';
$host = 'domex.ru';

SELECT = function(){
	MAX = $('._select').length;
	//alert(MAX);
	for(i=0;i<MAX;i++) {
		THISINPUT = $('._select:eq('+i+') input[checked]');
		//THISINPUT = $('._select:eq('+i+') input:checked');
		//alert(THISINPUT.val());
		THISINPUT.closest('li').addClass('active');
		LABEL = THISINPUT.closest('li').find('label').html();
		THISINPUT.closest('.button_fl').find('b span').html(LABEL);
		
		//alert(THISINPUT.val());
		
		
		if(i == 0){
			$tip = THISINPUT.val();
		} else if(i == 1){
			$ned = THISINPUT.val();
		} else if(i == 2){
			$domain = THISINPUT.val();
		}
		
		$HERF = 'http://'+$domain+'.domex.ru/'+$ned+'/'+$tip+'/';
		$('.button_fl_a').attr('href', $HERF);
		
	};
}; SELECT();


$('.button_fl').click(function(e){
	$('.button_fl').removeClass('open');
	if($('._select', this).has(e.target).length === 1) {
		$(this).removeClass('open');
	} else {
		$(this).addClass('open');
	}
});

$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".button_fl"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		div.removeClass('open'); // скрываем его
	}
});

cityCL = function(){
	$('._select ul li label').unbind('click');
	$('._select ul li label').click(function(){
		
		//alert($(this).closest('li').find('input').attr('id'));
		
		$(this).closest('._select').find('input').removeAttr('checked');
		$(this).closest('li').find('input').attr('checked', 'checked');
		$(this).closest('._select').find('li').removeClass('active');
	
		SELECT();
	});
}; cityCL();

$loadlist = 1;
$('.but_also_city').click(function(){
	$loadlist++;
	$('.city_list').append('<div class="load_city_'+$loadlist+'"></div>');
	link = $('.load_city_'+$loadlist);
	cntn = '/city.html .cn_city_'+$loadlist;
	link.load(cntn, function(){
		cityCL();
		//SELECT();
	});
	return false;
	//$(this).closest('.button_fl').addClass('open');
});

CloseRW = function(){
	$('.select_city_button').slideUp();
	//$('.form_filter').stop().animate({'padding-top':'8px','padding-bottom':'24px'});
	//$('.buttons_cn_filter').stop().animate({'padding-top':'24px'});
	//$('.buttons_cn_filter').stop().animate({'min-height':'0'});
};


$('.select_city_button .white_r_button').click(function(){
	$('#sel3').addClass('open');
	CloseRW();
});
$('.scb_closer').click(function(){
	CloseRW();
});
$('#sel3').one('click', function(){
	CloseRW();
});


$('.show_phone').one('click', function(){
	$('.pcon_phone_next').show();
	$(this).hide();
});

$('.send_massage_agent').focus(function(){
	
}).keyup(function(){
	$(' ~ div', this).show();
});

$('.objts_but').click(function(){
	OBBID = $(this).attr('rel');
	$('#'+OBBID).addClass('show_all_obj');
	$(this).hide();
});




//button_tab
//open_tab


$('.button_tab').click(function(){
	OBBID = $(this).attr('rel');
	$('#'+OBBID).addClass('bt_open');
	$(this).hide();
});

//new mobile menu burger
$(function(){
	$(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $(".redesign__header-mobile").toggleClass("df");
    });

	/* end new mobile menu burger
	 4 banners call btn */

	$(".ad-btn-call").click(function() {
		if ($(this).hasClass("phone-visible")) {
			$(this).text("Позвонить");
			$(this).removeClass("phone-visible");
		}
		else {
			var hiddenBtnPhone = $(this).attr("data-content-phone");
			$(this).text(hiddenBtnPhone);
			$(this).addClass("phone-visible");
		};
	});
});
/* end 4 banners call btn */

	$(".card-slider__list").owlCarousel({
		items: 1,
		dots: false,
		nav: true
	});

	$("[data-fancybox]").fancybox({
		buttons: [
			"close"
		],
	});

});

