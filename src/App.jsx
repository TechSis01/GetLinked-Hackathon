// COMPONENT
import Landing from "./assets/Sections/Landing";
import Registration from "./assets/Authentication/Registration";
import Contact from "./assets/Authentication/Contact";
// ROUTING FUNCTIONS
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  //Routes
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route>
         <Route index element={<Landing />} />
         <Route path="/registration" element={<Registration />} />
         <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )
  return (
  
    <RouterProvider router={router}/>
    
  );
}

export default App;
