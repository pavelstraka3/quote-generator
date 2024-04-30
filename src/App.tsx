import "./App.css";
import QuoteCard from "./components/QuoteCard";

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">React App</h1>
        <QuoteCard />
      </div>
    </div>
  );
}

export default App;
