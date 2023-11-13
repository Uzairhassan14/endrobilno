"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function Checkboxitem({ lable }: { lable: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="rounded-[5px] border border-[#003087]" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {lable}
      </label>
    </div>
  );
}
