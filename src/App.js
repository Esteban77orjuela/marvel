import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";

function App() {
  const marvelApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b383375facc3b5c31bb6404d8c73108b=dacf8a6dc85505ef46321b96644a9102');
  //console.log(marvelApi);
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          
          <Route path="/" exact component={() => <Home />} />
          <Route path="/inicio" exact component={() => <Home />} />
          <Route path="/series" exact component={() => <Series />} />
          <Route path="/comics" exact component={() => <Comics />} />
          
        </Switch>
        <Route component={() => <Error404 />} />
      </Router>
    </div>
  );
}

export default App;