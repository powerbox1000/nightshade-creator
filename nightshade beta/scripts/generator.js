//This generates the HTML, JS, and CSS output
function generate(html,css,js){
var htmlJs = html.replace('</html>','<script>'+js+'</script></html>');
var htmlJsCss = htmlJs.replace('<body>','<style>'+css+'</style>');
//var out = htmlJsCss.replace(/(\r\n|\n|\r)/gm,"");
//return out;
return htmlJsCss
}
function download(filename,text,type) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/'+type+';charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

//realtime generator
document.onkeyup=function(){
var htmlEl = document.getElementById('html');
var jsEl = document.getElementById('js');
var cssEl = document.getElementById('css');
var resultEl = document.getElementById('resultPrev');
var code = generate(htmlEl.value,cssEl.value,jsEl.value);
resultEl.setAttribute('src','data:text/html;charset=utf-8,' + encodeURIComponent(code));
}