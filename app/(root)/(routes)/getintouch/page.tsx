import EmailForm from "@/components/emailform";
import { Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center flex-col justify-start mt-20 ">
      <h1 className="p-4 sm:p-7 text-2xl font-semibold sm:text-2xl">
        Contact details
      </h1>
      <div className="flex flex-col px-6 sm:px-11 gap-y-4">
        <div className="flex flex-row items-start gap-x-3">
          <Mail />
          <h2>amithsh726@gmail.com</h2>
        </div>
        <div className="flex flex-row items-start gap-x-3">
          <Phone />
          <h2>+917204804906</h2>
        </div>
        <div className="flex flex-row items-start gap-x-3">
        <MessageCircle />
          <h2>7204804906</h2>
        </div>
      </div>
      <div className="h-6"></div>
      <div className="flex items-center justify-center ">
        <EmailForm />
      </div>
    </div>
  );
};

export default page;
