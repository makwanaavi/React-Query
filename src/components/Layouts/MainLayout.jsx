import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function MainLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainLayout; 