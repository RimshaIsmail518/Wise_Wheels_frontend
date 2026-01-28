import React from "react";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Input from "@/components/Input";
import Select from "@/components/Select";


export default function AddressSection() {
 
 

  return (
    <Card padding="lg">
      <SectionHeader
        title="Address"
        subtitle="Used for shipping and billing."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <Input
            label="Street Address"
            type="text"
            defaultValue="123 Market Street"
          />
        </div>
        <Select
          label="City"
          options={[{ value: "san-francisco", label: "San Francisco" }]}
          defaultValue="san-francisco"
        />
        <Select
          label="State / Province"
          options={[{ value: "california", label: "California" }]}
          defaultValue="california"
        />
        <Input label="Zip Code" type="text" defaultValue="94105" />
        <Select
          label="Country"
          options={[{ value: "united-states", label: "United States" }]}
          defaultValue="united-states"
        />
      </div>
    </Card>
  );
}
