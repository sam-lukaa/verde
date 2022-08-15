import { useState, useEffect, Fragment } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import "./App.css";
import { Button } from "./components/Button";
import { Create, Edit, Post } from "./pages";
import { instance } from "./utils/axios";
import {GetPosts} from './services';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const NavLink = ({ to, children }) => {
    return (
      <>
        <Link
          to={`${to}`}
          className=" hover:bg-gray-200 hover:transition hover:ease-in hover:duration-[.3s] p-[.4rem] rounded-[6px] cursor-pointer"
        >
          {children}
        </Link>
      </>
    );
  };

  const navigate = useNavigate();

  return (
    <main className=" bg-gray-100">
      {/* header */}
      <nav className="flex justify-between items-center bg-white p-[1rem] top-0 sticky">
        <h3
          className="font-[500] hover:bg-gray-200 hover:transition hover:ease-in hover:duration-[.3s] p-[.4rem] rounded-[6px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Arbit Blog
        </h3>
        <div className="flex gap-[.7rem] lg:gap-[.8rem]">
          <NavLink to="/">
            Posts <sup className="text-green-500 font-bold"> 11</sup>
          </NavLink>
          <NavLink to="/">icon</NavLink>
          <NavLink to="/">icon</NavLink>
          <NavLink to="/">icon</NavLink>
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
  const dispatch = useDispatch();

  // fetch posts
  useEffect(() => 
    const reduxPosts = dispatch(GetPosts);
    console.log(reduxPosts);

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

  let navigate = useNavigate();

  return (
    <section className="bg-white my-[] lg:my-[2rem] py-[.4rem] lg:py-[2.5rem]">
      {/* create new post */}
      <section className="flex justify-end px-[1rem] lg:px-[1rem]">
        <Button
          variant="primary"
          onClick={() => {
            navigate("/create", { replace: true });
          }}
        >
          Create Post
        </Button>
      </section>

      {/* posts section */}
      <article className="flex flex-wrap gap-[1.5rem] lg:gap-[3.5rem] w-[100%] lg:w-[75%] mt-[1rem] lg:m-auto">
        {posts.map((post, _i) => {
          return (
            <Fragment key={_i}>
              <Link
                to={`post/${post.id}`}
                // to="/post/123"
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
