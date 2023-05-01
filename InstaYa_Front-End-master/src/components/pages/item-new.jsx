import ItemForm from "./Item-form";

const ItemNew = () => {
  return(
    <>
      <h2 className="display-5 my-4 ms-5">Nueva orden</h2>
      <ItemForm data={[]}/>
    </>
  );
};

export default ItemNew;
