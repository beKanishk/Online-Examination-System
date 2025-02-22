import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import User from "./components/User.jsx";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<User />} />
        </Routes>
    </BrowserRouter>
  );
 
}

export default App

