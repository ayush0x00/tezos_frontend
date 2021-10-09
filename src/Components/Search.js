import React from "react";
import { Input, InputGroupAddon, Button, InputGroup } from "reactstrap";

const Search = () => {
  return (
    <div class="container d-flex-inline">
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="primary">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Search;
