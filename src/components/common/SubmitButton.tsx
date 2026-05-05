import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type SubmitButtonProps = ComponentProps<typeof Button> & {
  label?: string;
  submittingLabel?: string;
  isSubmitting: boolean;
  icon?: ReactNode;
};

const SubmitButton = ({
  label = "Submit",
  submittingLabel = "Submitting",
  isSubmitting,
  icon,
  ...props
}: SubmitButtonProps) => {
  return (
    <Button {...props}>
      <span className="flex items-center gap-2">
        {isSubmitting ? (
          <>
            {submittingLabel}
            <LoaderCircle className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            {label}
            {icon}
          </>
        )}
      </span>
    </Button>
  );
};

export default SubmitButton;
