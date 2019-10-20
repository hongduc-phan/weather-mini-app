import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import MultipleItems from "../../components/MultipleItems";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Container>
        <MultipleItems />
      </Container>
    </div>
  );
};

export default App;
