import { Container } from "./style";

const Button = ({ children, whiteSchema = false, ...rest }) => {
  return (
    <Container whiteSchema={whiteSchema} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
