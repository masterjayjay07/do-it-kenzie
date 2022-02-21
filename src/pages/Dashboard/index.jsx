import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, InputContainer, TaskContainer } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { toast } from "react-toastify";
import api from "../../services/api";

const Dashboard = ({ auth }) => {
  const [tasks, setTasks] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@doit:token")) || ""
  );
  const { register, handleSubmit } = useForm();

  const loadTasks = () => {
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => {
        const apitasks = response.data.data.map((element) => ({
          ...element,
          createdAt: new Date(element.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setTasks(apitasks);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const onSubmit = ({ task }) => {
    if (!task) {
      return toast.error("Campo vazio");
    }
    api
      .post(
        "/task",
        {
          description: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadTasks());
  };

  const handleCompleted = (id) => {
    const newTasks = tasks.filter((element) => element._id !== id);
    api
      .put(
        `/task/${id}`,
        { completed: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => setTasks(newTasks));
  };

  if (!auth) {
    <Redirect to="/login" />;
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <time>21 de fevereiro de 2022</time>
        <section>
          <Input
            icon={FiEdit2}
            placeholder="Nova Tarefa"
            register={register}
            name="task"
            error=""
          />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TaskContainer>
        {tasks.map((element) => (
          <Card
            key={element._id}
            title={element.description}
            date={element.createdAt}
            onClick={() => handleCompleted(element._id)}
          />
        ))}
      </TaskContainer>
    </Container>
  );
};

export default Dashboard;
