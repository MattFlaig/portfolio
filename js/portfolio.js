var backToDefault = function(element){
  element.find('a').css('color', '#fff');
  element.css('border-bottom' ,'4px solid #fff');
  element.data('clicked', false);
};

var manageClick = function(element){
  element.find('a').css('color', '#666');
  element.css('border-bottom' ,'4px solid #666');
  element.data('clicked', true);
};

var setLinkColour = function(element, colour){
  element.find('a').css('color', colour);
  element.css('border-bottom' ,'4px solid ' + colour);
};


$(document).ready(function(){

  $('.link').on('mouseenter', function(){
    setLinkColour($(this), '#666');
  });

  $('.link').on('mouseleave', function(){
    return $(this).data('clicked') ? false : setLinkColour($(this), '#fff');
  });

  $('.link').on('click', function(){
    backToDefault($('.link'));
    manageClick($(this));
  });
});