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
		if($('.search-top input[type="search"]').val()==""){
			if($('.search-top input[type="search"]').css("display")== "none"){
				$('.search-top input[type="search"]').css({
				opacity:1,
				display:'block',
				height:'38px',
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
			function getRes(){
				var res;
				//res =$("input").val();
				res= $(this);
				
				alert(res);
			}
			$(this).parent().submit (function () {
				return confirm ( 'Ви дійсно хочете відправити дані?');
			});
			//getRes();
			
		}	
	});
  
  
	$('.range-slider').jRange({
		from:1000,
		to: 10000,
		step: 100,
		scale: [1000,5000],
		format: '%s',
		width: '90%',
		showLabels: true,
		isRange : true

	}).jRange('setValue', '1000,5000');
});