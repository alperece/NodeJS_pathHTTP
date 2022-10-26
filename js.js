
/* TOOL TIP : You win! */

$(document).ready(function(){
    $("#myTooltip").tooltip({
        title: "<h4><img src='./Assets/tongue-out.png' alt='Alper'> You win, <b>€1000</b> <i>BONUS!</i></h4>", 	
        html: true, 
    }); 
});

/* ALERT - Modal Close Button Function */

$(document).ready(function(){
    $("#myModal1").on('hidden.bs.modal', function(){
        alert("Please login again!!!");
    });
});

/* POPOVER */
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});


/* TOAST */

$(document).ready(function(){
    $(".show-toast").click(function(){
        $("#myToast").toast('show');
    });
    $(".hide-toast").click(function(){
        $("#myToast").toast('hide');
    });
    $(".dispose-toast").click(function(){
        $("#myToast").toast('dispose');
    });
});

/* PROGRESS BAR INSIDE THE MODAL FORM */

var i = 0;
      function makeProgress(){
          if(i < 100){
              i = i + 1;
              $(".progress-bar2").css("width", i + "%").text(i + " %");
          }
          // Wait for sometime before running this script again
          // 1000 ms = 1 second
          setTimeout("makeProgress()", 100);
      }
      makeProgress();