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
 

 let itemsArray = []

 localStorage.setItem('#items', JSON.stringify(itemsArray))
 //const data = JSON.parse(localStorage.getItem('items'))

//  // form event listener here
// e.preventDefault()

// itemsArray.push(input.value)
// localStorage.setItem('#items', JSON.stringify(itemsArray))

// data.forEach(item => {
//     liMaker(item)
//   })

//   button.addEventListener('click', function() {
//     localStorage.clear()
//     while (ul.firstChild) {
//       ul.removeChild(ul.firstChild)
//     }
//   })