 $("#right").click(function( ){
    $("#list li:first").before($("#list li:last"));
    
       
    $("#list li:last").fadeTo(1500, 0.1).fadeTo(1000,  1); 
 });


$("#left").click(function(){
    $("#list li:last").after($("#list li:first"));
    $("#list li:last").fadeTo(1500, 0.1).fadeTo(1000,  1); 
 });


