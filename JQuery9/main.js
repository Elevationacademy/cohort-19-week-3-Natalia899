//Exercise1
$("button").on("click", function(){
    let newHuman = $('input').val()
    $('ul').append(`<li> ${newHuman} </li>`)
   
  })
  
//Exercise2
$('ul').on('click', 'li', function() {
$(this).remove()

} )

//Exercise3
 const box = $(`<div id='box'></div>`)
 $('body').append(box)
 $('#box').append(`<div id='b1' class='box'></div>`)
 $('#box').append(`<div id='b2' class='box'></div>`)

 $('#b2').css('background-color', 'red')
 $('.box').hover(function(){
     if ($('.box').css('background-color', 'red') ) { $('.box').css('background-color', 'blue')
    } else { $('.box').css('background-color', 'red') }
 })

 //Exercise4
  
$('#items').on('click'. function(){
    if ( $(this).data().instock() ) {
        $('#cart').append(`<div class='wishItem'>${$(this).text()} </div>`) 
    }
})

