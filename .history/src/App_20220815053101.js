import { useState, useEffect, Fragment } from "react";
import { toast } from "react-toastify";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { Button } from "./components/Button";
import { Create, Edit, Post } from "./pages";

import { GetPosts } from "./services";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { posts } = useSelector((state) => state.post);
  const len = posts.length;

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
            Posts{" "}
            <sup className="bg-green-100 text-green-500 font-bold p-[.2rem] rounded-full">
              {len}
            </sup>
          </NavLink>
          <NavLink to="/">
            <i className="fa fa-bell" aria-hidden="true"></i>
          </NavLink>
          <NavLink to="/">
            <i className="fa fa-th-large" aria-hidden="true"></i>
          </NavLink>
          <NavLink to="/">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          </NavLink>
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
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  const { loading } = useSelector((state) => state.post);

  // fetch posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await dispatch(GetPosts());
        setPosts(res.payload);
      } catch (err) {
        toast.error(err);
      }
    }

    fetchPosts();
  }, [dispatch]);

  let navigate = useNavigate();

  return (
    <section className="bg-white my-[] lg:my-[2rem] py-[.4rem] lg:py-[2.5rem]">
      {/* check loading state */}
      {loading ? (
        "Loading"
      ) : (
        <>
          {/* create new post */}
          <section className="flex justify-end px-[1rem] lg:px-[1rem]">
            <Button
              variant="primary"
              onClick={() => {
                navigate("/create", { replace: true });
              }}
              >
                <span><i class="fa fa-plus mr-[.4rem]" aria-hidden="true"></i></span>
              Create Post
            </Button>
          </section>

          {/* posts section */}
          <article className="flex flex-wrap gap-[1.5rem] lg:gap-[3.5rem] w-[100%] lg:w-[8%] mt-[1rem] lg:m-auto">
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
                    <p className="text-gray-600 line-clamp-[2] lg:line-clamp-4">
                      {post.body}
                    </p>
                  </Link>
                </Fragment>
              );
            })}
          </article>
        </>
      )}
    </section>
  );
}

export default App;
