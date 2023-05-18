import Login from "../Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../Profile";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
