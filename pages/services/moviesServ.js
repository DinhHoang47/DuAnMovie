import axios from "axios";
import { BASE_URL, CYBER_TOKEN } from "./configURL";

export const moviesServ = {
  getListMovies: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
      headers: {
        TokenCybersoft: CYBER_TOKEN,
      },
    });
  },
};
