import React from "react";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

export default function PersonalInformationSection() {
  return (
    <Card padding="lg">
      <SectionHeader
        title="Personal Information"
        subtitle="Update your personal details here."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input label="First Name" type="text" defaultValue="Alex" />
        <Input label="Last Name" type="text" defaultValue="Morgan" />
        <Input
          label="Email Address"
          type="email"
          defaultValue="alex.morgan@example.com"
        />
        <Input
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
