$(function(){
	// this part for header menu in mobileonly
	$(".down").click(function(){
		$(this).hide(300);
		$(".header_menu ul").slideDown(1000);
		setTimeout(function(){
			$(".up").show(300);
		},1000)
	})

	$(".up").click(function(){
		$(this).hide(300);
		$(".header_menu ul").slideUp(1000);
		setTimeout(function(){
			$(".down").show(300);
		},700)
	})


	// this part for search

	$("#top-search").click(function(){
		if($('.search-top input[type="search"]').val().length<3){
			if($('.search-top input[type="search"]').css("display")== "none"){
				$('.search-top input[type="search"]').css({
				opacity:1,
				display:'block',
				height:'40px',
				width: '200px',
				color: '#000',
				'background-color': '#fff',
				'cursor': 'auto',
				'outline': 'none',
				});
			} else {
				$(".search-top input").css("display", "none")
			}
		}else{
				var res;

				res =$(".search-top input").val();
			$("#top").submit();
				console.log(res);

		}
	});
	$( "#top" ).submit(function( event ) {
		//alert( "Handler for .submit() called." );
	});

	$( ".search-right>form" ).submit(function( event ) {
		//alert( "Handler for .submit() called." );
	});


	
	// this part for range
	$('.range-slider').jRange({
		from:1000,
		to: 10000,
		step: 100,
		scale: [1000,5000],
		format: '%s',
		width: '100%',
		showLabels: true,
		isRange : true
		}).jRange('setValue', '1000,5000');


	// this part for add products

	$('.counter-btn_minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.counter-btn_plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});


	// this part for slider products

	var ProductSlider=$('#ProductSlider').lightSlider({
		item: 4,
		controls:false,
		slideMove:4,

		responsive:[
			{
				breakpoint: 800,
				settings:{
					item:3,
					slideMove:3,
			}
			},
			{
				breakpoint: 600,
				settings:{
					item:1,
					slideMove:1,
				}
			},
		],
	})
	$(".slider > .ls-prevSlide").click(function(){
		ProductSlider.goToPrevSlide();
	});
	$(".slider > .ls-nextSlide").click(function(){
		ProductSlider.goToNextSlide();
	});


	//client slider

	var ClientSlider=$('#ClientSlider').lightSlider({
		item: 5,
		slideMove:1,
		loop:false,
		controls:false,
		slideMargin: 10,
		autoWidth:false,
		responsive:[
			{
				breakpoint: 800,
				settings:{
					item:3,
					slideMove:1,
				}
			},
			{
				breakpoint: 600,
				settings:{
					item:2,
					slideMove:1,
				}
			},
		],
	})
	$(".block__title_slider .ls-prevSlide").click(function(){
		ClientSlider.goToPrevSlide();
	});
	$(".block__title_slider .ls-nextSlide").click(function(){
		ClientSlider.goToNextSlide();
	});


	//this part for looking product-img
	$(".product-img__thumbnails img").click(function(){
		var sourse =  $(this).attr('src');
		$(".product-img__main-img img").attr( 'src', sourse);
	});
	//end part for looking product-img


	//this part for order-sum
	$("td .amount").change(function () {
		var quantity = +($(this).val());
		console.log(quantity);
		var price = +($(this).parent().parent().siblings('td[data-th="Цена ₽"]').text().slice(0,-4));
		var result = quantity * price;
		$(this).parent().parent().siblings('td[data-th="Сумма ₽"]').text(result +' руб.');
		var sum = 0;
		$('#order td[data-th="Сумма ₽"]').each(function(){
		sum+= +$(this).text().slice(0,-4);
		});
		$('.order-sum').text(sum +' руб.');
		$('span.sum').text(sum  + ' руб.')

		if($("#s8").prop("checked")){
			var element = +($('#timepicker').val().slice(0,2));
			if(element<9){
					var res = +($('.order-sum').text().slice(0,-4));
					$('span.sum').text(res+700+' руб.')
				}
				else{
					var res = +($('.order-sum').text().slice(0,-4));
					$('span.sum').text(res+500+' руб.')
				}
		}
	});


	//this part for rating
	$(".rating").mousemove(function(e){
		if($(".rating").hasClass("rated")){
			return false;
		}
		var offset = $(this).offset();
		coords = e.clientX - offset.left;
		var ratingWidth = $(this).width();
		star = ratingWidth/5;
		var rating = Math.round((coords+(star*0.25))/(star*0.5));
		var stars_width =rating*10 + "%";

		$(".rating-hover").css("width",stars_width);
	});
	$(".rating").mouseleave(function(){
		if($(this).hasClass("rated")){
			return false;
		}
		$(".rating-hover").css("width",0);
	});
	$(".rating").click(function(e){
		var offset = $(this).offset();
		coords = e.clientX - offset.left;
		var ratingWidth = $(this).width();
		star = ratingWidth/5;
		var rating = Math.round((coords+(star*0.25))/(star*0.5));
		var stars_width =rating*10 + "%";
		$('.rating>input').attr('value',rating/2);
		$(".rating-hover").css("width",stars_width);
		$(this).addClass("rated")
		console.log(rating);
	});


	//This for table on order_page
	var headertext = [],
	headers = document.querySelectorAll("#order th"),
	tablerows = document.querySelectorAll("#order th"),
	tablebody = document.querySelector("#order tbody");

	for(var i = 0; i < headers.length; i++) {
	  var current = headers[i];
	  headertext.push(current.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row; row = tablebody.rows[i]; i++) {
	  for (var j = 1, col; col = row.cells[j]; j++) {
	    col.setAttribute("data-th", headertext[j-1]);
	  }
	}


	//this part for order__options
	$("input[name='s1']").click(function() {
		if($("#s9").prop("checked")){
			$("textarea.greeting-card").show()
		}
		else $("textarea.greeting-card").hide()
		if($("#s5").prop("checked")){
			$(".payment-method").css({
				"filter":"grayscale(100%)",
				"transition":"all 0.5s ease",
				"pointer-events": "none"
				})
		}
		else $(".payment-method").css({
			"filter":"grayscale(0%)",
			"pointer-events": "auto"
		})
	})

	$("input[name='s2']").click(function() {
		if($("#s8").prop("checked")){
			$(".delivery__info:first-child").show()
			$('.delivery__sum-order').show()
			var element = +($('#timepicker').val().slice(0,2));
			//console.log(element);
			if(element<9){
					var res = +($('.order-sum').text().slice(0,-4));
					$('span.sum').text(res+700+' руб.')
				}
				else{
					var res = +($('.order-sum').text().slice(0,-4));
					$('span.sum').text(res+500+' руб.')
				}

		} else {
			$(".delivery__info:first-child").hide()
		 }

	});


	//this part for timepicker
	$("#timepicker").timepicker({
		change: function(){
			var element =+($(this).val().slice(0,-3));
			if(element<9){
				var res = +($('.order-sum').text().slice(0,-4));
				$('span.sum').text(res+700+' руб.')
			}
			else{
				var res = +($('.order-sum').text().slice(0,-4));
				$('span.sum').text(res+500+' руб.')
			}
		},
		timeFormat: 'HH:mm',
		interval: 30,
		minTime: '0',
		maxTime: '23:30',
		defaultTime: '10',
		startTime: '00:00',
		dynamic: false,
		dropdown: true,
		scrollbar: true
	});


	//This part for datepicker
	$("#datepicker").datepicker();
	Date.prototype.toDateInputValue = (function() {
		var local = new Date(this);
		local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
		return local.toJSON().slice(0,10);
	});
	$('#datepicker').val(new Date().toDateInputValue());
		var now = new Date();
		var month = (now.getMonth() + 1);
		var day = now.getDate();
		if(month < 10)
			month = "0" + month;
		if(day < 10)
			day = "0" + day;
		var today = day+ '.' + month + '.'+ now.getFullYear();
	$('#datepicker').val(today);

	//autocomplete
	var city = [
		"Москва",
		"Санкт-Петербург",
		"Челябинск",
		"Мурманск",
		"Владивосток",
		"Иваново",
		"Новосибирск",
		"Омск",
		"Кемерово",
		"Воронеж",
		"Самара",
		"Ростов-на-Дону",
		"Тюмень"
	];
	$( "#autocomplete" ).autocomplete({
		source: city,
		autoFocus: true,
		minLength: 0
	});
	$('#autocomplete').focus(function(){
	$(this).val('');
	$(this).keydown();
	});

})
