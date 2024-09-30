import { Footer } from "../Ui/Footer"
import Header from "../Ui/Headers"
import { Outlet } from "react-router-dom"
const AppLAyout = ()=>{
    return(
        <>
       <Header/>
        <Outlet/>
       <Footer/>
        </>
    )
    
}
export default AppLAyout