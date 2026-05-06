import SubmitButton from "@/components/common/SubmitButton";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useModal } from "@/hooks/useModal";
import { cn } from "@/lib/utils";
import { memberSchema, type MemberFormValues } from "@/zod/add-member.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { FormErrorMessage } from "../components/form/FormErrorMessage";

interface AddMemberFormProps {
  onAddMember: (data: MemberFormValues) => void;
}

const AddMemberForm = ({ onAddMember }: AddMemberFormProps) => {
  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<MemberFormValues>({
    resolver: zodResolver(memberSchema),
  });

  const onSubmit = async (data: MemberFormValues) => {
    console.log("Adding member optimistically:", data);
    onAddMember(data);
    closeModal();
  };

  return (
    <form
      noValidate
      className="space-y-6"
      id="add-member-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field>
          <FieldLabel
            htmlFor="input-field-name"
            className="text-[11px] uppercase tracking-wide font-bold text-gray-500"
          >
            Full Name<span className="text-red-400">*</span>
          </FieldLabel>
          <Input
            {...register("name")}
            id="input-field-name"
            type="text"
            placeholder="e.g. John Doe"
            className={cn(
              "mt-1.5 h-10 border-gray-100 shadow-none focus:ring-[#4F7CFF]/20",
              errors.name && "border-destructive",
            )}
          />
          <FormErrorMessage errors={errors.name} />
        </Field>
        <Field>
          <FieldLabel
            htmlFor="input-field-email"
            className="text-[11px] uppercase tracking-wide font-bold text-gray-500"
          >
            Email Address<span className="text-red-400">*</span>
          </FieldLabel>
          <Input
            {...register("email")}
            id="input-field-email"
            type="email"
            placeholder="john@company.com"
            className={cn(
              "mt-1.5 h-10 border-gray-100 shadow-none focus:ring-[#4F7CFF]/20",
              errors.email && "border-destructive",
            )}
          />
          <FormErrorMessage errors={errors.email} />
        </Field>
      </div>

      <div className="mb-8">
        <Field>
          <FieldLabel className="text-[11px] uppercase tracking-wide font-bold text-gray-500">
            Project Role<span className="text-red-400">*</span>
          </FieldLabel>
          <Select
            onValueChange={(value) =>
              setValue("role", value as MemberFormValues["role"])
            }
          >
            <SelectTrigger
              className={cn(
                "mt-1.5 h-10 border-gray-100 shadow-none focus:ring-[#4F7CFF]/20",
                errors.role && "border-destructive",
              )}
            >
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MEMBER">Member</SelectItem>
              <SelectItem value="OWNER">Owner</SelectItem>
            </SelectContent>
          </Select>
          <FormErrorMessage errors={errors.role} />
        </Field>
      </div>

      <div className="flex justify-end">
        <SubmitButton
          type="submit"
          isSubmitting={isSubmitting}
          icon={<PlusCircle />}
          label="Add Member"
          className="w-full bg-[#4F7CFF] hover:bg-[#4F7CFF]/90 text-white"
        />
      </div>
    </form>
  );
};

export default AddMemberForm;
