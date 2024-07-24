import { string, object, mixed, ref } from "yup";

let userSchema = object({
    nombre: string().required("El campo nombre no debe estar vacío"),
    telefono: mixed().required("El campo telefono no debe estar vacío"),
    email: string().email("El campo email no tiene el formato correcto").required("El campo email no debe estar vacío"),
    repetirEmail: string().oneOf([ref('email')], "Los emails no coinciden").required("El campo repetir email no debe estar vacío")
});

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm);
        return { status: "success" };
    } catch (error) {
        return { status: "error", message: error.message };
    }
};

export default validateForm;
