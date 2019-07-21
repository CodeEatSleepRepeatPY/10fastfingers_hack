setInterval(function(){
let word = document.querySelector(".highlight").innerHTML;
let textBox = document.querySelector("#inputfield.form-control").value = word;
var ev = $.Event('keyup')
ev.which = 32
$("#inputfield.form-control").trigger(ev)},100)