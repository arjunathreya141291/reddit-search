import React, { useContext, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppContext from "../Context/AppContext";
import Button from "react-bootstrap/Button";
import Toggle from "react-toggle";

const SearchBar = () => {
  const { subreddit, setSubredditName } = useContext(AppContext);
  const { search, setSearch } = useContext(AppContext);
  const { lightMode, setLightMode } = useContext(AppContext);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={9}>
            <InputGroup className="mb-3" size="md">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">r/</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Subreddit Name"
                value={subreddit}
                onChange={e => setSubredditName(e.target.value)}
                aria-label="Subreddit Name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>

          <Col sm={2}>
            <Button variant="success" onClick={() => setSearch(subreddit)}>
              Search
            </Button>
          </Col>

          <Col sm={1}>
            <Toggle
              onChange={() =>
                lightMode ? setLightMode(false) : setLightMode(true)
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
