import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let queryNotQuery;

    if (!categoryName) {
      queryNotQuery = itemsCollection;
    } else {
      queryNotQuery = query(
        itemsCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(queryNotQuery)
      .then((res) => {
        let products = res.docs.map((element) => {
          return {
            ...element.data(),
            id: element.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
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
