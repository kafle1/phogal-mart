import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/shared/404";
import Home from "./components/pages/Home";
import AppState from "./state/context/AppState";
import AddImage from "./components/pages/AddImage";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <AppState> */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/add-photograph" element={<AddImage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        {/* </AppState> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
