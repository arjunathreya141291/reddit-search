import React, { useContext, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import AppContext from "../Context/AppContext";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const SearchBar = () => {
  const { subreddit, setSubredditName } = useContext(AppContext);
  const { search, setSearch } = useContext(AppContext);
  const { sort, setSort } = useContext(AppContext);
  console.log("hi", sort);
  return (
    <div>
      <Container>
        <Row>
          <Col sm={10}>
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

          <Col sm={1}>
            <Button variant="success" onClick={() => setSearch(subreddit)}>
              Search
            </Button>
          </Col>

          <Col sm={1}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  eventKey="Hot"
                  // onSelect={e => setSort(e.target.eventKey)}
                >
                  Hot
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  eventKey="New"
                  // onSelect={e => setSort(e.target.eventKey)}
                >
                  New
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  eventKey="Top"
                  //  onSelect={e => setSort(e.target.eventKey)}
                >
                  Top
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  eventKey="Controversial"
                  //  onSelect={e => setSort(e.target.eventKey)}
                >
                  Controversial
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  eventKey="Rising"
                  //  onSelect={e => setSort(e.target.eventKey)}
                >
                  Rising
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
