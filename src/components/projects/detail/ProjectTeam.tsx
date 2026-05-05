import type { ProjectMember } from "@/types/project";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import AddMemberModal from "@/components/modals/AddMemberModal";

interface ProjectTeamProps {
  members: ProjectMember[];
}

const ProjectTeam = ({ members }: ProjectTeamProps) => {
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
          </TableBody>
        </Table>
      </div>
      <div className="w-full">
        <Button
          onClick={() => openModal("Add a member", <AddMemberModal />)}
          className="w-full bg-[#4F7CFF] hover:bg-[#4F7CFF]/90 text-white"
        >
          Add Member
          <PlusCircle className="w-3.5 h-3.5 ml-2" />
        </Button>
      </div>
    </>
  );
};

export default ProjectTeam;
