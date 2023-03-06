import ItemListContainer from "./Products/ItemListContainer/ItemListContainer.jsx";

const Home = ({ products }) => {
  return (
    <div>
      <ItemListContainer products={products} />
    </div>
  );
};

export default Home;
