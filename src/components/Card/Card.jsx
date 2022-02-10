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
      <S.Authors>{authors.join(", ") ?? "Autores desconhecidos"}</S.Authors>
      <S.Description>{pageCount} páginas</S.Description>
      <S.Description>Editora {publisher}</S.Description>
      <S.Description>Publicado em {published}</S.Description>
    </div>
  </S.Container>
);

export default Card;
