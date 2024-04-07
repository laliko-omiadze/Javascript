

//lesson7
let div = document.getElementById('api');
let ul = document.createElement('ul')

let request =  new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/unknown');

request.addEventListener('load', function() {
    let responsetext =this.responseText;
    let responseJs =JSON.parse(responsetext);
    console.log (responseJs);

    let li = document.createElement('li');
    li.innerText = responseJs.data [2].name;
    ul.appendChild(li);
        
    });

div.appendChild(ul);



request.addEventListener('error', function(){});

request.send();