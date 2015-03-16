$(document).ready(function () {

	// click 

	$('.add').click(function(){
		$( "input" )
  			.keyup(function() {
    		var value = $( this ).val();
   			 $( "p" ).text( value );
  })

	}

}