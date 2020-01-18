import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./styles.css";
import SearchBar from "./components/SearchBar";
import CarouselComp from "./components/Carousel";
import AppContext from "./Context/AppContext";

const App = () => {
  const [subreddit, setSubredditName] = useState("programmerhumor");
  const [search, setSearch] = useState("programmerhumor");
  const [sort, setSort] = useState("Top");
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.body.style.backgroundColor = "#eaeefa";
    } else {
      document.body.style.backgroundColor = "#000000";
    }
  }, [lightMode]);

  return (
    <div>
      <Container fluid={false}>
        {/* <h1>Sight for sore eyes</h1> */}
        <AppContext.Provider
          value={{
            subreddit,
            setSubredditName,
            search,
            setSearch,
            sort,
            setSort,
            lightMode,
            setLightMode
          }}
        >
          <SearchBar />
          <CarouselComp />
        </AppContext.Provider>
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
