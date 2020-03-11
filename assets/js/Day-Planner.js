var currentDateAndTime = Date(Date.now());//(Eastern Daylight Time)
var currentHour = new Date().getHours();//Current hour in military time
currentHour = 12
$('.date').text(currentDateAndTime)
for (let i = 9; i < 18; i++) {
    if (currentHour > i) {
        $('#h' + i).addClass('bg-secondary')
    }
    else if (currentHour === i) {
        $('#h' + i).addClass('bg-danger')
    }
    else {
        $('#h' + i).addClass('bg-success')
    }
    var text=localStorage.getItem('h'+i)
    if(text){
        $('#h'+i).val(text)
    }
}

$(".submit").click(function () {
    var hour = $(this).val()
    var text = $("#h" + hour).val().trim()
    console.log(hour, text, '<======>')
    localStorage.setItem('h' + hour, text)
})