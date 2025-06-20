import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../src/components/Layouts/MainLayout"
import Home from "../src/pages/Home"
import FetchOld from "../src/pages/FetchOld"
import FetchRQ from "../src/pages/FetchRQ"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // changed from string to JSX
    children: [
      {
        path: "/",
        element: <Home /> // changed from string to JSX
      },
      {
        path: "/trad",
        element: <FetchOld /> // changed from string to JSX
      },
      {
        path: "/rq",
        element: <FetchRQ /> // changed from string to JSX
      },
    ]
  }
])
function App() {
  return <RouterProvider router={router}> </RouterProvider>
}
export default App
