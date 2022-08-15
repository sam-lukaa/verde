import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";

function App() {
  return (
    <>
      <Button variant="primary">New Post</Button>

      {/* card */}
      <section className="my-[3rem] flex flex-col gap-[] lg:gap-[2rem] w-[60%] m-auto">
        {/* card top */}
        <header className="font-[600] bg-gray-300 p-[] lg:py-[1rem] lg:px-[4rem] text-[] lg:text-[1.4rem] rounded-[6px] shadow-md">
          Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube diyafb
          fiya fib Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube
          diyafb fiya fib
        </header>

        <article className="bg-gray-300 p-[] lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 rounded-[6px] shadow-md">
          Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube diyafb
          fiya fib Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube
          diyafb fiya fib
        </article>
      </section>

      <section className="my-[4rem]">
        <article></article>
      </section>
    </>
  );
}

export default App;
