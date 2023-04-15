import { useRoutes } from 'react-router-dom'

import Home from './pages/Home'
import Services from './pages/Services';
import Productos from './pages/Productos'

export default function Router() {
    return useRoutes([
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'servicios',
        element: <Services/>,
      },
      {
        path: 'productos',
        element: <Productos/>,
      }

    ]);
}