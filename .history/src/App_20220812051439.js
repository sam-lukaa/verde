import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import { Create, Edit, Post } from "./pages";

function App() {
  return (
    <main className=" bg-gray-100">
      {/* header */}
      <nav className="flex justify-between bg-white p-[1rem] top-0 sticky">
        <h3 className="font-[500]">Arbit Blog</h3>
        <div className="flex gap-[] lg:gap-[.8rem]">
          <Link to='/' className='hover:font-[500] cursor-pointer'>
            Posts <sup className="text-green-500 font-bold"> 11</sup>
          </Link>
          <figure>icon</figure>
          <figure>icon</figure>
          <figure>icon</figure>
        </div>
      </nav>

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </main>
  );
}

function Home() {
  // individual post
  const Posts = () => {
    return (
      <Link>
        <article className="w-[] lg:w-[30%] p-[] lg:p-[.8rem] hover:bg-gray-100">
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
    <section className="bg-white my-[] lg:my-[2rem] py-[] lg:py-[2.5rem]">
      {/* posts section */}
      <article className="flex flex-wrap gap-[] lg:gap-[3.5rem] w-[] lg:w-[75%] m-auto">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </article>
    </section>
  );
}

export default App;
