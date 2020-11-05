// Exercise 1

$('.generator').on('click', function() {
let obj = {}

obj.ProcessorId = $(this).closest('div').attr('id')
obj.dataId = $(this).closest('.computer').attr('data-id')
obj.BUS = $(this).closest('.computer').find('.BUS').text()
console.log(obj);

    
}
)

$('.validator').on('click', function() {
let val = {}
val.generator = $(this).closest('.computer').find('.generator').text()
val.MB = $(this).closest('.computer').find('.MB').text()
console.log(val);
val.QR = []


})