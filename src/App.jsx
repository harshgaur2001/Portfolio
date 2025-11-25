import Contact from "./components/pages/Contact.jsx";
import Home from "./components/pages/Home.jsx";
import Journey from "./components/pages/Journey.jsx";
import Projects from "./components/pages/Project.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Layout from "./components/Layout.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  const myrouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="Journey/" element={<Journey />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myrouter} />
    </>
  );
}

export default App;
