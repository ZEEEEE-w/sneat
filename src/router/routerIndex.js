import Home from '../pages/Home/Home.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'

const router = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
  },
  {
    path:'*',
    name: 'notFound',
    element: <NotFound />,
  }
]

export default router