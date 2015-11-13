$(document).ready(function(){
  $('#navigation').on('click','.navbar-toggle', function(){
  	var expanded = $('#portfolio-navbar').attr('aria-expanded');
  	if(expanded === 'true'){
      $('#welcome').css('margin-top', '6rem');
  	}
  	else {
      $('#welcome').css('margin-top', '18rem');
    }
  });
});