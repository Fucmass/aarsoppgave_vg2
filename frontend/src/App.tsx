import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TextPage from './pages/textPage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <TextPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App