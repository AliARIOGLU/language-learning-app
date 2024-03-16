import { cn } from "@/lib/utils";

interface SiderProps {
  className?: string;
}

export const Sidebar = ({ className }: SiderProps) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      sidebar
    </div>
  );
};
