var main = function () {
	console.log("HEY");
	
	var menuOn = false;
    $('.fa').click( function () {
    
		
		if(!menuOn)
		{
			menuOn = true;
			$('.nav').animate( //selects the menu and calls animate method on it
				{//The first parameter is like a function I guess (it's in curly braaces?)
					left: '0px'//tels where to position
				}, 200);//second parameter is the time in miliseconds
			$('body').animate( {left: '200px'}, 200);
			
		}
		else
		{
			menuOn = false;
			$('.nav').animate(
            {
                left:'-270px'
            }, 200);
        $('body').animate(
            {
                left:'0px'
            }, 200);        
		}

})

}



$(document).ready(main);