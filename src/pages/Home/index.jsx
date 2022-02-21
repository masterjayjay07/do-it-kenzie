import { Container, Content } from "./style";
import Button from "../../components/Button";
import { useHistory, Redirect } from "react-router-dom";

const Home = ({ auth }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

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
