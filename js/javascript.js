
// Button Color green on click
$('.btn-active-green').click(function(){
    $("button").removeClass("active");
    $(this).addClass("active");
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