import * as S from "./Login.style";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <S.Container>
      <Header />
      <Link to="/home">Home </Link>
    </S.Container>
  );
};

export default Login;
