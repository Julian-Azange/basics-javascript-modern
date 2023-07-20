// Fetch API: es una interfaz que nos permite hacer peticiones http desde javascript

const apiKey = 'gWx41VxUg470lBvXZHIs150RDI4zfyO8'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then(resp => resp.json()).then(({ data }) => {
    const url = data.images.original.url;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);


}).catch(console.warn)