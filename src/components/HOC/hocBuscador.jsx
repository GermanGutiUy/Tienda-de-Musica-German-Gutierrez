/*

import { useEffect, useState } from "react"

const hocBuscador = (component) => {
    return function () {
        const [prodcutos, setProductos] = useState([])
        const [consulta, setConsulta] = useState("")

        useEffect(() => {

            fetch("Link")
            .then ((respuesta) => respuesta,json())
            .then((data) => serProductos(Data))

        }, [])

        const search = (listaProdcutos) => {
            const listaProdcutosFiltrados = listaProductos.filter(() => (
                producto["title"].toLoweCase().includes(consulta)
            ))

            return listaProdcutosFiltrados

        }

        const changeImput = () => {
            serConsulta(event.target.value.toLoweCase())
        }

        return (
            prodcutos && (
                <div>
                    <imput type = "text" placeholder = "Bucar..." onChange = {changeImput} />
                    <Component prodcutos = { search(productos)}/>
                </div>
            )
        )
    }
}

export default hocBuscador

*/