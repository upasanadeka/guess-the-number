function start() {
    location.href = "game.html";
};

var num = Math.floor(Math.random() * 100) + 1;
var counter = 0;
function detect_enter_key(event) {
    var key_board_keycode = event.which || event.keyCode;
    if(key_board_keycode == 13)
    {
        submit();
    }
}
function submit() {
    counter += 1;
    flag = 0;
    var choice = document.getElementById("ans").value;
    document.getElementById("ans").value = " ";
    console.log("choice: ", choice, " counter: ", counter, " num: ", num);
    var hint = "";
    if (num != choice && counter < 7) {
        quote="Not really... You might wanna try again!";
        if (num > choice){
            hint = "It is greater than " + choice;
        }

        else if (num < choice){
            hint = "It is less than " + choice;
        }
    }
    else if (num != choice && counter == 7) {
        document.getElementById("heading").innerHTML = "GAME OVER!!!";
        document.getElementById("heading2").innerHTML = "";
        quote = "The number was " + num;
        flag = 1;
    }
    else if (num != choice && counter > 7) {
        // location.reload();
        location.href = "index.html";
    }
    else if (num == choice){
        quote = "YASSS!! BIG BRAIN ENERGY!";
        flag = 1;
    }

    document.getElementById("ques").innerHTML = quote;
    document.getElementById("hint").innerHTML = hint;

    if (num != choice && flag == 1){
        document.getElementById("heading2").type = "hidden";
        document.getElementById("ans").type = "hidden";
        document.getElementById("submit").type = "hidden";
        document.getElementById("svg-cat").innerHTML =  "<img src='./cat" +  ".svg' width='300px' >";
        // document.getElementById("restart").innerHTML =  "<img src='./redo" +  ".svg' width='100px' >";
        document.getElementById("restart").innerHTML = "<img src='./redo" + ".svg' >" + "<p class='text-lg'>start new game</p>";
    }
}
function reloadGame() {
    location.href = "index.html";
}
//Background color

// var colors = ["#FEC8D8", "#D291BC", "#E0BBE4", "#957DAD", "#93C2C6", "#FFDFD3", "#B1D9CD", "#FBEAC8", "#FAD2A7", "FDB196"];
var colors = ["yellow", "#32CD32", "cyan"];
var currentIndex = 0;

setInterval(function() {
	document.body.style.cssText = "background-color: " + colors[currentIndex];
	currentIndex++;
	if (currentIndex == undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
}, 1000);

