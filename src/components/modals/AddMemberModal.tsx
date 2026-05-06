import AddMemberForm from "@/form/AddMemberForm";

import type { MemberFormValues } from "@/zod/add-member.schema";

interface AddMemberModalProps {
  onAddMember: (data: MemberFormValues) => void;
}

const AddMemberModal = ({ onAddMember }: AddMemberModalProps) => {
  return (
    <div className="space-y-6 py-2">
      <AddMemberForm onAddMember={onAddMember} />
    </div>
  );
};

export default AddMemberModal;
