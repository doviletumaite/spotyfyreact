import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import AlbumPage from "./components/AlbumPage"
import ArtistPage from "./components/ArtistPage"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
<Switch>
    <Route
            path="/"
            exact
            render={(routerProps) => (
              <Layout>
                <Home {...routerProps} subTitle="HomePage" />
              </Layout>
            )}/>

<Route
            path="/album"
            exact
            render={(routerProps) => (
              <Layout>
                <AlbumPage {...routerProps} subTitle="AlbumPage" />
              </Layout>
            )}/>
               <Route
            path="/artist"
            exact
            render={(routerProps) => (
              <Layout>
                <ArtistPage {...routerProps} subTitle="ArtistPage" />
              </Layout>
            )}/>

</Switch>
</div>

</Router>
  );
}

export default App;
