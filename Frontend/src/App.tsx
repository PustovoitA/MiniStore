
import { Header } from "@modules/Header"
import { SubscribeBuner } from "@components/SubscribeBuner"
import {Footer} from "@modules/Footer"
import AppRoutes from "./routes"
import { CartNotification } from "./components/CartNotification"
import { Toast } from "./ui/Toast"

function App() {


  return (<>
    <Header/>
    <CartNotification/>
    <AppRoutes/>
    <SubscribeBuner/>
    <Footer/>

    <Toast />
  </>)
}

export default App
