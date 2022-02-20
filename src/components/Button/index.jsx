import { Container } from "./style";

const Button = ({ children, whiteSchema = false, ...rest }) => {
  return (
    <Container whiteSchema={whiteSchema} {...rest} type="button">
      {children}
    </Container>
  );
};

export default Button;
