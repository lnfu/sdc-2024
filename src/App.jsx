import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BookList from "./pages/userbook/BookList";
var App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="mybook" element={<BookList />} />
            <Route path="joinbook" element={<h1>join-book</h1>} />
            <Route path="login" element={<h1>login</h1>} />
            <Route path="*" element={<h1>Error 404: Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
