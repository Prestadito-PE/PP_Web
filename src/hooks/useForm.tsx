import { useState } from "react";

interface UseFormProps {
  initialValues: { [key: string]: any };
  onSubmit: (values: { [key: string]: any }) => void;
  validate?: (values: { [key: string]: any }) => { [key: string]: string };
}

interface UseFormReturn {
  values: { [key: string]: any };
  errors: { [key: string]: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useForm = ({
  initialValues,
  onSubmit,
  validate = () => ({}),
}: UseFormProps): UseFormReturn => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const fieldErrors = validate({ [name]: value });
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: fieldErrors[name] });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };

  return { values, errors, handleChange, handleSubmit };
};