$(document).ready(function(){
            
    $('#btn1').click(function(){
      $('#p1').after("<p> The structure of rhodopsin in 2000 set the stage, giving the first glimpse at their structure. </p>");
    });
    $("#btn1").click(function(){
      $("div").data("The structure of rhodopsin in 2000 set the stage, giving the first glimpse at their structure", "The structure of rhodopsin in 2000 set the stage, giving the first glimpse at their structure");
    });
    $("#btn1-1").click(function(){
      alert($("div").data("The structure of rhodopsin in 2000 set the stage, giving the first glimpse at their structure"));
    });

    $('#btn2').click(function(){
        $('#p2').addClass('red');
           });
    
    $('#btn3').click(function(){
            $('#img1').toggle();
          });
    
    $('#btn4').click(function(){
        $('#p3').append(" <b>GPCR molecules bind to their ligands, then transmit this signal across the membrane to heterotrimeric G proteins. When the G protein binds to the activated GPCR, it loses a bound GDP molecule, replaces it with GTP, and falls into two pieces. The activated G proteins then trigger a cascade of signals inside the cell...until the GTP breaks down into GDP. This structure (PDB entry 3sn6) shows the interaction of a beta2 adrenergic receptor (in pink) with its G protein (in blue). The structure captures the complex in the middle of the process of signaling, after the GDP has been lost, but before it picks up a new GTP.</b>.");
          });


    $('#btn5').click(function(){
            $('#img-2').fadeOut('2000')
          });
    
    $('#btn6').click(function(){
            $('#img-2').fadeIn('2000')
          }); 
    
    $('#myForm').submit(function(event) {
            event.preventDefault();
            var $inputs = $('#myForm :input');
            var values = {};
            $inputs.each(function() {
              values[this.name] = $(this).val();
            });
            $('#displayArea').append("<tr><td>" + values.nombre + "</td><td>");
            $("input[type=text], textarea").val("");
          });
  
          $("#btn-focus").click(function(){
            $("#input-focus").focus();
            
         });


          $("#hide").click(function(){
            $("#p-Hide-Show").hide();
          });
          $("#show").click(function(){
            $("#p-Hide-Show").show();
          });


          $("#up").click(function(){
            $("#up-down").slideUp();
          });
          $("#down").click(function(){
            $("#up-down").slideDown();
          });
        });

         
  
        

 
