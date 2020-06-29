function post() {
    const data = document.getElementsByClassName('input');

    for (var i = 0; i < data.length; i++) {
        console.log(data[i].value);
    }


    console.log(typeof(data));

    /*
    const url = 'https://marketec-boot.herokuapp.com/usuario/';
   
    const parametros = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
    };

    fetch(url, parametros);


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        url = 'https://marketec-boot.herokuapp.com/personas/'
    fetch(proxyUrl + url, parametros);
 */

}


function get() {
    /*
        fetch('https://pokeapi.co/api/v2/pokemon/1/', {
                method: 'GET',
                headers: {},
                mode: 'no-cors', // <---
                cache: 'default'
            })
            .then(Response => Response.json())
            .then(data => {
                console.log(data.nombre)
            })

        fetch('http://ruc.aqpfact.pe/sunat/20605078479?fbclid=IwAR1FpY5YY-4bsKbnzCUkhjEw_ISTxjUPwjEU6N9VlZNiwdjQ3RAn0YzfZgQ', {
                method: 'GET',

                mode: 'no-cors', // <---
                cache: 'default'
            })
            .then(function(response) {
                console.log(response)
                return response.json;
            })
            .then(function(myJson) {
                console.log(myJson);
            });


        fetch('http://localhost:8082/marca/listar', {
                method: 'GET',
                headers: {},
                mode: 'no-cors', // <---
                cache: 'default',

            })
            .then(function(response) {
                if (response.status !== 200) {
                    return;
                }
                response.json().then(function(data) {
                    data.forEach((element) => {
                        element.nombre;
                    })
                })
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });



        const url = 'https://marketec-boot.herokuapp.com/marca/listar'

        const parametros = {
            method: 'GET',

        }

        fetch(url, parametros)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('ERROR ' + error));
     */


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://marketec-boot.herokuapp.com/marcas/'
    fetch(proxyUrl + targetUrl)
        .then(blob => blob.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(e => {
            console.log(e);
            return e;
        });

}