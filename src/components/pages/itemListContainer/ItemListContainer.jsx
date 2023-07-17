import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productFilter = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productFilter : products);
      }, 2000);
    });

    tarea
      .then((products) => setItems(products))
      .catch((rechazo) => console.log(rechazo));
  }, [categoryName]);

  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "250px",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default ItemListContainer;
