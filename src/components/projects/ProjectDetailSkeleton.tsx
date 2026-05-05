import { Skeleton } from "@/components/ui/skeleton";

const ProjectDetailSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="mb-10">
        <Skeleton className="h-6 w-32 rounded-lg" />
      </div>

      <div className="space-y-12">
        <div className="flex justify-between items-start">
          <div className="space-y-3">
            <Skeleton className="h-8 w-64 rounded-md" />
            <Skeleton className="h-4 w-96 rounded-md" />
          </div>
          <div className="flex gap-4 items-center">
            <Skeleton className="h-4 w-24 hidden md:block" />
            <Skeleton className="h-6 w-20 rounded-md" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-100 rounded-xl divide-x divide-gray-50 overflow-hidden h-[84px]">
          <div className="px-6 py-4 flex flex-col justify-center gap-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-5 w-32" />
          </div>
          <div className="px-6 py-4 flex flex-col justify-center gap-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-5 w-32" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 lg:col-span-8 space-y-4">
            <Skeleton className="h-[400px] w-full rounded-xl" />
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <Skeleton className="h-[400px] w-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailSkeleton;
