const productos = [
    {
        id: "123565",
        categoria: "cuerda",
        nombre: "asd",
        descripcion:"asdas",
        stock:"asd",
        precio:"asd",
        imagen: "asd"
    },
    {
        id:"9654",
        categoria:"viento",
        nombre:"asd",
        descripcion:"asdas",
        stock:"asd",
        precio:"asd",
        imagen: "asd"
    },
    {
        id:"9969",
        categoria:"audiopro",
        nombre:"asd",
        descripcion:"asdas",
        stock:"asd",
        precio:"asd",
        imagen: "asd"
    }
  ]
  
    const obtenerProductos = () => {
      return new Promise ((resolve, reject) =>{
  
      //Simulamos un retraso de red de 3 segundos
        setTimeout(()=>{
          resolve([])
        },3000)
        })
      }

      export { obtenerProductos }