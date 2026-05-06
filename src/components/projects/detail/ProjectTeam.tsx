import type { ProjectMember } from "@/types/project";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import AddMemberModal from "@/components/modals/AddMemberModal";

interface ProjectTeamProps {
  members: ProjectMember[];
  onAddMember: (data: any) => void;
}

const ProjectTeam = ({ members, onAddMember }: ProjectTeamProps) => {
  const { openModal } = useModal();

  return (
    <>
      <div className="border border-gray-100 rounded-xl overflow-hidden mb-4">
        <div className="bg-gray-900 px-6 py-3 border-b border-gray-900 flex justify-between items-center">
          <h2 className="text-[11px] font-bold uppercase tracking-tight text-gray-300">
            Project Team
          </h2>
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-white/10 text-white">
            {members.length}
          </div>
        </div>
        <Table>
          <TableHeader className="bg-[#F9FAFF]/50">
            <TableRow className="hover:bg-transparent border-b border-gray-100">
              <TableHead className="h-10 py-0 text-[11px] font-bold uppercase text-gray-500 px-6">
                Member
              </TableHead>
              <TableHead className="h-10 py-0 text-[11px] font-bold uppercase text-gray-500 text-right pr-6">
                Role
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow
                key={member.user_id}
                className="group border-b border-gray-50 hover:bg-gray-50/40 transition-colors"
              >
                <TableCell className="py-3 px-6">
                  <div className="text-[12px] font-bold text-gray-800">
                    {member.name}
                  </div>
                </TableCell>
                <TableCell className="py-3 pr-6 text-right">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-tight ${
                      member.role === "OWNER"
                        ? "text-[#4F7CFF]"
                        : "text-gray-400"
                    }`}
                  >
                    {member.role}
                  </span>
                </TableCell>
              </TableRow>
            ))}
            {members.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={2}
                  className="h-24 text-center text-[12px] text-gray-400 font-medium"
                >
                  No members assigned
                </TableCell>
              </TableRow>
            )}
            <TableRow
              onClick={() =>
                openModal(
                  "Add a member",
                  <AddMemberModal onAddMember={onAddMember} />,
                )
              }
              className="cursor-pointer group hover:bg-blue-50/50 transition-colors"
            >
              <TableCell colSpan={2} className="py-4 px-6">
                <div className="flex items-center justify-center gap-2 py-3 border-2 border-dashed border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.03] rounded-xl text-[11px] font-bold uppercase tracking-widest text-[#4F7CFF] group-hover:border-[#4F7CFF]/40 group-hover:bg-[#4F7CFF]/[0.06] transition-all">
                  <PlusCircle className="w-4 h-4" />
                  Add New Team Member
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ProjectTeam;
