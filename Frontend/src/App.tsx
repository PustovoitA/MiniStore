
import { Header } from "@modules/Header"
import { SubscribeBuner } from "@components/SubscribeBuner"
import {Footer} from "@modules/Footer"
import AppRoutes from "./routes"
import { CartNotification } from "./components/CartNotification"

function App() {


  return (<>
    <Header/>
    <CartNotification/>
    <AppRoutes/>
    <SubscribeBuner/>
    <Footer/>
  </>)
}

export default App
