$("ul").on('click', 'li', function(){
    $(this).toggleClass('completed');
});

$("ul").on('click', 'span', function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopImmediatePropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       var todoText = $(this).val();
       $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
 });

 $('#datepicker').val(moment().format('DD-MM-YYYY'));

 $('.fa-calendar-check').on('click', function(){
    $('#datepicker').fadeToggle();
 });
 

 
