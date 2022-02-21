import { Container } from "./style";
import Button from "../Button";
import { FiCalendar, FiClipboard } from "react-icons/fi";

const Card = ({ title, date, onClick }) => {
  return (
    <Container>
      <span>
        <FiClipboard />
        {title}
      </span>
      <hr />
      <time>
        <FiCalendar />
        {date}
      </time>
      <Button onClick={onClick}>Concluir</Button>
    </Container>
  );
};

export default Card;
