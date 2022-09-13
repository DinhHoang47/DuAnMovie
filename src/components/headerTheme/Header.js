import React from "react";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="h-20 flex justify-between items-center bg-white">
        <span className="text-yellow-500 text-2xl font-medium animate-bounce">
          PreFlix
        </span>
        <UserNav />
      </div>
    </div>
  );
}
