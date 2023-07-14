import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productFilter = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productFilter : products);
    });

    tarea
      .then((products) => setItems(products))
      .catch((rechazo) => console.log(rechazo));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
