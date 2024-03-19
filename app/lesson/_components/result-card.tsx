import Image from "next/image";

import { cn } from "@/lib/utils";

interface ResultCardProps {
  value: number;
  variant: "points" | "hearts";
}

export const ResultCard = ({ value, variant }: ResultCardProps) => {
  const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";

  return (
    <div
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "bg-orange-500 border-orange-500",
        variant === "hearts" && "bg-rose-500 border-rose-500"
      )}
    >
      <div
        className={cn(
          "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
          variant === "hearts" && "bg-rose-500",
          variant === "points" && "bg-orange-500"
        )}
      >
        {variant === "hearts" ? "Hearts Left" : "Total XP"}
      </div>
      <div
        className={cn(
          "rounded-2xl bg-white flex items-center justify-center p-6 font-bold text-lg",
          variant === "points" && "text-orange-500",
          variant === "hearts" && "text-rose-500"
        )}
      >
        <Image
          src={imageSrc}
          alt="Icon"
          height={28}
          width={28}
          className="mr-1.5"
        />
        {value}
      </div>
    </div>
  );
};
