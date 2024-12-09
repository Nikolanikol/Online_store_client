import AdminPanel from "./pages/AdminPanel"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path : ADMIN_ROUTE,
        component : <AdminPanel/>
    },
    {
        path : BASKET_ROUTE,
        component : <Basket/>
    },
    {
        path : SHOP_ROUTE,
        component : <Shop/>
    },
    {
        path : LOGIN_ROUTE,
        component : <Auth/>
    },
    {
        path : REGISTRATION_ROUTE,
        component : <Auth/>
    },
    {
        path : DEVICE_ROUTE + '/:id',
        component : <DevicePage/>
    },
    
]

export const publickRoutes = [
    {
        path : SHOP_ROUTE,
        component : <Shop/>
    },
    {
        path : LOGIN_ROUTE,
        component : <Auth/>
    },
    {
        path : REGISTRATION_ROUTE,
        component : <Auth/>
    },
    {
        path : DEVICE_ROUTE + '/:id',
        component : <DevicePage/>
    },
  
]