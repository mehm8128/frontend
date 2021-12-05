import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import LoginPage from "../pages/LoginPage"
import Memorize from "../pages/Memorize"
import NotFound from "../pages/NotFound"
import Edit from "../pages/Edit"

const AuthenticatedRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memorize/:id" element={<Memorize />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default AuthenticatedRoutes
