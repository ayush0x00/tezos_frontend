import React, { useState } from "react";
import Display from "./displayTweets";
import {
  Input,
  InputGroupAddon,
  Button,
  InputGroup,
  Form,
  FormGroup,
} from "reactstrap";

const Search = (props) => {
  const [tweets, setTweet] = useState([]);
  let elements = [];

  const handleClick = async (e) => {
    e.preventDefault();
    const address = e.target[0].value;
    const res = await props.storage.tweetMap.get(address);
    console.log(res);
    setTweet(res);
  };
  tweets.forEach((tweet, id) =>
    elements.push(<Display value={tweet} key={id} />)
  );
  return (
    <div class="container d-flex-inline">
      <div class="row">
        <Form onSubmit={(e) => handleClick(e)}>
          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <Button color="primary">Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
      <div class="container">{elements}</div>
    </div>
  );
};

export default Search;
