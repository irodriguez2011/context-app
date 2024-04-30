import "../Styles/App.css";
import Provider from "./Provider";
import Container from "./Container";
import PostsForm from "./PostsForm";
import React from "react";

const App: React.FC = () => {
  return (
    <Provider>
      <div className="App">
        <PostsForm />
        <Container />
      </div>
    </Provider>
  );
};

export default App;
