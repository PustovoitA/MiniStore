
import { Header } from "@modules/Header"
import { SubscribeBuner } from "@components/SubscribeBuner"
import {Footer} from "@modules/Footer"
import AppRoutes from "./routes"

function App() {


  return (<>
    <Header/>
    <AppRoutes/>
    <SubscribeBuner/>
    <Footer/>
  </>)
}

export default App
