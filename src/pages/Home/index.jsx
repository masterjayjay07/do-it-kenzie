import { Container, Content } from "./style";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
