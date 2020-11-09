"use strict";

window.onload = function()
{
    var httpRequest = new XMLHttpRequest();
    var url = "http://localhost:8080/info2180-lab4/superheroes.php/";
    let form = document.getElementsByTagName('form').item(0);

    form.onsubmit = function(){
        httpRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            }
        }

        httpRequest.open('GET', url);
        httpRequest.send();
        return false
    }

}