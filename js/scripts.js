// JavaScript Document
$(document).ready(function() {
    $(".button-collapse").sideNav();
	pageToPage();
	square(".preferencias .item");
});

function pageToPage(){
	$("main").css({"left":"0px","opacity":"1"});
	$("html, body").css({"overflow":"auto"});
}

function square(a1){
	var a = $(a1).width();
	$(a1).height(a);
}