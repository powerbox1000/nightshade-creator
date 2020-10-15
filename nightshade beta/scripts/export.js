function exportCodeAsHTML(){
var htmlEl = document.getElementById('html');
var jsEl = document.getElementById('css');
var cssEl = document.getElementById('js');
var code = generate(htmlEl.value,cssEl.value,jsEl.value);
download('export.html',code,'html');
}
function exportCodeAsText(){
var htmlEl = document.getElementById('html');
var jsEl = document.getElementById('css');
var cssEl = document.getElementById('js');
var code = generate(htmlEl.value,cssEl.value,jsEl.value);
download('export.txt',code,'plain');
}