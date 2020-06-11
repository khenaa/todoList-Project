// Check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("checked");
});

// deleting todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(450, function(){
		$(this).remove();
	});
	
	
});

$("input[type='text']").keypress(function(event){
	// if enter key pressed
	if(event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		// clearing the text input
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas  fa-trash-alt'></i></span> " + todoText + "</li>")

	}
});

// hide and show the text input
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});