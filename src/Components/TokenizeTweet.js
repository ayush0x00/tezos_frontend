import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const TokenizeTweet = (props) => {
  const [opHash, setHash] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const address = e.target[0].value;
    const tweet = e.target[1].value;

    const res = await props.contract.methods.default(address, tweet).send();
    setHash(res.opHash);
  };

  return (
    <div class="container d-flex-inline">
      <div class="row">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Input placeholder="Adress of owner"></Input>
          </FormGroup>
          <FormGroup>
            <Input placeholder="Tweet data"></Input>
          </FormGroup>
          <FormGroup>
            <Button type="submit" color="primary">
              Tokenize
            </Button>
          </FormGroup>
        </Form>
      </div>
      <div className="container">{opHash}</div>
    </div>
  );
};

export default TokenizeTweet;
