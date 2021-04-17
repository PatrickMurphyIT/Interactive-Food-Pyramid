// counters for total shelf items per shelf adults and children
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;

var childCounter1 = 0;
var childCounter2 = 0;
var childCounter3 = 0;
var childCounter4 = 0;
var childCounter5 = 0;
var childCounter6 = 0;

// recommended daily amounts per shelf adults and children
var childRecommendedShelf1lower = 3;
var childRecommendedShelf1upper = 6;
var childRecommendedShelf2lower = 2;
var childRecommendedShelf2upper = 5;
var childRecommendedShelf3lower = 3;
var childRecommendedShelf3upper = 3;
var childRecommendedShelf4lower = 2;
var childRecommendedShelf4upper = 4;
var childRecommendedShelf5lower = 1;
var childRecommendedShelf5upper = 1;
var childRecommendedShelf6lower = 1;
var childRecommendedShelf6upper = 1;

var recommendedShelf1lower = 5;
var recommendedShelf1upper = 7;
var recommendedShelf2lower = 3;
var recommendedShelf2upper = 7;
var recommendedShelf3lower = 3;
var recommendedShelf3upper = 5;
var recommendedShelf4lower = 2;
var recommendedShelf4upper = 2;
var recommendedShelf5lower = 1;
var recommendedShelf5upper = 1;
var recommendedShelf6lower = 1;
var recommendedShelf6upper = 1;

// page loads adult guidelines button as clickable, needs to be disabled to prevent clicking
// ref: https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
document.getElementById("adultGuidelinesButton").disabled = true;


function clickAdultRDA() {
    // for switching back
    // query selector to select any element with active class - then remove it
    document.querySelector('.active').classList.remove('active');
    // on click switch from child to adult guidelines
    // add active to element classlist
    document.getElementById("adultGuidelinesButton").classList.add('active');
    // disable adult button and enable child guidelines button
    document.getElementById("adultGuidelinesButton").disabled = true;
    document.getElementById("childGuidelinesButton").disabled = false;
    // reset each shelf border, background and value
    document.getElementById("shelf1").style.borderBottom = "100px solid green";
    document.getElementById("shelf2").style.borderBottom = "100px solid burlywood";
    document.getElementById("shelf3").style.borderBottom = "100px solid blue";
    document.getElementById("shelf4").style.borderBottom = "100px solid yellow";
    document.getElementById("shelf5").style.borderBottom = "100px solid orange";
    document.getElementById("shelf6").style.borderBottom = "100px solid red";
    document.getElementById("triangle").style.borderBottom = "100px solid red";
    document.getElementById("counter1").style.background = "white";
    document.getElementById("counter2").style.background = "white";
    document.getElementById("counter3").style.background = "white";
    document.getElementById("counter4").style.background = "white";
    document.getElementById("counter5").style.background = "white";
    document.getElementById("counter6").style.background = "white";
    document.getElementById("counter1").innerHTML = 0;
    document.getElementById("counter2").innerHTML = 0;
    document.getElementById("counter3").innerHTML = 0;
    document.getElementById("counter4").innerHTML = 0;
    document.getElementById("counter5").innerHTML = 0;
    document.getElementById("counter6").innerHTML = 0;
}

function clickChildRDA() {
    // as above
    document.querySelector('.active').classList.remove('active');
    document.getElementById("childGuidelinesButton").classList.add('active');
    document.getElementById("childGuidelinesButton").disabled = true;
    document.getElementById("adultGuidelinesButton").disabled = false;
    document.getElementById("shelf1").style.borderBottom = "100px solid green";
    document.getElementById("shelf2").style.borderBottom = "100px solid burlywood";
    document.getElementById("shelf3").style.borderBottom = "100px solid blue";
    document.getElementById("shelf4").style.borderBottom = "100px solid yellow";
    document.getElementById("shelf5").style.borderBottom = "100px solid orange";
    document.getElementById("shelf6").style.borderBottom = "100px solid red";
    document.getElementById("triangle").style.borderBottom = "100px solid red";
    document.getElementById("counter1").style.background = "white";
    document.getElementById("counter2").style.background = "white";
    document.getElementById("counter3").style.background = "white";
    document.getElementById("counter4").style.background = "white";
    document.getElementById("counter5").style.background = "white";
    document.getElementById("counter6").style.background = "white";
    document.getElementById("counter1").innerHTML = 0;
    document.getElementById("counter2").innerHTML = 0;
    document.getElementById("counter3").innerHTML = 0;
    document.getElementById("counter4").innerHTML = 0;
    document.getElementById("counter5").innerHTML = 0;
    document.getElementById("counter6").innerHTML = 0;
}

// value used as baseline and to add to incrementally adult and children
var border1 = 100;
var childBorder1 = 100;
// shelf 1 + button
function increment1() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    // when adult guidelines button is clicked
    if (adultRec.classList.contains("active")) {
        // max 10 items per shelf
        if (counter1 < 10) {
            // add 5pxs each item
            border1 += 5;
            document.getElementById("shelf1").style.borderBottom = border1 + "px solid green";
            // reset child counter and border (needed in event of switching)
            childCounter1 = 0;
            childBorder1 = 100;
            // add 1 to shelf toal per click
            counter1 = counter1 + 1;
            // update total value of shelf
            document.getElementById("counter1").innerHTML = counter1;
            // if total is above guidelines - red
            if (counter1 > recommendedShelf1upper) {
                document.getElementById("counter1").style.background = "red";
            }
            // if total is less than guidelines - orange
            else if (counter1 < recommendedShelf1lower) {
                document.getElementById("counter1").style.background = "orange";
            }
            // if total is within guidelines - green
            else {
                document.getElementById("counter1").style.background = "green";
            }
        }
    }
    // when children guidelines button is clicked
    else if (kidsRec.classList.contains("active")) {
        if (childCounter1 < 10) {
            childBorder1 += 5;
            document.getElementById("shelf1").style.borderBottom = childBorder1 + "px solid green";
            counter1 = 0;
            border1 = 100;
            childCounter1 = childCounter1 + 1;
            document.getElementById("counter1").innerHTML = childCounter1;
            if (childCounter1 > childRecommendedShelf1upper) {
                document.getElementById("counter1").style.background = "red";
            }
            else if (childCounter1 < childRecommendedShelf1lower) {
                document.getElementById("counter1").style.background = "orange";
            }
            else {
                document.getElementById("counter1").style.background = "green";
            }
        }
    }
}

// shelf 1 - button
function decrement1() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    // when adult guidelines button is clicked
    if (adultRec.classList.contains("active")) {
        if (counter1 != 0 && counter1 <= 10) {
            border1 -= 5;
            document.getElementById("shelf1").style.borderBottom = border1 + "px solid green";
            counter1 = counter1 - 1;
            document.getElementById("counter1").innerHTML = counter1;
            // needed to reset color to white after switch
            if (counter1 == 0) {
                document.getElementById("counter1").style.background = "white";
            }
            else if (counter1 < recommendedShelf1lower) {
                document.getElementById("counter1").style.background = "orange";
            }
            else if (counter1 < recommendedShelf1lower && counter1 < recommendedShelf1upper) {
                document.getElementById("counter1").style.background = "red";
            }
            else if (counter1 >= recommendedShelf1lower && counter1 <= recommendedShelf1upper) {
                document.getElementById("counter1").style.background = "green";
            }
        }
    }
    // when children guidelines button is clicked
    else if (kidsRec.classList.contains("active")) {
        if (childCounter1 != 0 && childCounter1 <= 10) {
            childBorder1 -= 5;
            document.getElementById("shelf1").style.borderBottom = childBorder1 + "px solid green";
            childCounter1 = childCounter1 - 1;
            document.getElementById("counter1").innerHTML = childCounter1;
            if (childCounter1 == 0) {
                document.getElementById("counter1").style.background = "white";
            }
            else if (childCounter1 < childRecommendedShelf1lower) {
                document.getElementById("counter1").style.background = "orange";
            }
            else if (childCounter1 < childRecommendedShelf1lower && childCounter1 < childRecommendedShelf1upper) {
                document.getElementById("counter1").style.background = "red";
            }
            else if (childCounter1 >= childRecommendedShelf1lower && childCounter1 <= childRecommendedShelf1upper) {
                document.getElementById("counter1").style.background = "green";
            }
        }
    }
}
// shelf 2-6 +/- buttons =then=> date entry and validation 
var border2 = 100;
var childBorder2 = 100;
function increment2() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter2 < 10) {
            border2 += 5;
            document.getElementById("shelf2").style.borderBottom = border2 + "px solid burlywood";
            childCounter2 = 0;
            childBorder2 = 100;
            counter2 = counter2 + 1;
            document.getElementById("counter2").innerHTML = counter2;
            if (counter2 > recommendedShelf2upper) {
                document.getElementById("counter2").style.background = "red";
            }
            else if (counter2 < recommendedShelf2lower) {
                document.getElementById("counter2").style.background = "orange";
            }
            else {
                document.getElementById("counter2").style.background = "green";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter2 < 10) {
            childBorder2 += 5;
            document.getElementById("shelf2").style.borderBottom = childBorder2 + "px solid burlywood";
            counter2 = 0;
            border2 = 100;
            childCounter2 = childCounter2 + 1;
            document.getElementById("counter2").innerHTML = childCounter2;
            if (childCounter2 > childRecommendedShelf2upper) {
                document.getElementById("counter2").style.background = "red";
            }
            else if (childCounter2 < childRecommendedShelf2lower) {
                document.getElementById("counter2").style.background = "orange";
            }
            else {
                document.getElementById("counter2").style.background = "green";
            }
        }
    }
}


function decrement2() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter2 != 0 && counter2 <= 10) {
            border2 -= 5;
            document.getElementById("shelf2").style.borderBottom = border2 + "px solid burlywood";
            counter2 = counter2 - 1;
            document.getElementById("counter2").innerHTML = counter2;
            if (counter2 == 0) {
                document.getElementById("counter2").style.background = "white";
            }
            else if (counter2 < recommendedShelf2lower) {
                document.getElementById("counter2").style.background = "orange";
            }
            else if (counter2 < recommendedShelf2lower && counter2 < recommendedShelf2upper) {
                document.getElementById("counter2").style.background = "red";
            }
            else if (counter2 >= recommendedShelf2lower && counter2 <= recommendedShelf2upper) {
                document.getElementById("counter2").style.background = "green";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter2 != 0 && childCounter2 <= 10) {
            childBorder2 -= 5;
            document.getElementById("shelf2").style.borderBottom = childBorder2 + "px solid burlywood";
            childCounter2 = childCounter2 - 1;
            document.getElementById("counter2").innerHTML = childCounter2;
            if (childCounter2 == 0) {
                document.getElementById("counter2").style.background = "white";
            }
            else if (childCounter2 < childRecommendedShelf2lower) {
                document.getElementById("counter2").style.background = "orange";
            }
            else if (childCounter2 < childRecommendedShelf2lower && childCounter2 < childRecommendedShelf2upper) {
                document.getElementById("counter2").style.background = "red";
            }
            else if (childCounter2 >= childRecommendedShelf2lower && childCounter2 <= childRecommendedShelf2upper) {
                document.getElementById("counter2").style.background = "green";
            }
        }
    }
}

var border3 = 100;
var childBorder3 = 100;
function increment3() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter3 < 10) {
            border3 += 5;
            document.getElementById("shelf3").style.borderBottom = border3 + "px solid blue";
            childCounter3 = 0;
            childBorder3 = 100;
            counter3 = counter3 + 1;
            document.getElementById("counter3").innerHTML = counter3;
            if (counter3 > recommendedShelf3upper) {
                document.getElementById("counter3").style.background = "red";
            }
            else if (counter3 < recommendedShelf3lower) {
                document.getElementById("counter3").style.background = "orange";
            }
            else {
                document.getElementById("counter3").style.background = "green";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter3 < 10) {
            childBorder3 += 5;
            document.getElementById("shelf3").style.borderBottom = childBorder3 + "px solid blue";
            counter3 = 0;
            border3 = 100;
            childCounter3 = childCounter3 + 1;
            document.getElementById("counter3").innerHTML = childCounter3;
            if (childCounter3 > childRecommendedShelf3upper) {
                document.getElementById("counter3").style.background = "red";
            }
            else if (childCounter3 < childRecommendedShelf3lower) {
                document.getElementById("counter3").style.background = "orange";
            }
            else {
                document.getElementById("counter3").style.background = "green";
            }
        }
    }
}


function decrement3() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter3 != 0 && counter3 <= 10) {
            border3 -= 5;
            document.getElementById("shelf3").style.borderBottom = border3 + "px solid blue";
            counter3 = counter3 - 1;
            document.getElementById("counter3").innerHTML = counter3;
            if (counter3 == 0) {
                document.getElementById("counter3").style.background = "white";
            }
            else if (counter3 < recommendedShelf3lower) {
                document.getElementById("counter3").style.background = "orange";
            }
            else if (counter3 < recommendedShelf3lower && counter3 < recommendedShelf3upper) {
                document.getElementById("counter3").style.background = "red";
            }
            else if (counter3 >= recommendedShelf3lower && counter3 <= recommendedShelf3upper) {
                document.getElementById("counter3").style.background = "green";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter3 != 0 && childCounter3 <= 10) {
            childBorder3 -= 5;
            document.getElementById("shelf3").style.borderBottom = childBorder3 + "px solid blue";
            childCounter3 = childCounter3 - 1;
            document.getElementById("counter3").innerHTML = childCounter3;
            if (childCounter3 == 0) {
                document.getElementById("counter3").style.background = "white";
            }
            else if (childCounter3 < childRecommendedShelf3lower) {
                document.getElementById("counter3").style.background = "orange";
            }
            else if (childCounter3 < childRecommendedShelf3lower && childCounter3 < childRecommendedShelf3upper) {
                document.getElementById("counter3").style.background = "red";
            }
            else if (childCounter3 >= childRecommendedShelf3lower && childCounter3 <= childRecommendedShelf3upper) {
                document.getElementById("counter3").style.background = "green";
            }
        }
    }
}

var border4 = 100;
var childBorder4 = 100;
function increment4() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter4 < 10) {
            border4 += 5;
            document.getElementById("shelf4").style.borderBottom = border4 + "px solid yellow";
            childCounter4 = 0;
            childBorder4 = 100;
            counter4 = counter4 + 1;
            document.getElementById("counter4").innerHTML = counter4;
            if (counter4 > recommendedShelf4upper) {
                document.getElementById("counter4").style.background = "red";
            }
            else if (counter4 < recommendedShelf4lower) {
                document.getElementById("counter4").style.background = "orange";
            }
            else {
                document.getElementById("counter4").style.background = "green";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter4 < 10) {
            childBorder4 += 5;
            document.getElementById("shelf4").style.borderBottom = childBorder4 + "px solid yellow";
            counter4 = 0;
            border4 = 100;
            childCounter4 = childCounter4 + 1;
            document.getElementById("counter4").innerHTML = childCounter4;
            if (childCounter4 > childRecommendedShelf4upper) {
                document.getElementById("counter4").style.background = "red";
            }
            else if (childCounter4 < childRecommendedShelf4lower) {
                document.getElementById("counter4").style.background = "orange";
            }
            else {
                document.getElementById("counter4").style.background = "green";
            }
        }
    }
}


function decrement4() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter4 != 0 && counter4 <= 10) {
            border4 -= 5;
            document.getElementById("shelf4").style.borderBottom = border4 + "px solid yellow";
            counter4 = counter4 - 1;
            document.getElementById("counter4").innerHTML = counter4;
            if (counter4 == 0) {
                document.getElementById("counter4").style.background = "white";
            }
            else if (counter4 < recommendedShelf4lower) {
                document.getElementById("counter4").style.background = "orange";
            }
            else if (counter4 < recommendedShelf4lower && counter4 < recommendedShelf4upper) {
                document.getElementById("counter4").style.background = "red";
            }
            else if (counter4 >= recommendedShelf4lower && counter4 <= recommendedShelf4upper) {
                document.getElementById("counter4").style.background = "green";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter4 != 0 && childCounter4 <= 10) {
            childBorder4 -= 5;
            document.getElementById("shelf4").style.borderBottom = childBorder4 + "px solid yellow";
            childCounter4 = childCounter4 - 1;
            document.getElementById("counter4").innerHTML = childCounter4;
            if (childCounter4 == 0) {
                document.getElementById("counter4").style.background = "white";
            }
            else if (childCounter4 < childRecommendedShelf4lower) {
                document.getElementById("counter4").style.background = "orange";
            }
            else if (childCounter4 < childRecommendedShelf4lower && childCounter4 < childRecommendedShelf4upper) {
                document.getElementById("counter4").style.background = "red";
            }
            else if (childCounter4 >= childRecommendedShelf4lower && childCounter4 <= childRecommendedShelf4upper) {
                document.getElementById("counter4").style.background = "green";
            }
        }
    }
}

var border5 = 100;
var childBorder5 = 100;
function increment5() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter5 < 10) {
            border5 += 5;
            document.getElementById("shelf5").style.borderBottom = border5 + "px solid orange";
            childCounter5 = 0;
            childBorder5 = 100;
            counter5 = counter5 + 1;
            document.getElementById("counter5").innerHTML = counter5;
            if (counter5 > recommendedShelf5upper) {
                document.getElementById("counter5").style.background = "red";
            }
            else if (counter5 == recommendedShelf5lower) {
                document.getElementById("counter5").style.background = "orange";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter5 < 10) {
            childBorder5 += 5;
            document.getElementById("shelf5").style.borderBottom = childBorder5 + "px solid orange";
            counter5 = 0;
            border5 = 100;
            childCounter5 = childCounter5 + 1;
            document.getElementById("counter5").innerHTML = childCounter5;
            if (childCounter5 > childRecommendedShelf5upper) {
                document.getElementById("counter5").style.background = "red";
            }
            else if (childCounter5 == childRecommendedShelf5lower) {
                document.getElementById("counter5").style.background = "orange";
            }
        }
    }
}

function decrement5() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter5 != 0 && counter5 <= 10) {
            border5 -= 5;
            document.getElementById("shelf5").style.borderBottom = border5 + "px solid orange";
            counter5 = counter5 - 1;
            document.getElementById("counter5").innerHTML = counter5;
            if (counter5 == 0) {
                document.getElementById("counter5").style.background = "white";
            }
            else if (counter5 == recommendedShelf5lower) {
                document.getElementById("counter5").style.background = "orange";
            }
            else if (counter5 < recommendedShelf5lower && counter5 > recommendedShelf5upper) {
                document.getElementById("counter5").style.background = "red";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter5 != 0 && childCounter5 <= 10) {
            childBorder5 -= 5;
            document.getElementById("shelf5").style.borderBottom = childBorder5 + "px solid orange";
            childCounter5 = childCounter5 - 1;
            document.getElementById("counter5").innerHTML = childCounter5;
            if (childCounter5 == 0) {
                document.getElementById("counter5").style.background = "white";
            }
            else if (childCounter5 == childRecommendedShelf5lower) {
                document.getElementById("counter5").style.background = "orange";
            }
            else if (childCounter5 < childRecommendedShelf5lower && childCounter5 > childRecommendedShelf5upper) {
                document.getElementById("counter5").style.background = "red";
            }
        }
    }
}

var border6 = 100;
var childBorder6 = 100;
function increment6() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter6 < 10) {
            border6 += 5;
            document.getElementById("shelf6").style.borderBottom = border6 + "px solid red";
            document.getElementById("triangle").style.borderBottom = border6 + "px solid red";
            childCounter6 = 0;
            childBorder6 = 100;
            counter6 = counter6 + 1;
            document.getElementById("counter6").innerHTML = counter6;
            if (counter6 > recommendedShelf6upper) {
                document.getElementById("counter6").style.background = "red";
            }
            else if (counter6 == recommendedShelf6lower) {
                document.getElementById("counter6").style.background = "orange";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter6 < 10) {
            childBorder6 += 5;
            document.getElementById("shelf6").style.borderBottom = childBorder6 + "px solid red";
            document.getElementById("triangle").style.borderBottom = childBorder6 + "px solid red";
            counter6 = 0;
            border6 = 100;
            childCounter6 = childCounter6 + 1;
            document.getElementById("counter6").innerHTML = childCounter6;
            if (childCounter6 > childRecommendedShelf6upper) {
                document.getElementById("counter6").style.background = "red";
            }
            else if (childCounter6 == childRecommendedShelf6lower) {
                document.getElementById("counter6").style.background = "orange";
            }
        }
    }
}

function decrement6() {
    var adultRec = document.getElementById('adultGuidelinesButton');
    var kidsRec = document.getElementById('childGuidelinesButton');
    if (adultRec.classList.contains("active")) {
        if (counter6 != 0 && counter6 <= 10) {
            border6 -= 5;
            document.getElementById("shelf6").style.borderBottom = border6 + "px solid red";
            document.getElementById("triangle").style.borderBottom = border6 + "px solid red";
            counter6 = counter6 - 1;
            document.getElementById("counter6").innerHTML = counter6;
            if (counter6 == 0) {
                document.getElementById("counter6").style.background = "white";
            }
            else if (counter6 == recommendedShelf6lower) {
                document.getElementById("counter6").style.background = "orange";
            }
            else if (counter6 < recommendedShelf6lower && counter6 > recommendedShelf6upper) {
                document.getElementById("counter6").style.background = "red";
            }
        }
    }
    else if (kidsRec.classList.contains("active")) {
        if (childCounter6 != 0 && childCounter6 <= 10) {
            childBorder6 -= 5;
            document.getElementById("shelf6").style.borderBottom = childBorder6 + "px solid red";
            document.getElementById("triangle").style.borderBottom = childBorder6 + "px solid red";
            childCounter6 = childCounter6 - 1;
            document.getElementById("counter6").innerHTML = childCounter6;
            if (childCounter6 == 0) {
                document.getElementById("counter6").style.background = "white";
            }
            else if (childCounter6 == childRecommendedShelf6lower) {
                document.getElementById("counter6").style.background = "orange";
            }
            else if (childCounter6 < childRecommendedShelf6lower && childCounter6 > childRecommendedShelf6upper) {
                document.getElementById("counter6").style.background = "red";
            }
        }
    }
}

// setting today's date as max date allowed - 
// extract d/m/y from today's date - assign to 'today' - set as max
// ref: https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today
var todaysDate = new Date();
var day = todaysDate.getDate();
var month = todaysDate.getMonth() + 1;
var year = todaysDate.getFullYear();
if (day < 10) {
    day = '0' + day
}
if (month < 10) {
    month = '0' + month
}
today = year + '-' + month + '-' + day;
document.getElementById("dateEntry").setAttribute("max", today);

// date validation
function selectDate() {
    // inputted date
    var enteredDate = document.getElementById("dateEntry").value;
    // if date entry is in the future - alert user as invalid
    if (enteredDate > today) {
        alert("Invalid Date Selection. Please Enter Valid Date.");
    }
    // keeps placeholder text visible until something is entered 
    else if (enteredDate == 0) {

    }
    // print date entered
    else {
        document.getElementById("dateView").innerHTML = enteredDate;
    }
}



