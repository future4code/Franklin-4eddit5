import * as S from "./style"

export const PostCard = () => {
  return (
    <S.Card>
        <S.MessageAuthor>Enviado por: labaluno83</S.MessageAuthor>
        <S.MessageContent>
            Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?
        </S.MessageContent>
        <S.Interaction>
          <S.VoteWrapper>
            <S.ButtonVote>
              <S.ImageVote src="/images/positiveVote.png" alt="Voto positivo"/>
            </S.ButtonVote>
            <S.VoteText>1.2k</S.VoteText>
            <S.ButtonVote>
              <S.ImageVote src="/images/negativeVote.png" alt="Voto negativo"/>
            </S.ButtonVote>
          </S.VoteWrapper>
          <S.CommentWrapper>
            <S.ImageComment src="/images/Comment.png" alt="Comentarios"/>
            <S.CommentText>132</S.CommentText>
          </S.CommentWrapper>
        </S.Interaction>
    </S.Card>
  );
}