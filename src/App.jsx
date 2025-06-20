import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../src/components/Layouts/MainLayout";
import Home from "../src/pages/Home";
import FetchOld from "../src/pages/FetchOld";
import FetchRQ from "../src/pages/FetchQR"; // fixed import path
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld/>,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
    ],
  },
]);
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}> </RouterProvider>
    </QueryClientProvider>
  );
}
export default App;
