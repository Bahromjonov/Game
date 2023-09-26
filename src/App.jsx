import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainRouter from './layouts/MainRouter'
import Animals from './pages/Animals'
import Home from './pages/Home'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRouter />}>
        <Route index element={<Home />} />
        <Route path='animals' element={<Animals/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
