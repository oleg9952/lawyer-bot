import Home from "./Pages/Home/Home"
import Bots from "./Pages/Bots/Bots"
import Admin from "./Pages/Admin/Admin"

export default [
    { path: '/', name: 'Home', Component: Home },
    { path: '/bots', name: 'Bots', Component: Bots },
    { path: '/admin', name: 'Admin', Component: Admin }
]