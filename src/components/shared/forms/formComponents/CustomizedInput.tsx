import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import React from "react";
// import MaskedInput from "react-text-mask";
import { useFormikContext } from "formik";

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  label: string;
  required: boolean;
  placeholder: string;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  as?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  fieldClassName?: string;
  mask?: string | RegExp | (string | RegExp)[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  inputType?: string;
}

const labelStyles =
  "relative flex flex-col w-full before:content-['*'] before:text-red before:absolute before:z-10 before:top-[15px] before:left-4";
const fieldStyles =
  "relative w-full h-full pl-6 pr-5 py-[13.5px] xl:py-3 text-dark placeholder-grey border rounded-[6px] outline-none transition duration-300 ease-out";
const fieldWrapperStyles =
  "relative group before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:blur-[3px] before:transition before:duration-300 before:ease-out before:will-change-transform";
const errorStyles = "absolute bottom-[-14px] left-2 text-10med text-inputError";

export default function CustomizedInput({
  errors,
  touched,
  fieldName,
  placeholder = "",
  as,
  labelClassName = "",
  wrapperClassName = "",
  fieldClassName = "",
  mask = "",
  onChange,
  inputType = "text",
}: CustomizedInputProps) {
  const { handleChange } = useFormikContext();

  return (
    <label className={`${labelStyles} ${labelClassName}`}>
      <div
        className={`${fieldWrapperStyles} ${wrapperClassName} ${
          errors[fieldName] && touched[fieldName]
            ? "before:bg-inputError"
            : "before:bg-transparent group-hover:before:bg-yellow focus-within:before:bg-yellow"
        }`}
      >
        <Field
          as={as}
          mask={mask}
          name={fieldName}
          type={inputType}
          autoComplete="on"
          placeholder={placeholder}
          onChange={onChange || handleChange}
          className={`${fieldStyles} ${fieldClassName} ${
            errors[fieldName] && touched[fieldName]
              ? "border-red"
              : "border-black focus:border-green"
          }`}
        ></Field>
      </div>
      <ErrorMessage
        name={fieldName}
        component="p"
        className={errorStyles}
      ></ErrorMessage>
    </label>
  );
}
