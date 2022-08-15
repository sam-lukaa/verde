import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";

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
    <>
      <Button variant="primary">New Post</Button>

      {/* card */}
      <>
        <section className="my-[3rem] flex flex-col gap-[] lg:gap-[2rem] w-[75%] m-auto">
          {/* nav */}
          <nav className="flex justify-between">
            <h3 className='font-[500]'>Arbit Blog</h3>
            <div>
              </div>v></div>
          </nav>

          {/* card */}
          <header className="font-[600] bg-gray-300 p-[] lg:py-[1rem] lg:px-[4rem] text-[] lg:text-[1.4rem] rounded-[6px] shadow-md">
            Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube diyafb
            fiya fib Sunt aust the your itut d ut eeef apfiaf aui f afounf
            auoube diyafb fiya fib
          </header>

          <textarea className="bg-gray-300 p-[] lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 rounded-[6px] shadow-md">
            Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube diyafb
            fiya fib Sunt aust the your itut d ut eeef apfiaf aui f afounf
            auoube diyafb fiya fib
          </textarea>

          {/* buttons */}
          <div className="flex gap-[] lg:gap-[1.5rem] justify-end">
            <Button variant="danger">Delete</Button>
            <Button variant="primary">Update</Button>
          </div>
        </section>
      </>

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
    </>
  );
}

export default App;
