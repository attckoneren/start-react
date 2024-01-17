import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  const router = createBrowserRouter(
    [
      {
        path: `/`,
        element: (
          <>
            <ScrollToTop />
            <Home />
          </>
        ),
      },
      {
        path: "/movie/:id",
        element: (
          <>
            <ScrollToTop />
            <Detail />
          </>
        ),
      },
    ],
    {
      basename: process.env.PUBLIC_URL,
    }
  );
  return <RouterProvider router={router} />;
}

export default App;
