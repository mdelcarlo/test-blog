import "./App.css";
import { Container } from "@material-ui/core";
import AddPost from "./containers/AddPost";
import PostListContainer from "./containers/PostListContainer";
import PostContainer from "./containers/PostContainer";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { css } from "@emotion/react";

const page__title = css`
  font-size: 8em;
  font-weight: bold;
  color: #1f1c4f;
`;

function App() {
  return (
    <Container maxWidth="md">
      <Container maxWidth="md">
        <h1 css={page__title}>A JS developer's Blog</h1>
      </Container>
      <Navigation />
      <Route exact path="/" component={PostListContainer} />
      <Route exact path="/posts/:id" component={PostContainer} />
      <Route exact path="/new-post" component={AddPost} />
    </Container>
  );
}

export default App;
