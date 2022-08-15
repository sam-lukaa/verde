import {Routes, Route} from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";
import {Create} from './pages';

function App() {
  const Posts = () => {
    return (
      <>
        <article className="w-[] lg:w-[30%]">
          <h3 className="font-[500] text-[] lg:text-[1.4rem]">
            Eun et est occaecati"
          </h3>
          <p className="text-gray-600 line-clamp-[] lg:line-clamp-4 ">
            fario fui afy iayev aiiyr aiy aiyr aututv aiycviya aiycvkj
            iyviyvaciyv aiydviyvaf uciyvaciyfac aiyaciyfvasci asciyufasciyvac
            aciyvascougsc iyafciyvasc asc6vialyfy iyvacyvi;ycl cviyvscyviyac
            iyfciy asciyf
          </p>
        </article>
      </>
    );
  };
  return (
    <main className=" bg-gray-100">
      {/* header */}
      <nav className="flex justify-between bg-white p-[1rem] top-0 sticky">
        <h3 className="font-[500]">Arbit Blog</h3>
        <div className="flex gap-[] lg:gap-[.8rem]">
          <h3>
            Posts<sup className="text-green-500 font-bold">11</sup>
          </h3>
          <figure>icon</figure>
          <figure>icon</figure>
          <figure>icon</figure>
        </div>
      </nav>

      {/* routes */}
      <Routes>
        <Route path="/" />
        <Route path="create" element={<Create />} />
      </Routes>

      {/* <Button variant="primary">New Post</Button> */}

      

      {/* posts section */}
      <section className="my-[4rem] flex flex-wrap gap-[] lg:gap-[3.5rem] w-[] lg:w-[75%] m-auto">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </section>
    </main>
  );
}

function Home 

export default App;
