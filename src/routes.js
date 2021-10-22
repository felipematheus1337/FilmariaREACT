import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/header';
import Filme from './Pages/Filme';
import Favoritos from './Pages/favoritos';
import NotFound from './Pages/notfound';

const Routes = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                 <Route exact path="/filme/:id" component={Filme}/>
                 <Route exact path="/favoritos" component={Favoritos}/>
                 <Route path="*" component={NotFound}/>

            </Switch>


        </BrowserRouter>
    )
}


export default Routes;