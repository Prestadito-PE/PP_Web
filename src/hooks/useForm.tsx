import { useState } from "react";

interface UseFormProps {
  initialValues: { [key: string]: any };
  onSubmit: (values: { [key: string]: any }) => Promise<void>;
  validate?: (values: { [key: string]: any }) => { [key: string]: string };
}

interface UseFormReturn {
  values: { [key: string]: any };
  errors: { [key: string]: string };
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // const fieldErrors = validate({ [name]: value });
    setValues({ ...values, [name]: value });
    // setErrors({ ...errors, [name]: fieldErrors[name] });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await onSubmit(values);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  return { values, errors, isLoading, handleChange, handleSubmit };
};