import "./App.css";
import Header from "./Header";
import "./Header.css";
import CardList from "./PostCardList";
import "./PostCard.css";

function App() {
  return (
    <>
      <Header />
      <div className="home-container">
        <CardList />
      </div>
    </>
  );
}

export default App;
