// Variable for date-picker

var datePicker = document.getElementById('datePicker');

var choseDate = document.getElementById('choseDate');

// Variable for printing values.....

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var ageMiliSeconds = document.getElementById('ageMiliSeconds');
 

datePicker.addEventListener('change',function(){
    //alert(this.value);
    //console.log(this.value);
    var options = { year: 'numeric' , month: 'long' , day: 'numeric'};
    var selectedDated = new Date(this.value);
    var DOB = selectedDated.toLocaleDateString('en-us',options);

    choseDate.innerHTML = "DOB : " + " " + DOB;

    var miliSeconds_Btw_DOB = Date.parse(DOB);
    var miliSecond_Btw_Now = Date.now();

    var age_in_MiliSeconds = miliSecond_Btw_Now - miliSeconds_Btw_DOB;

    //console.log(age_in_MiliSeconds);

    var miliSeconds = age_in_MiliSeconds;
    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var month = day*30;
    var year = day*365;

    // Now calculate the year
    var years = Math.round(miliSeconds/year);
    var months = years*12;
    var days = years*365;
    var hours = Math.round(miliSeconds/hour);
    var seconds = Math.round(miliSeconds/second);

    // Now print the values in box..

    ageYear.innerHTML = years;
    ageMonth.innerHTML = months;
    ageDays.innerHTML = days;
    ageHours.innerHTML = hours;
    ageSeconds.innerHTML = seconds;
    ageMiliSeconds.innerHTML = miliSeconds;

    // Lets remove the expand class 
    // When user input the DOB then Shows the Age component..
    document.querySelector('.age-calc').classList.add('expand');

})

