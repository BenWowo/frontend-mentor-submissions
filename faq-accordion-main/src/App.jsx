import Accordion from "./components/Accordion.jsx";

function App() {
  return (
    <div className="grid place-content-center min-w-[375px] min-h-[100vh]">
      <div className="z-[-1] absolute h-[30vh] w-full bg-[url(/assets/images/background-pattern-desktop.svg)]" />
      <div className="z-[-1] absolute h-[70vh] w-full mt-[30vh] bg-light-pink" />
      <main className="min-w-[80%]">
        <Accordion />
      </main>
    </div>
  );
}

export default App;
