import { Button } from "@repo/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="text-3xl">
      Hello there
      <Button appName="user-app">Click me</Button>
    </div>
  );
};

export default page;
