import { Container, Background, Content, AnimationContainer } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const Schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(8, "Mínimo de 8 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Nome"
              placeholder="Seu Email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              icon={FiLock}
              label="Senha"
              placeholder="Sua senha ultra secreta"
              error={errors.password?.message}
            />

            <Button type="submit">Enviar</Button>
            <p>
              Não tem uma conta? Faça seu <Link to="/login">cadastro.</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
