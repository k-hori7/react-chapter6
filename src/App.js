import Header from "./Header";
import "./App.css";
import CardList from "./PostCardList";
import styles from "./Home.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <CardList />
      </div>
    </>
  );
}

export default App;
