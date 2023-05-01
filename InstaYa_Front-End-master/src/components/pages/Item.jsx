import { useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  return <h2>Item #{id}</h2>;
};

export default Item;
