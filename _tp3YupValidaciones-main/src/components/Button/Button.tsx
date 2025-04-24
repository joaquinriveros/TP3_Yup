import { ButtonProps } from '../../types/types';
import styles from './Button.module.css'

export const Button: React.FC<ButtonProps> = ({errors}: ButtonProps) => {

  const hasErrors = Object.values(errors).some((err) => err !== undefined);

  return (
    <div >
        <button 
          className={`${styles.buttonSubmit} ${hasErrors ? styles.disabled : ''}`}
          disabled={hasErrors} 
          type="submit"
        >Enviar
        </button>
    </div>
  )
}
