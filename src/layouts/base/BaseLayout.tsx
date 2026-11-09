import { Outlet } from "react-router"
import Navbar from "./Navbar"

function BaseLayout() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default BaseLayout
