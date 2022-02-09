import * as S from "./Home.style";
import Header from "../../components/Header";
import Card from "../../components/Card";

import books from "../../mocks/books.json";

const Home = () => {
  return (
    <S.Container>
      <Header mode="dark" />
      <S.Content>
        <S.CardsContainer>
          {books.map((books) => (
            <Card key={books.id} book={books} />
          ))}
        </S.CardsContainer>
      </S.Content>
    </S.Container>
  );
};

export default Home;
