import { Container, Background, Content, AnimationContainer } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const Schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(8, "Mínimo de 8 dígitos"),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              name="name"
              icon={FiUser}
              label="Nome"
              placeholder="Seu Nome"
              error={errors.name?.message}
            />
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              error={errors.password?.message}
            />
            <Input
              register={register}
              name="confirmPassword"
              icon={FiLock}
              label="Confirmação da senha"
              placeholder="Confirme sua senha"
              type="password"
              error={errors.confirmPassword?.message}
            />
            <Button type="submit">Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/login">login.</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
