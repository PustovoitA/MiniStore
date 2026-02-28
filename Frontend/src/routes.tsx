import { Route, Routes } from "react-router-dom"
import { Home } from "@pages/Home"

const AppRoutes = () => {
    const navigationRoutes = [
        {
            path: "/",
            element: <Home/>
        }
    ]

    return <Routes>{navigationRoutes.map(route => 
        <Route key={route.path} path={route.path} element={route.element}/>
    )}</Routes>
}

export default AppRoutes