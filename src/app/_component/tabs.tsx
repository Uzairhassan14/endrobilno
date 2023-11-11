import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const tabs = () => {
  return (
    <Tabs
      defaultValue="account"
      className=" shadow-md m-5 border w-3/4 mx-auto"
    >
      <TabsList className=" h-15 p-0 m-0">
        <TabsTrigger value="account" className="h-15 p-5 m-0 ">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="h-15 p-5 m-0 ">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-5">
        <div className="w-3/4">
          <div className="flex flex-row flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-1/5 bg-white border border-[#B8B8B8] rounded-[5px] h-12">
                <SelectValue placeholder="Make" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">Other</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-1/5 bg-white border border-[#B8B8B8] rounded-[5px] h-12">
                <SelectValue placeholder="Make" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">Other</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="email"
              className="w-1/5 border border-[#B8B8B8] rounded-[5px] h-12"
              placeholder="Varient"
            />
            <Button
              variant="outline"
              className="bg-[#003087] text-white font-light gap-2 w-1/3  rounded-[5px] hover:bg-[#002f87bc] hover:text-white h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add another vehicle
            </Button>
          </div>
          <div className="flex flex-row flex-wrap gap-4 my-3">
            <div className="relative   w-1/6 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block h-12 w-full  border-[#B8B8B8] py-1.5 pl-4  text-gray-900 ring-1 ring-inset ring-[#B8B8B8] placeholder:text-[#444]  sm:text-sm sm:leading-6 focus:outline-none rounded-[5px]"
                placeholder="Price from"
              />

              <div className="absolute inset-y-0 right-[40px] flex items-center">
                <div className="pointer-events-none absolute inset-y flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">€</span>
                </div>
              </div>
            </div>
            <div className="relative  w-1/6 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full h-12  border-[#B8B8B8] py-1.5 pl-4  text-gray-900 ring-1 ring-inset ring-[#B8B8B8] placeholder:text-[#444]  sm:text-sm sm:leading-6 focus:outline-none rounded-[5px]"
                placeholder="Price up to"
              />

              <div className="absolute inset-y-0 right-[40px] flex items-center">
                <div className="pointer-events-none absolute inset-y flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">€</span>
                </div>
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-1/6 bg-white border border-[#B8B8B8] rounded-[5px] h-12">
                <SelectValue placeholder="Year from" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">Other</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-1/6 bg-white border border-[#B8B8B8] rounded-[5px] h-12">
                <SelectValue placeholder="Year up to" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">Other</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-1/5 bg-white border border-[#B8B8B8] rounded-[5px] h-12">
                <SelectValue placeholder="Vehicle Type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-row flex-wrap gap-4 my-3">
            <Select>
              <SelectTrigger className="w-[144px] bg-white border border-[#B8B8B8] rounded-[5px] h-12">
                <SelectValue placeholder="Fuel type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-1/4"></div>
      </TabsContent>
      <TabsContent value="password" className="p-5">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
};

export default tabs;
