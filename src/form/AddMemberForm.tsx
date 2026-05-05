import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";

const AddMemberForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field>
          <FieldLabel
            htmlFor="input-field-name"
            className="text-[11px] uppercase tracking-wide font-bold text-gray-500"
          >
            Full Name
          </FieldLabel>
          <Input
            id="input-field-name"
            type="text"
            placeholder="e.g. John Doe"
            className="mt-1.5 h-10 border-gray-100 shadow-none focus:ring-[#4F7CFF]/20"
          />
        </Field>
        <Field>
          <FieldLabel
            htmlFor="input-field-email"
            className="text-[11px] uppercase tracking-wide font-bold text-gray-500"
          >
            Email Address
          </FieldLabel>
          <Input
            id="input-field-email"
            type="email"
            placeholder="john@company.com"
            className="mt-1.5 h-10 border-gray-100 shadow-none focus:ring-[#4F7CFF]/20"
          />
        </Field>
      </div>

      <div className="mb-8">
        <FieldLabel className="text-[11px] uppercase tracking-wide font-bold text-gray-500">
          Project Role
        </FieldLabel>
        <Select defaultValue="member">
          <SelectTrigger className="mt-1.5 h-10 border-gray-100 shadow-none focus:ring-[#4F7CFF]/20">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="member">Member</SelectItem>
            <SelectItem value="owner">Owner</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end">
        <Button className="w-full bg-[#4F7CFF] hover:bg-[#4F7CFF]/90 text-white">
          Add Member
          <PlusCircle />
        </Button>
      </div>
    </>
  );
};

export default AddMemberForm;
