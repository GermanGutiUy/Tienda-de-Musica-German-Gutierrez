/*

import { useEffect, useState } from "react"

const hocBuscador = (component) => {
    return function () {
        const [productos, setProductos] = useState([])
        const [consulta, setConsulta] = useState("")

        useEffect(() => {

            fetch("Link")
            .then ((respuesta) => respuesta,json())
            .then((data) => serProductos(Data))

        }, [])

        const search = (listaProductos) => {
            const listaProductosFiltrados = listaProductos.filter(() => (
                producto["title"].toLoweCase().includes(consulta)
            ))

            return listaProductosFiltrados

        }

        const changeImput = () => {
            serConsulta(event.target.value.toLoweCase())
        }

        return (
            productos && (
                <div>
                    <imput type = "text" placeholder = "Bucar..." onChange = {changeImput} />
                    <Component productos = { search(productos)}/>
                </div>
            )
        )
    }
}

export default hocBuscador

*/