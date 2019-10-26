import React, { Fragment } from "react";
import Forms from "./Forms";
import Leads from "./Leads";

export default function Dashboard() {
  return (
    <div className="container">
      <Forms />
      <Leads />
    </div>
  );
}
