import React from "react";
import Header from "../components/headerTheme/Header";

export default function Layout({ Component }) {
  return (
    <div className="space-y-10">
      <Header />
      <Component />
    </div>
  );
}
