function clr(){
    document.getElementById("result").value = "";
}
function display(val){
    document.getElementById("result").value+=val;
}
function equate(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value =y;
}
function sin(){
    console.log(document.getElementById("result").value)
    var text = document.getElementById("result").value
     document.getElementById("result").value=Math.sin(text * Math.PI / 180);
}
function cos(){
    console.log(document.getElementById("result").value)
    var text = document.getElementById("result").value
     document.getElementById("result").value=Math.cos(text * Math.PI / 180);
}
function tan(){
    console.log(document.getElementById("result").value)
    var text = document.getElementById("result").value
     document.getElementById("result").value=Math.tan(text * Math.PI / 180);
}
function sin(){
    console.log(document.getElementById("result").value)
    var text = document.getElementById("result").value
     document.getElementById("result").value=Math.sin(text * Math.PI / 180);
}
function sqrt(){
    document.getElementById("result").value=Math.sqrt(document.getElementById("result").value);
}
function ln(){
    document.getElementById("result").value=Math.log(document.getElementById("result").value);
}
function exp(){
    document.getElementById("result").value=Math.exp(document.getElementById("result").value);
}
function back(){
    var text = document.getElementById("result").value
    document.getElementById("result").value=text.substring(0, text.length-1)
}
function percent(){
    console.log(document.getElementById("result").value)
    var text = document.getElementById("result").value
    document.getElementById("result").value=text/100;
}






