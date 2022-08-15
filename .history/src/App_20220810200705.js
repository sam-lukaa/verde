import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";

function App() {
  return (
    <>
      <Button variant="primary">New Post</Button>

      {/* card */}
      <section className="my-[3rem] flex flex-col gap-[] lg:gap-[.3rem] w-full">
        {/* card top */}
        <header className="text-center font-[600]">
          Sunt aust the your itut d ut eeef apfiaf aui f afounf auoube diyafb
          fiya fib
        </header>
      </section>
    </>
  );
}

export default App;
