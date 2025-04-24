import * as y from "yup";

export const formSchema = y.object({
    nombre: y.string().required("Ingrese un nombre").min(3),
    correo: y.string().email().required("Ingrese un correo"),
    contrasena: y.string().required("Ingrese una contraseña").min(6),
    repetirContrasena: y.string().oneOf([y.ref('contrasena')], 'Las contraseñas no coinciden').required('Repite la contraseña'),
});

export type IForm = y.InferType<typeof formSchema>;