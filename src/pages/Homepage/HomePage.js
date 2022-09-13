import React, { useEffect, useState } from "react";
import { moviesServ } from "../services/moviesServ";
import ItemMovie from "./ItemMovie";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    moviesServ
      .getListMovies()
      .then((res) => {
        console.log(res);
        setMovies(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderMovies = () => {
    return movies.map((data, index) => {
      return <ItemMovie key={index} data={data} />;
    });
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-10">{renderMovies()}</div>
    </div>
  );
}
