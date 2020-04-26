$(document).ready(function() {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$(".player").hide();
    	$(".player-controls").hide();
	}
	
	/************************
	    - Scroll reveal -
	************************/
   	window.sr = new scrollReveal({
	  	reset:true,
	  	move:"10px",
	  	mobile:false
	});
	/***********************
	    - Contact form -
	***********************/
    $('#submit').click(function() {
		//Validate and process form
    	$("#ajax-contact-form").validate({             
			rules:{			
				name:{
					required:true,
				},
							
				email:{
					required:true,
					email:true,
				},
							
				message:{
					required:true,
				},
			},
			
			messages:{			
				name:{
					required:"<i class='fa fa-exclamation-triangle name'></i>",
				},
			
				email:{
					required:"<i class='fa fa-exclamation-triangle email'></i>",
					email:"<i class='fa fa-exclamation-triangle email'></i>",
				},
			
				message:{
					required:"<i class='fa fa-exclamation-triangle message'></i>",
				},
			
			},

            //Submit form
           	submitHandler:function(form) {
		 		//Create variables from the form
		 		var name = $('input#name').val(); 
		 		var email = $('input#email').val();  
		 		var message = $('textarea#message').val();

               	//Create variables that will be sent in a URL string to contact.php
              	var dataString = '&name='+name+'&email='+email+'&message='+message;
        		
				$.ajax({
                	type: "POST",
                   	url: "contact.php",
                    data: dataString,
                    success: function(data) {
                    	if(data==='ok') { 
							$("#ajax-contact-form").find('input[type=text], input[type=email], textarea').val(""); 
						} 
                        
						if(data=='ok') {
                        	result = '<div class="notification_ok"><i class="fa fa-check"></i> Your email was sent. Thanks!</div>';
                       	} else {
                        	result = data;
                        }
                        
						$('#note').html(result);
           			}                         
              	});
					  
				return false;
        	}
		});
    });

	/*************************
	    - Youtube player -
	*************************/
    $(".player").mb_YTPlayer();
    
   	//Player controls
    $('#play').on("click", function(){
    	$('.player').playYTP();
	});

  	$('#pause').on("click", function(){
    	$('.player').pauseYTP();
	});
});

/**********************
	- Window load -
**********************/
$(window).load(function() {
    $(".page-loader").delay(700).fadeOut("slow");
 
	setTimeout(function() {
		$(".logo").delay(1000).css({display: 'none'}).fadeIn(1000);
		$("h1").delay(1000).css({display: 'none'}).fadeIn(1000);
		$("p").delay(1000).css({display: 'none'}).fadeIn(1000);
		$(".countdown").delay(1000).css({display: 'none'}).fadeIn(1000);
		$(".mouse").delay(1000).css({display: 'none'}).fadeIn(1000);
    });
});