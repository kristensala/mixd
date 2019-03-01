window.onload = function loadLogo() {
    for (var i = 1; i < 40; i++) {
        (function (i) {
            setTimeout(function () {
                if (i > 1) {
                    var idx = i-1
                    var previousIdx = "logo-img--" + idx;
                    document.getElementsByClassName(previousIdx)[0].setAttribute("style", "opacity:0");
                }


                var currentIdx = "logo-img--" + i;
                document.getElementsByClassName(currentIdx)[0].setAttribute("style", "opacity:1;");
            }, 40 * i);
        }) (i);
    };
}


function closeNav() {
    document.getElementById("navi-toggle").checked = false;
}


var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function openModal() {
    document.getElementById('result').value = "";
    modal.style.display = "block";
    randomEquation()


}

var result;

function randomEquation() {
    var randomNum1 = Math.floor(Math.random() * 11);
    var randomNum2 = Math.floor(Math.random() * 11);
    var equation = randomNum1 + " + " + randomNum2 + " = ";
    // Set the span content
    document.getElementsByClassName('equation')[0].innerHTML = equation;
    result = randomNum1 + randomNum2;
       
}

function checkResult() {
    var quess = document.getElementById('result').value;
    if (quess == result) {
        console.log("checked")
        modal.style.display = "none";
    } else {
        location.reload();
    }
}


