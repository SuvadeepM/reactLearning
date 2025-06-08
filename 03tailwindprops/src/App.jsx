import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card
        name="book"
        username="Rabindranath Tagore"
        type="horror"
        src="https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?cs=srgb&dl=assortment-book-bindings-books-1130980.jpg&fm=jpg"
      />
      <Card
        name="movie"
        username="Amitabh Bacchan"
        type="comedy"
        src="https://th.bing.com/th/id/OIP.AAGlLz5a8UVl6A3Hh54gOQHaEK?rs=1&pid=ImgDetMain"
      />

      <h1 className=" bg-green-500 text-white p-10 m-10 rounded-3xl">
        Tailwind test
      </h1>
    </>
  );
}

export default App;
