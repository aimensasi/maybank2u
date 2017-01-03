$(document).ready(function(){
	$('.drawer').drawer();
	
	$('.link-to').on('click touch', function(){
		$('#note').modal('show');
	});
});