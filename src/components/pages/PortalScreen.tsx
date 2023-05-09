import { Route, Routes } from "react-router"
import { Home } from "./home/Home"
import Login from "./login/Login"
import Navbar from "../ui/Navbar"

export const PortalScreen = () => {

  const menuItems = [
    {
      text: "Inicio",
      onClick: () => console.log("Clicked Inicio"),
    },
    {
      text: "Cuentas",
      onClick: () => console.log("Clicked Cuentas"),
    },
    {
      text: "Tarjetas",
      onClick: () => console.log("Clicked Tarjetas"),
    },
    {
      text: "Prestamos",
      onClick: () => console.log("Clicked Prestamos"),
    },
  ];

  return (
    <>
    <Navbar menuItems={menuItems} />
    <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Home" element={<Home />} />
        <Route path="Bienvenida" element={<Login />} />
    </Routes>
    </div>

    </>
  )
}
