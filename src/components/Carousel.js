import React, { useEffect, useState, useContext } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Moment from "react-moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppContext from "../Context/AppContext";
import Paginator from "react-hooks-paginator";

const CarouselComp = () => {
  const [data, setData] = useState([]);
  const { search } = useContext(AppContext);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const pageLimit = 3;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.reddit.com/r/${search}/top/.json`)
      .then(res => {
        setData(res.data.data.children);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
      });
  }, [search]);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  if (load) {
    return (
      <div>
        {error ? (
          error.message
        ) : (
          <CardDeck>
            <Row>
              {currentData.map(item => (
                <Col sm={4} key={item.data.id}>
                  <Card>
                    <Card.Img
                      className="img"
                      variant="top"
                      src={item.data.preview.images[0].resolutions[
                        item.data.preview.images[0].resolutions.length - 1
                      ].url.replace(/&amp;/g, "&")}
                    />

                    <Card.Body>
                      <Card.Title>
                        <a href={"https://reddit.com" + item.data.permalink}>
                          {item.data.title}
                        </a>
                      </Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <Moment unix fromNow>
                          {item.data.created_utc}
                        </Moment>
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardDeck>
        )}
        <Paginator
          totalRecords={data.length}
          pageLimit={pageLimit}
          pageNeighbours={2}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default CarouselComp;
