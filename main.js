function myaler1(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML="แสดงผลรวม  : " + sum
    alert(sum)
    
};

function myaler2(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML="แสดงผลรวม  : " + sum
    alert(sum)
};

function myaler3(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML="แสดงผลรวม  : " + sum
    alert(sum)
};

function myaler4(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML="แสดงผลรวม  : " + sum
    alert(sum)
};


function myaler(){
    alert("Hell Onny")
}

const img = document.createElement("img")
img.src = "img/on.jpg" ;
img.style.width = "200px";


document.getElementById("mydiv").appendChild(img);

//
function myaler5(){
    var num1 = document.getElementById("num11").value
    var num2 = document.getElementById("num22").value
    var sum = parseInt(num1)/(parseInt(num2/100+ num2/100));
    document.getElementById("result").innerHTML="แสดงผลรวม  : " + sum.toFixed(2);
    alert("ค่า BMI = "+sum)
};
