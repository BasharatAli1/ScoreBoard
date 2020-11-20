var flag = true

// Button Color green on click
$('.btn-active-green').click(function(){
    // $("button").removeClass("active");
    // $(this).addClass("active");
    
});

//  refresh button for log.html
$('.refresh').click(function(){
    document.getElementById('log-iframe').setAttribute('src', 'log.html');
});

// for reset button

document.getElementById("btn-reset").addEventListener("click", resetFun);

function resetFun(){
    
    // Button Color green on click
    $('.btn-active-green').removeClass('btn-success').addClass('btn-primary');

    setScreen();
    $("button").removeClass("active");

    var pic = document.getElementById('pic-1st');
    pic.style.display="none";
    pic = document.getElementById('pic-2nd');
    pic.style.display="none";
    pic = document.getElementById('pic-3rd');
    pic.style.display="none";
    pic = document.getElementById('pic-4th');
    pic.style.display="none";
    pic = document.getElementById('pic-5th');
    pic.style.display="none";
    pic = document.getElementById('right-color-bar');
    pic.style.display="none";
    pic = document.getElementById('left-color-bar');
    pic.style.display="none";
    var text = document.getElementById('team-name');
    text.style.display = "none"
    text = document.getElementById('team-name2');
    text.style.display = "none"
    text = document.getElementById('score-on-board-large');
    text.style.display = "none"
    text = document.getElementById('score-on-board-small');
    text.style.display = "none"
    pic = document.getElementById('team-logo-on-board-centre');
    pic.style.display="none";
    pic = document.getElementById('team-logo-on-board-left');
    pic.style.display="none";
    pic = document.getElementById('team-logo-on-board-right');
    pic.style.display="none";

    flag = true;


}

// screen
function setScreen()
{
    var pic = document.getElementById('screen-img');
    pic.src="../images/run-game-info/run-game-info-board.PNG";
    pic.style.display="block";
}

// line up
function lineUp()
{
    resetFun();

    var pic = document.getElementById('screen-img');
    pic.src="../images/run-game-info/field.PNG";
    pic.style.display="block";
}

// fullscreen
function changeFullscreen()
{
    // var pic = document.getElementById('right-color-bar');
    // pic.style.display="block";
    // pic = document.getElementById('left-color-bar');
    // pic.style.display="block";
    // var text = document.getElementById('team-name');
    // text.style.display = "block"
    // text = document.getElementById('team-name2');
    // text.style.display = "block"
    // pic = document.getElementById('team-logo-on-board-centre');
    // pic.style.display="block";
    // pic = document.getElementById('team-logo-on-board-left');
    // pic.style.display="block";
    // pic = document.getElementById('team-logo-on-board-right');
    // pic.style.display="block";

    //pic.setAttribute('src',"../images/run-game-info/black.PNG");
    if (flag)
    {
        resetFun();
        var pic = document.getElementById('right-color-bar');
        pic.style.display="block";
        pic = document.getElementById('left-color-bar');
        pic.style.display="block";
        var text = document.getElementById('team-name');
        text.style.display = "block"
        text = document.getElementById('team-name2');
        text.style.display = "block"
        text = document.getElementById('score-on-board-large');
        text.style.display = "block"
        text = document.getElementById('score-on-board-small');
        text.style.display = "block"
        
        pic = document.getElementById('team-logo-on-board-centre');
        pic.style.display="block";
        pic = document.getElementById('team-logo-on-board-left');
        pic.style.display="block";
        pic = document.getElementById('team-logo-on-board-right');
        pic.style.display="block";

        
        var pic = document.getElementById('screen-img');
        pic.src="../images/run-game-info/black.PNG";
        pic.style.display = "block";
        // barRight.style.display = "block";
        // barLeft.style.display = "block";
        // name.style.display = "block"
        // name2.style.display = "block"
        
        $('#fullscreen').removeClass('btn-primary').addClass('btn-success');
        flag = false;
    }
    else 
    {
        $('#fullscreen').removeClass('btn-success').addClass('btn-primary');
        resetFun();
    }
}

// pic-1st
function changeImg1st()
{
    var pic = document.getElementById('pic-1st');
    
    if (pic.style.display === "")
    {
        resetFun();
        pic.src="../images/run-game-info/1st.PNG";
        pic.style.display = "block";
        
        $('#1st-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetFun();
        pic.src="../images/run-game-info/1st.PNG";
        pic.style.display = "block";
        $('#1st-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#1st-btn').removeClass('btn-success').addClass('btn-primary');
        resetFun();
    }
}

// pic-2nd
function changeImg2nd()
{
    var pic = document.getElementById('pic-2nd');
    
    if (pic.style.display === "")
    {
        resetFun();
        pic.src="../images/run-game-info/1st.PNG";
        pic.style.display = "block";
        
        $('#2nd-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetFun();
        pic.src="../images/run-game-info/2nd.PNG";
        pic.style.display = "block";
        $('#2nd-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#2nd-btn').removeClass('btn-success').addClass('btn-primary');
        resetFun();
    }
}

// pic-3rd
function changeImg3rd()
{
    var pic = document.getElementById('pic-3rd');
    
    if (pic.style.display === "")
    {
        resetFun();
        pic.src="../images/run-game-info/3rd.PNG";
        pic.style.display = "block";
        
        $('#3rd-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetFun();
        pic.src="../images/run-game-info/3rd.PNG";
        pic.style.display = "block";
        $('#3rd-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#3rd-btn').removeClass('btn-success').addClass('btn-primary');
        resetFun();
    }
}

// pic-4th
function changeImg4th()
{
    var pic = document.getElementById('pic-4th');
    
    if (pic.style.display === "")
    {
        resetFun();
        pic.src="../images/run-game-info/4th.PNG";
        pic.style.display = "block";
        
        $('#4th-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetFun();
        pic.src="../images/run-game-info/4th.PNG";
        pic.style.display = "block";
        $('#4th-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#4th-btn').removeClass('btn-success').addClass('btn-primary');
        resetFun();
    }
}

// pic-5th
function changeImg5th()
{
    var pic = document.getElementById('pic-5th');
    
    if (pic.style.display === "")
    {
        resetFun();
        pic.src="../images/run-game-info/5th.PNG";
        pic.style.display = "block";
        
        $('#5th-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else if (pic.style.display === "none")
    {
        resetFun();
        pic.src="../images/run-game-info/5th.PNG";
        pic.style.display = "block";
        $('#5th-btn').removeClass('btn-primary').addClass('btn-success');
    } 
    else 
    {
        pic.style.display = "none";
        $('#5th-btn').removeClass('btn-success').addClass('btn-primary');
        resetFun();
    }
}

//  refresh button
$('.refresh').click(function(){
    document.getElementById('log-iframe').setAttribute('src', 'log.html');
});

//  refresh button
$('.refresh').click(function(){
    document.getElementById('log-iframe').setAttribute('src', 'log.html');
});

//  refresh button
$('.refresh').click(function(){
    document.getElementById('log-iframe').setAttribute('src', 'log.html');
});

//  refresh button
$('.refresh').click(function(){
    document.getElementById('log-iframe').setAttribute('src', 'log.html');
});

//  refresh button
$('.refresh').click(function(){
    document.getElementById('log-iframe').setAttribute('src', 'log.html');
});

//  refresh button
$('.refresh').click(function(){
    document.getElementById('log-iframe').setAttribute('src', 'log.html');
});


           //plugin bootstrap minus and plus for team A
           $('.btn-team-A-score').click(function(e){ 
               e.preventDefault();
               
               fieldName = $(this).attr('data-field-A');
               type      = $(this).attr('data-type');
               var input = $("input[name='"+fieldName+"']");
               var currentVal = parseInt(input.val());
               if (!isNaN(currentVal)) {
                   if(type == 'minus') {
                       
                       if(currentVal > input.attr('min')) {
                           input.val(currentVal - 1).change();
                       } 
                       if(parseInt(input.val()) == input.attr('min')) {
                           $(this).attr('disabled', true);
                       }

                   } else if(type == 'plus') {

                       if(currentVal < input.attr('max')) {
                           input.val(currentVal + 1).change();
                       }
                       if(parseInt(input.val()) == input.attr('max')) {
                           $(this).attr('disabled', true);
                       }

                   }
               } else {
                   input.val(0);
               }
           });
           $('.input-team-A-score').focusin(function(){
           $(this).data('oldValue', $(this).val());
           });
           $('.input-team-A-score').change(function() {
               
               minValue =  parseInt($(this).attr('min'));
               maxValue =  parseInt($(this).attr('max'));
               valueCurrent = parseInt($(this).val());
               
               name = $(this).attr('name');
               if(valueCurrent >= minValue) {
                   $(".btn-team-A-score[data-type='minus'][data-field-A='"+name+"']").removeAttr('disabled')
               } else {
                   alert('Sorry, the minimum value was reached');
                   $(this).val($(this).data('oldValue'));
               }
               if(valueCurrent <= maxValue) {
                   $(".btn-team-A-score[data-type='plus'][data-field-A='"+name+"']").removeAttr('disabled')
               } else {
                   alert('Sorry, the maximum value was reached');
                   $(this).val($(this).data('oldValue'));
               }
           });
           $(".input-team-A-score").keydown(function (e) {
                   // Allow: backspace, delete, tab, escape, enter and .
                   if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                       // Allow: Ctrl+A
                       (e.keyCode == 65 && e.ctrlKey === true) || 
                       // Allow: home, end, left, right
                       (e.keyCode >= 35 && e.keyCode <= 39)) {
                           // let it happen, don't do anything
                           return;
                   }
                   // Ensure that it is a number and stop the keypress
                   if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                       e.preventDefault();
                   }
               });
   
               

           //plugin bootstrap minus and plus for team B
           $('.btn-team-B-score').click(function(e){
               e.preventDefault();
               
               fieldName = $(this).attr('data-field-B');
               type      = $(this).attr('data-type');
               var input = $("input[name='"+fieldName+"']");
               var currentVal = parseInt(input.val());
               if (!isNaN(currentVal)) {
                   if(type == 'minus') {
                       
                       if(currentVal > input.attr('min')) {
                           input.val(currentVal - 1).change();
                       } 
                       if(parseInt(input.val()) == input.attr('min')) {
                           $(this).attr('disabled', true);
                       }

                   } else if(type == 'plus') {

                       if(currentVal < input.attr('max')) {
                           input.val(currentVal + 1).change();
                       }
                       if(parseInt(input.val()) == input.attr('max')) {
                           $(this).attr('disabled', true);
                       }

                   }
               } else {
                   input.val(0);
               }
           });
           $('.input-team-B-score').focusin(function(){
           $(this).data('oldValue', $(this).val());
           });
           $('.input-team-B-score').change(function() {
               
               minValue =  parseInt($(this).attr('min'));
               maxValue =  parseInt($(this).attr('max'));
               valueCurrent = parseInt($(this).val());
               
               name = $(this).attr('name');
               if(valueCurrent >= minValue) {
                   $(".btn-team-B-score[data-type='minus'][data-field-B='"+name+"']").removeAttr('disabled')
               } else {
                   alert('Sorry, the minimum value was reached');
                   $(this).val($(this).data('oldValue'));
               }
               if(valueCurrent <= maxValue) {
                   $(".btn-team-B-score[data-type='plus'][data-field-B='"+name+"']").removeAttr('disabled')
               } else {
                   alert('Sorry, the maximum value was reached');
                   $(this).val($(this).data('oldValue'));
               }
               
               
           });
           $(".input-team-B-score").keydown(function (e) {
                   // Allow: backspace, delete, tab, escape, enter and .
                   if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                       // Allow: Ctrl+A
                       (e.keyCode == 65 && e.ctrlKey === true) || 
                       // Allow: home, end, left, right
                       (e.keyCode >= 35 && e.keyCode <= 39)) {
                           // let it happen, don't do anything
                           return;
                   }
                   // Ensure that it is a number and stop the keypress
                   if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                       e.preventDefault();
                   }
               });










