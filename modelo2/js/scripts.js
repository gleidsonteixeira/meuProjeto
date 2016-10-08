// JavaScript Document
$(document).ready(function() {
    $(".button-collapse").sideNav();
	$(".slider").slider({full_width: true});
});

function square(a1){
	var a = $(a1).width();
	$(a1).height(a);
}