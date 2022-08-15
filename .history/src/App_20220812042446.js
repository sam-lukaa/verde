import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Create } from "./pages";

function App() {
 
  return (
    <main className=" bg-gray-100">
      {/* header */}
      <nav className="flex justify-between bg-white p-[1rem] top-0 sticky">
        <h3 className="font-[500]">Arbit Blog</h3>
        <div className="flex gap-[] lg:gap-[.8rem]">
          <h3>
            Posts <sup className="text-green-500 font-bold"> 11</sup>
          </h3>
          <figure>icon</figure>
          <figure>icon</figure>
          <figure>icon</figure>
        </div>
      </nav>

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
      </Routes>

      new update

      {/* <Button variant="primary">New Post</Button> */}
    </main>
  );
}

function Home() {
  return (
    <section className="my-[4rem] flex flex-wrap gap-[] lg:gap-[3.5rem] w-[] lg:w-[75%] m-auto">
      {/* posts section */}
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </section>
  );
}

export default App;
