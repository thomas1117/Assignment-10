$(document).ready(function(){
	$('#section1').on('click',function(){
	$('#content1').toggleClass("displayBlock");
	clear('#content2');
	clear('#content3');

	});

	$('#section2').on('click',function(){
	$('#content2').toggleClass("displayBlock");
	clear('#content1');
	clear('#content3');
	});

	$('#section3').on('click',function(){
	$('#content3').toggleClass("displayBlock");
	clear('#content1');
	clear('#content2');
	});

});
	var clear= function(x) {
		$(x).removeClass("displayBlock");
	}
	
	
		

	//if ($('#content1').on('click')){
	//	$('#content2').toggleClass("cancel") && $('#content3').toggleClass("cancel");