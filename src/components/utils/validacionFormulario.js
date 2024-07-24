import { string, object, mixed } from "yup";

let userSchema = object({
    nombre: string().required("El campo nombre no debe estar vacio"),
    telefono: mixed().required("El campo telefono no debe estar vacio"),
    email: string().email("El campo email no tiene el formato correcto").required("El campo email no debe estar vacio")
})

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return { status: "error", massage: error.message }
    }
}

export default validateForm