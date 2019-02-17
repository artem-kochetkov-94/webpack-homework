import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Loadable from "react-loadable";

import Header from "./components/Header";
import Content from "./components/Content";

import "./components/common.css";

const Loading = () => <div>Loading...</div>;

const Albums = Loadable({
  loader: () => import(/* webpackChunkName: "Albums" */"./pages/albums"),
  loading: Loading
});

const Tags = Loadable({
  loader: () => import(/* webpackChunkName: "Tags" */"./pages/tags"),
  loading: Loading
});

const Add = Loadable({
  loader: () => import(/* webpackChunkName: "Add" */"./pages/add"),
  loading: Loading
});

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Content>
            <Route exact path="/" component={Albums} />
            <Route exact path="/tags" component={Tags} />
            <Route exact path="/add" component={Add} />
          </Content>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
