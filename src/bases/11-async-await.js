// const getImagenPromesa = () =>  new Promise((resolve, reject) =>  resolve('https://saddsadas.com'))
   
// getImagenPromesa().then(console.log)

const getImagen = async() => {
    try{
        const apiKey = 'AvmSEwdQthiD60okCwflfmjmzU7e3ZPk';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json(); 
        const {url} = data.images.original;
        return url;
    } catch (error){
        //manejo de error
        console.error(error)

        return 'No se encontro la imagen'
    }
    
}

getImagen();

