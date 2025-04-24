export interface InputProps {
    formValues: Record<string, string>;
    setFormValues: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    errors: Partial<Record<string, string>>;
    setErrors: React.Dispatch<React.SetStateAction<Partial<Record<string, string>>>>;
    submited: boolean;
}

export interface ButtonProps {
    errors: Partial<Record<string, string>>;
}