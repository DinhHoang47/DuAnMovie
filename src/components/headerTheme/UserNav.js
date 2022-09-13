import React from "react";

export default function UserNav() {
  return (
    <div className="space-x-5">
      <button className="border rounded border-black px-5 py-2">
        Đăng nhập
      </button>
      <button className="border rounded border-red-500 px-5 py-2">
        Đăng ký
      </button>
    </div>
  );
}
