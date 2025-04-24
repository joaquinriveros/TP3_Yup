import * as y from "yup";
import styles from "./Input.module.css"
import { formSchema } from "../../schemas/formSchema";
import { Button } from "../Button/Button";
import { InputProps } from "../../types/types";

export const Input: React.FC<InputProps> = (
  {
    formValues,
    setFormValues,
    errors, 
    setErrors,
    submited
  }: InputProps

  ) => {

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {

      const { name, value } = e.target;
    
      const updatedValues = {
        ...formValues,
        [name]: value
      };

      setFormValues(updatedValues); // React programa ese cambio y lo aplicará más tarde, usualmente en el próximo render. Por lo que no pasamos el estado directamente.
    
      try {
        // Valida solo ese campo
        await formSchema.validateAt(name, updatedValues);
        setErrors((prev) => ({ ...prev, [name]: undefined })); // Si no hay error, lo eliminamos del estado de errores
      } catch (error) {
        if (error instanceof y.ValidationError) {
          setErrors((prev) => ({ ...prev, [name]: error.message }));
        }
      }
  };
      
return (
    <div className={styles.input_container}>
        <div className={styles.input}>
          <label htmlFor="nombre">Nombre: </label>
          <input 
              id="nombre"
              name="nombre"
              type="text" 
              onChange={(e) => {handleChange(e)}}
              value={formValues.nombre}
          />
          {errors.nombre && <p style={{color: 'red'}}>{errors.nombre}</p>}
        </div>
        <div className={styles.input}>
          <label htmlFor="correo">Correo: </label>
          <input 
              id="correo" 
              name="correo" 
              type="text"
              onChange={(e) => {handleChange(e)}}
              value={submited ? "" : formValues.correo}
          />
          {errors.correo && <p style={{color: 'red'}}>{errors.correo}</p>}
        </div>
        <div className={styles.input}>
            <label htmlFor="contrasena">Contraseña: </label>
            <input 
                id="contrasena" 
                name="contrasena" 
                type="password" 
                onChange={(e) => {handleChange(e)}}
                value={submited ? "" : formValues.contrasena}
            />
            {errors.contrasena && <p style={{color: 'red'}}>{errors.contrasena}</p>}
        </div>
        <div className={styles.input}>
          <label htmlFor="repetirContrasena">Repetir contraseña: </label>
          <input 
              id="repetirContrasena" 
              name="repetirContrasena" 
              type="password" 
              onChange={(e) => {handleChange(e)}}
              value={submited ? "" : formValues.repetirContrasena}
          />
          {errors.repetirContrasena && <p style={{color: 'red'}}>{errors.repetirContrasena}</p>}
        </div>
        <Button errors={errors}/>
    </div>
  )
}
