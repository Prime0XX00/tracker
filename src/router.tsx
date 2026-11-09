import { Route, Routes } from "react-router"
import LoginView from "./views/login-view"
import BaseLayout from "./layouts/base/BaseLayout"
import HomeView from "./views/home-view"
import { LANDING_URL, LOGIN_URL } from "./magic/urls"

function AppRouter() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path={LANDING_URL} element={<HomeView />}></Route>
      </Route>
      <Route path={LOGIN_URL} element={<LoginView />}></Route>
    </Routes>
  )
}

export default AppRouter
