import { Card } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function ItemMovie({ data }) {
  return (
    <Card
      hoverable
      style={{
        width: "100%",
      }}
      cover={
        <img className="h-80 object-cover" alt="example" src={data.hinhAnh} />
      }
    >
      <Meta
        title={<p className="text-red-500 truncate">{data.tenPhim}</p>}
        description="www.instagram.com"
      />
      <NavLink to={`/detail-movie/${data.maPhim}`}>
        <button className="w-full py-2 text-center bg-yellow-500 text-white mt-5 rounded hover:bg-black transition duration-300">
          Xem Chi Tiet
        </button>
      </NavLink>
    </Card>
  );
}
