import { useState, useEffect, Fragment } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import "./App.css";
import { Button } from "./components/Button";
import { Create, Edit, Post } from "./pages";
import { instance } from "./utils/axios";

function App() {
  return (
    <main className=" bg-gray-100">
      {/* header */}
      <nav className="flex justify-between bg-white p-[1rem] top-0 sticky">
        <h3 className="font-[500]">Arbit Blog</h3>
        <div className="flex gap-[] lg:gap-[.8rem]">
          <Link to="/" className="hover:font-[500] cursor-pointer">
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await instance.get("posts");
        console.log(res);

        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, []);

  // individual post
  const Posts = () => {
    return (
      <>
        <Link
          to="/post/123"
          className="w-[] lg:w-[30%] p-[] lg:p-[.8rem] hover:bg-gray-100 rounded-[6px]"
        >
          <h3 className="font-[500] text-[] lg:text-[1.4rem] mb-[.4rem]">
            Eun et est occaecati"
          </h3>
          <p className="text-gray-600 line-clamp-[] lg:line-clamp-4 ">
            fario fui afy iayev aiiyr aiy aiyr aututv aiycviya aiycvkj
            iyviyvaciyv aiydviyvaf uciyvaciyfac aiyaciyfvasci asciyufasciyvac
            aciyvascougsc iyafciyvasc asc6vialyfy iyvacyvi;ycl cviyvscyviyac
            iyfciy asciyf
          </p>
        </Link>
      </>
    );
  };

  let navigate = useNavigate();

  return (
    <section className="bg-white my-[] lg:my-[2rem] py-[] lg:py-[2.5rem]">
      {/* create new post */}
      <section className="flex justify-end">
        <Button
          variant="primary"
          onClick={() => navigate("/create", { replace: true })}
        >
          Create Post
        </Button>
      </section>

      {/* posts section */}
      <article className="flex flex-wrap gap-[1.5rem] lg:gap-[3.5rem] w-[100%] lg:w-[75%] m-auto">
        {posts.map((post, _i) => {
          return (
            <Fragment key={_i}>
              <Link
                to="/post/123"
                className="w-[100%] lg:w-[30%] p-[.4rem] lg:p-[.8rem] hover:bg-gray-100 rounded-[6px]"
              >
                <h3 className="font-[500] text-[] lg:text-[1.4rem] mb-[.3rem]">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-[] lg:line-clamp-4">
                  {post.body}
                </p>
              </Link>
            </Fragment>
          );
        })}
      </article>
    </section>
  );
}

export default App;
