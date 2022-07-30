import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro";
import { Feed } from "../pages/Feed";
import { Login } from "../pages/Login";
import { Posts } from "../pages/Posts";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="cadastro/" element={<Cadastro />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="posts/" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
