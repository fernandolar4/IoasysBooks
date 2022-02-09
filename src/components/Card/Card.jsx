import background from "../../assets/backgrounds/book.jpg";
import * as S from "./Card.style";
const Card = ({
  book: { authors, published, title, pageCount, imageUrl, publisher },
}) => (
  <S.Container>
    <S.ImageContainer>
      <S.Image
        src={imageUrl ? imageUrl : background}
        width={82}
        height={122}
        alt={title}
      />
    </S.ImageContainer>
    <div className="content">
      <S.Title>{title ?? "Livro desconhecido"}</S.Title>
    </div>
  </S.Container>
);

export default Card;
