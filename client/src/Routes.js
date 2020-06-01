import Home from "./Pages/Home/Home"
import BotOne from "./Pages/BotOne/BotOne"
import BotTwo from './Pages/BotTwo/BotTwo'
import Admin from "./Pages/Admin/Admin"

export default [
    { path: '/', name: 'Home', Component: Home },
    { path: '/botone', name: 'BotOne', Component: BotOne },
    { path: '/bottwo', name: 'BotTwo', Component: BotTwo },
    { path: '/admin', name: 'Admin', Component: Admin }
]