import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro";
import { Feed } from "../pages/Feed";
import { Login } from "../pages/Login";
import { Post } from "../pages/Post";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="cadastro/" element={<Cadastro />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
