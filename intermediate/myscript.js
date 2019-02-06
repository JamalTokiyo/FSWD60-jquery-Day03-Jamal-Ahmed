$(document).ready(function(){
	var color=['red','green','blue'];
	var classes=['.notebook_image','.phone_image','.tablet_image'];
	for(i=0; i<color.length; i++){
	$(classes[i]).css('background-color',color[i]);
	}
	//$('.phone_image').css('background-color','green');
	//$('.tablet_image').css('background-color','blue');
})