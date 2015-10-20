$(document).ready(function(){
	$('#section1').on('click',function(){
	$('#content1').toggleClass("displayBlock");
		


	});

	$('#section2').on('click',function(){
	$('#content2').toggleClass("displayBlock");

	});

	$('#section3').on('click',function(){
	$('#content3').toggleClass("displayBlock");

	});

});



	//if ($('#content1').on('click')){
	//	$('#content2').toggleClass("cancel") && $('#content3').toggleClass("cancel");