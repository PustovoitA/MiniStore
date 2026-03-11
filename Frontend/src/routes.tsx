import { Route, Routes } from "react-router-dom"
import { Home } from "@pages/Home"
import { About } from "@pages/About"
import { Blog } from "@pages/Blog"
import { Contact } from "@pages/Contact"
import { Shop } from "@pages/Shop"

const AppRoutes = () => {
    const navigationRoutes = [
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
        }
    ]

    return <Routes>{navigationRoutes.map(route => 
        <Route key={route.path} path={route.path} element={route.element}/>
    )}</Routes>
}

export default AppRoutes