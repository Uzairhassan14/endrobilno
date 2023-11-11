import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const select = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-white border border-slate-400 rounded-[5px]">
        <SelectValue placeholder="Make" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">Other</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default select;
