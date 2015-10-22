$(document).ready(function() {
	
	// this is menu responsive
	$("#my-menu").mmenu();
	  $("#close_open_menu").click(function() {
	     $("#my-menu").trigger("open.mm");
	  });


	// Calling LayerSlider on the target element
    $('#mainslider').layerSlider({

        responsiveUnder : 1170,
        layersContainer : 1170,
        skin: 'fullwidth',
       	skinsPath: 'scss/plugin/skins/'
    });
    $('.next-mainslider').on('click', function(){
      $('#mainslider').layerSlider('next')
      return false;
    })
    $('.prev-mainslider').on('click', function(){
      $('#mainslider').layerSlider('prev')
      return false;
    })

  //tour slide
   $("#tour-slide").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      pagination: true,
  });

    //showBoxPassword
    $('#showBoxPassword').click(function(){
        $('#getPassword').modal('show');
        $('#loginModal').modal('hide');
    })
    $('#showBoxLogin').click(function(){
        $('#getPassword').modal('hide');
        $('#loginModal').modal('show');
    })

});
$(window).resize(function(){

})