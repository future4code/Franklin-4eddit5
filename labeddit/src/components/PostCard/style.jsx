import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 9px 10px;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-sizing: border-box;
  margin: 0;
`;

export const MessageAuthor = styled.p`
  margin: 0;
  font-family: "IBM Plex Sans";
  font-size: 0.75rem;
  line-height: 16px;
  color: #6f6f6f;
`;

export const MessageContent = styled.p`
  margin: 0;
  padding: 18px 0px;
  font-family: "IBM Plex Sans";
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 23px;
  font-weight: 400;
`;

export const Interaction = styled.div`
  width: 174.33px;
  display: flex;
  justify-content: space-between;
`;

export const VoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6.125rem;
  height: 1.75rem;
  border: 0.796748px solid #ececec;
  border-radius: 28px;
  padding: 4.08px 4.67px;
  box-sizing: border-box;
`;

export const ButtonVote = styled.button`
  border: none;
  padding: 0;
  background: none;
`;

export const ImageVote = styled.img`
  padding: 0 4.73px;
`;

export const VoteText = styled.p`
  margin: 0;
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 9.56098px;
  line-height: 12px;
  color: #6f6f6f;
  align-self: center;
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 4.125rem;
  height: 1.75rem;
  border: 0.796748px solid #ececec;
  border-radius: 28px;
`;

export const ImageComment = styled.img`
  width: 14.93px;
  height: 14px;
  padding: 7.47px 0 6.53px 12.2px;
`;
export const CommentText = styled.p`
  padding: 8px 10.33px 8px 0;
  font-family: "IBM Plex Sans";
  font-weight: 400;
  font-size: 9.56098px;
  line-height: 12px;
  align-self: center;
  color: #6f6f6f;
  margin: 0;
`;
