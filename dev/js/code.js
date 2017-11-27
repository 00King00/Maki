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
	var count = 0;
	$(".search img").click(function(){
		count++;
		if(count % 2 == 0){
			$('input[type="search"]').css('display' ,'none')
		} else{
			$('input[type="search"]').css({
			opacity:1,
			display:'block',
			height:'38px',
			width: '200px',
			'padding-left': '32px',
			color: '#000',
			'background-color': '#fff',
			'cursor': 'auto',
			'outline': 'none',
			});
		}
		
		
		console.log(count);
		
		
		
	})
});