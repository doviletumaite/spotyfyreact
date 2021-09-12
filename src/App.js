import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import AlbumPage from "./components/pages/AlbumPage"
import ArtistPage from "./components/pages/ArtistPage"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
<Switch>
        <Layout>
         <Route exact path='/' component={Home}/>
         </Layout>
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
