import AddMemberForm from "@/form/AddMemberForm";

interface AddMemberModalProps {
  onAddMember: (data: any) => void;
}

const AddMemberModal = ({ onAddMember }: AddMemberModalProps) => {
  return (
    <div className="space-y-6 py-2">
      <AddMemberForm onAddMember={onAddMember} />
    </div>
  );
};

export default AddMemberModal;
