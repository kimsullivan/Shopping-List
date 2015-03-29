$(document).ready(function(){
	$('.add').click(function() {
		var listItem = $("#list-item").val();
		$('.items').append("<li class='line'><button class='move'></button><p>" +listItem+ "</p><button class='remove'></button></li>");
	 });

});


