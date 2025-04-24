import styles from "./Form.module.css"
import { Input } from "../Input/Input"
import Swal from "sweetalert2";
import { useState } from "react";
import { useFormData } from "../../hooks/useFormData";

export const Form: React.FC = () => {

    const [submited, setSubmitted] = useState(false);
    const {formValues, setFormValues, errors, setErrors} = useFormData(); // Instancia padre del hook

    const handleReset = ()=>{
        setFormValues({
          nombre: "",
          correo: "",
          contrasena: "",
          repetirContrasena: ""
        });
        setErrors({
          nombre: undefined,
          correo: undefined,
          contrasena: undefined,
          repetirContrasena: undefined
        });

        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    }
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Swal.fire({
            title: 'Formulario enviado',
            text: 'El formulario se ha enviado correctamente',
            icon: 'success',
            iconColor: '#00ff00',
            confirmButtonText: 'Aceptar',
            background: "#181818",
            backdrop: `rgba(0, 0, 0, .6)`,
            color: "#fff",
        });

        setSubmitted(true);
        handleReset();
    }

    return (
        <div className={styles.form_container}>
            <form 
                className={styles.form} 
                action="" 
                method="post"
                onSubmit={(e) => {handleSubmit(e)}}
            >
                <Input 
                    formValues={formValues}
                    setFormValues={setFormValues}
                    errors={errors}
                    setErrors={setErrors}
                    submited={submited}
                /> {/* Pasamos los valores del estado como props */}
            </form>
        </div>
    )
}
