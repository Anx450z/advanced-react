import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NewNote from "./NewNote";

function App() {
  return (
    <Container className="my-4">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/new" element={<NewNote/>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<h1>Page does not exist</h1>} />
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
