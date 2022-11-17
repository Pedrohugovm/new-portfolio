$(document).ready(function(){
    $.MultiLanguage('assets/lang/language.json', 'en');
    
    var en = document.getElementById("enTranslator");
    var br = document.getElementById("brTranslator");
  
    en.onclick = function () {
  
        $.MultiLanguage('assets/lang/language.json', 'en');
  
        return false;
    }
  
    br.onclick = function () {
  
        $.MultiLanguage('assets/lang/language.json', 'br');
  
        return false;
    }
  })