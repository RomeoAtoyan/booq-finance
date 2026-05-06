import type { FieldError } from "react-hook-form";

export const FormErrorMessage = ({
  errors,
}: {
  errors: FieldError | undefined;
}) => {
  return (
    errors && <p className="italic text-xs text-red-400">{errors.message}</p>
  );
};
