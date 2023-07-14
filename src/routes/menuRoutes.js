import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer"
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer"
import CartContainer from "../components/pages/cart/CartContainer"
import FormContainer from "../components/pages/form/FormContainer"

export const menuRoutes = [
    {
        id: "home", 
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "category", 
        path: "/category/:categoryName",
        Element: ItemListContainer,
    },
    {
        id: "itemDetail", 
        path: "/itemDetail/:id",
        Element: ProductDetailContainer,
    },
    {
        id: "cart", 
        path: "/cart",
        Element: CartContainer,
    },
    {
        id: "form", 
        path: "/form",
        Element: FormContainer,
    },
]