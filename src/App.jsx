import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/shared/404";
import Home from "./components/pages/Home";
import AddImage from "./components/pages/AddImage";
import Profile from "./components/pages/Profile";
import MyAccount from "./components/pages/MyAccount";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import AppState from "./state/context/AppState";

function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/add-photograph" element={<AddImage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppState>
  );
}

export default App;
