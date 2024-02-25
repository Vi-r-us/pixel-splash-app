import SearchForm from "./components/SearchForm";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

function App() {
  return (
    <main>
      <Navbar />
      <SearchForm />
      <Gallery />
      <BackToTop />
    </main>
  );
}

const BackToTop = () => (
  <a href="#" className="back-to-top">
    <span className="material-symbols-rounded">arrow_upward</span>
  </a>
);

export default App;
