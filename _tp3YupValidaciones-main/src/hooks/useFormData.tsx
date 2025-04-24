import { useState } from "react";
import { IForm } from "../schemas/formSchema";

export const useFormData = ()=> {

    const [formValues, setFormValues] = useState<Record<keyof IForm, string>>({
        nombre: "",
        correo: "",
        contrasena: "",
        repetirContrasena: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof IForm, string>>>({});

    return {
        formValues, setFormValues,
        errors, setErrors,
    };
}