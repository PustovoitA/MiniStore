import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "@pages/Home"
import { About } from "@pages/About"
import { Blog } from "@pages/Blog"
import { Contact } from "@pages/Contact"
import { Shop } from "@pages/Shop"
import { ProductPage } from "./pages/ProductPage"
import Cart from "./pages/Cart/Cart"
import { NotFoundPage } from "./pages/404"

const AppRoutes = () => {
    const navigationRoutes = [
        {
            path: "/",
            element: <Navigate to="Home" />
        },
        {
            path: "Home",
            element: <Home/>
        },
        {
            path: "Shop",
            element: <Shop/>
        },
        {
            path: "About",
            element: <About/>
        },
        {
            path: "Blog",
            element: <Blog/>
        },
        {
            path: "Contact",
            element: <Contact/>
        },
        {
            path: "product/:id",
            element: <ProductPage/>
        },
        {
            path: "Cart",
            element: <Cart/>
        },
        {
            path: "*",
            element: <NotFoundPage/>
        }
    ]

    return <Routes>{navigationRoutes.map(route => 
        <Route key={route.path} path={route.path} element={route.element}/>
    )}</Routes>
}

export default AppRoutes