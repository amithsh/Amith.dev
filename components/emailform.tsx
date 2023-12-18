"use client";

import React from "react";
import { Button } from "./ui/button";

function EmailForm() {
  const [result, setResult] = React.useState("");
  const key = process.env.Key || ""
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2ed8697c-e9be-4c79-922d-cd3f096fd63d");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      
      setResult(res.message);
    } else {
      console.log("Error", res);
      const mes = res.message
      if(mes){
        setResult(res.message);
      }
      
    }
  };

  return (
    <div className="flex flex-col  border-2 border-black border-spacing-3 rounded-lg w-64  items-stretch mt-4">
      <div className="p-3 gap-y-2">
        <h1>Get updates and news letter monthly</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-3">
          <input
            type="text"
            name="name"
            className="rounded-lg bg-transparent border-black border-2 placeholder:text-slate-800 placeholder:text-xs place-content-center placeholder:px-2"
            placeholder="name"
          />
          <input
            type="email"
            name="email"
            className="rounded-lg bg-transparent border-black border-2 placeholder:text-slate-800 placeholder:text-xs placeholder:px-2"
            placeholder="email"
          />
          <Button type="submit">Submit</Button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default EmailForm;
