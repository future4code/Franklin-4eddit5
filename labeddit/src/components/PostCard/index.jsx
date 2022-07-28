import * as S from "./style"

export const PostCard = (props) => {
  return (
    <S.Card>
        <S.MessageAuthor>Enviado por: {props.username}</S.MessageAuthor>
        <S.MessageContent>{props.message}</S.MessageContent>
        <S.Interaction>
          <S.VoteWrapper>
            <S.ButtonVote onClick={props.positiveVote}>
              <S.ImageVote src="/images/positiveVote.png" alt="Voto positivo"/>
            </S.ButtonVote>
            <S.VoteText>{props.vote}</S.VoteText>
            <S.ButtonVote onClick={props.negativeVote}>
              <S.ImageVote src="/images/negativeVote.png" alt="Voto negativo"/>
            </S.ButtonVote>
          </S.VoteWrapper>
          <S.CommentWrapper>
            <S.ImageComment src="/images/Comment.png" alt="Comentarios"/>
            <S.CommentText>{props.comment}</S.CommentText>
          </S.CommentWrapper>
        </S.Interaction>
    </S.Card>
  );
}