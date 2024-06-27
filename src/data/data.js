const productos = [
    {
        id: "asd",
        categoria: "cuerda",
        nombre: "asd",
        descripcion:"asdas",
        stock:"asd",
        precio:"asd",
        imagen: "asd"
    },
    {
        id:"asd",
        categoria:"viento",
        nombre:"asd",
        descripcion:"asdas",
        stock:"asd",
        precio:"asd",
        imagen: "asd"
    },
    {
        id:"asasdd",
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
          resolve("Se resolvio")
        },3000)
        })
      }

      export { obtenerProductos }