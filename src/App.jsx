import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from './pages/homepage/Homepage';
import BookList from "./pages/userbook/BookList";

var App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/mybook" element={<BookList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
