// Async and await: son una forma de escribir código asíncrono que es más fácil de leer y escribir.

// const getImagePromesa = () => new Promise(resolve => resolve('https://google.com'));
// getImagePromesa().then(console.log);


const getImage = async () => {
    const apiKey = 'gWx41VxUg470lBvXZHIs150RDI4zfyO8'
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImage();

