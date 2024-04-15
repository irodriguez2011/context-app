import "../Styles/App.css";
import Provider from "./Provider";
import Container from "./Container";
import PostsForm from "./PostsForm";

function App() {
  return (
    <Provider>
      <div className="App">
        <PostsForm />
        <Container />
      </div>
    </Provider>
  );
}

export default App;
