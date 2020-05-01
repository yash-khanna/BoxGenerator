let button = document.getElementById("theBoxes");
button.addEventListener("click", myfunction);


var oldValue = 0;
var i = 1;

function myfunction() {
    var n = document.getElementById("number").value;
    var str = document.getElementById("color").value;
    console.log(typeof (str));
    n = parseInt(oldValue) + parseInt(n);
    for (; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        box.style.backgroundColor = str;
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;

        oldValue = document.getElementById('box').lastElementChild.innerHTML;
        console.log(oldValue);
    }
}