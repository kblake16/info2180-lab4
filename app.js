"use strict";

window.onload = function()
{
    var httpRequest = new XMLHttpRequest();
    var url = "http://localhost:8080/info2180-lab4/superheroes.php/";
    let form = document.getElementsByTagName('form').item(0);
    let btn = document.getElementsByTagName('button').item(0);
    let result = document.querySelector(".result");

    form.onsubmit = function()
    {
        httpRequest.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                result.innerHTML = this.responseText;
            }
        }

        httpRequest.open('GET', url,true);
        httpRequest.send();

        form.reset();
        return false;
    }
}
