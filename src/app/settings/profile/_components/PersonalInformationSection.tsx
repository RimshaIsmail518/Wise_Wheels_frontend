"use client"
import React from "react";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useState } from "react"; 

export default function PersonalInformationSection() {
  const[fname,setfname]=useState("");
  const[lname,setlname]=useState("");
  const[email,setemail]=useState("");
  const[phonenum,setphonenum]=useState("");


const change_fname = (e: React.ChangeEvent<HTMLInputElement>) => {
  setfname(e.target.value);
  console.log("First Name:", e.target.value);
};


const change_lname = (e: React.ChangeEvent<HTMLInputElement>) => {
  setlname(e.target.value);
  console.log("Last Name:", e.target.value);
};


  

 const change_email = (e: React.ChangeEvent<HTMLInputElement>) => {
  setemail(e.target.value);
  console.log("Email Address:", e.target.value);
};


 const change_phonenum = (e: React.ChangeEvent<HTMLInputElement>) => {
  setphonenum(e.target.value);
  console.log("Phone Number:", e.target.value);
};



  return (
    <Card padding="lg">
      <SectionHeader
        title="Personal Information"
        subtitle="Update your personal details here."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input onChange={change_fname}
        label="First Name" type="text" defaultValue="Alex" />

        <Input onChange={change_lname}
         label="Last Name" type="text" defaultValue="Morgan" />
        <Input onChange={change_email}
          label="Email Address"
          type="email"
          defaultValue="alex.morgan@example.com"
        />
        <Input onChange={change_phonenum }
          label="Phone Number"
          type="tel"
          defaultValue="+1 (555) 123-4567"
        />
      </div>
      <div className="mt-6">
        <Textarea 
          label="Bio"
          defaultValue="Car enthusiast and collector. Looking for vintage classics."
          rows={4}
        />
      </div>
    </Card>
  );
}
