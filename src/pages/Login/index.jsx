import { Container, Background, Content, AnimationContainer } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, Redirect, useHistory } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ auth, setAuth }) => {
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

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/user/login", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@doit:token", JSON.stringify(token));

        setAuth(true);
        toast.success("Login feito com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }
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
              type="password"
            />

            <Button type="submit">Enviar</Button>
            <p>
              Não tem uma conta? Faça seu <Link to="/signup">cadastro.</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
