$(document).ready(function(){
	$('.add').click(function() {
		var listItem = $("#list-item").val();
		event.preventDefault();
		$('.items').append("<li class='line'><button class='move'></button><p>" +listItem+ "</p><button class='remove'></button></li>");
	 });

	
});

 $(document).on("click", ".remove", function() {
        $(this).closest("li").fadeOut(200);
    });






