import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./styles.css";
import SearchBar from "./components/SearchBar";
import CarouselComp from "./components/Carousel";
import AppContext from "./Context/AppContext";

const App = () => {
  const [subreddit, setSubredditName] = useState("rarepuppers");
  const [search, setSearch] = useState("rarepuppers");
  const [sort, setSort] = useState("Top");

  return (
    <div>
      <Container fluid={false}>
        <h1>Reddit Search</h1>
        <AppContext.Provider
          value={{
            subreddit,
            setSubredditName,
            search,
            setSearch,
            sort,
            setSort
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
