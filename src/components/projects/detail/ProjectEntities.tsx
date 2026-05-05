import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ProjectEntity } from "@/types/project";

interface ProjectEntitiesProps {
  entities: ProjectEntity[];
}

const ProjectEntities = ({ entities }: ProjectEntitiesProps) => {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <div className="bg-gray-900 px-6 py-3 border-b border-gray-900 flex justify-between items-center">
        <h2 className="text-[11px] font-bold uppercase tracking-tight text-gray-300">
          Project Entities
        </h2>
        <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded-md">
          {entities.length} TOTAL
        </span>
      </div>
      <Table>
        <TableHeader className="bg-[#F9FAFF]/50">
          <TableRow className="hover:bg-transparent border-b border-gray-100">
            <TableHead className="h-10 py-0 text-[11px] font-bold uppercase text-gray-500 px-6">
              Name
            </TableHead>
            <TableHead className="h-10 py-0 text-[11px] font-bold uppercase text-gray-500">
              Ccy
            </TableHead>
            <TableHead className="h-10 py-0 text-[11px] font-bold uppercase text-gray-500">
              Duration
            </TableHead>
            <TableHead className="h-10 py-0 text-[11px] font-bold uppercase text-gray-500 text-right pr-6">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entities.map((entity) => (
            <TableRow
              key={entity.id}
              className="group border-b border-gray-50 hover:bg-gray-50/40 transition-colors"
            >
              <TableCell className="py-3 px-6 text-[12px] font-bold text-gray-900">
                {entity.name}
              </TableCell>
              <TableCell className="py-3 text-[12px] font-medium text-gray-600 uppercase">
                {entity.currency} (
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: entity.currency,
                })
                  .format(0)
                  .replace(/[0.00\s]/g, "")}
                )
              </TableCell>
              <TableCell className="py-3 text-[12px] font-medium text-gray-500">
                {new Date(entity.start_date).toLocaleDateString(undefined, {
                  month: "short",
                  year: "numeric",
                })}{" "}
                -{" "}
                {new Date(entity.end_date).toLocaleDateString(undefined, {
                  month: "short",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="py-3 pr-6 text-right">
                <span
                  className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                    entity.is_active
                      ? "text-emerald-600 border-emerald-100 bg-emerald-50/50"
                      : "text-red-600 border-red-100 bg-red-50/50"
                  }`}
                >
                  {entity.is_active ? "Active" : "Inactive"}
                </span>
              </TableCell>
            </TableRow>
          ))}
          {entities.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={4}
                className="h-24 text-center text-[12px] text-gray-400 font-medium"
              >
                No entities found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectEntities;
