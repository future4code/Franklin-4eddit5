import React from "react";
import Header from "../../components/Header";
import { BASE_URL } from "../../constantes/urls";
import { useProtectedPage } from "../../hooks/useProtectdPage";
import { useRequestData } from "../../hooks/useRequestData";

export const Feed = () => {
 
  useProtectedPage()

  const postes = useRequestData([], `${BASE_URL}/posts`)

  console.log(postes);

  return (
    postes.map( (post) => {
      return (
        <div key={post.id}> 
          <Header LinkName={"Entrar"} />
          <p>{post.body}</p>
          <p>{post.title}</p>
          <p>{post.commentCount}</p>
          <p>{post.createdAt}</p>
          <p>{post.username}</p>
          <p>{post.userId}</p>
          <p>{post.userVote}</p>
          <p>{post.voteSum}</p>
        </div>
      )
    })
  )
};
