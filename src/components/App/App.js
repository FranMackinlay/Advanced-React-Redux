import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from '../Register/register';
import Login from '../Login/login';
import Ads from '../Ads';
import adDetail from '../AdDetail/adDetail';
import CreateAd from '../CreateAd/createAd';
import EditAd from '../EditAd/editAd';
import { useDispatch } from 'react-redux';
import { fetchAds } from '../../store/actions';

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/editAd/id=:_id" component={EditAd} />
        <Route exact path="/anuncios/:_id" component={adDetail} />
        <Route path="/anuncios" component={Ads} />
        <Route path="/createAd" component={CreateAd} />
        <Route to="/register" component={Register} />
      </Switch>
    </Router >

  );
}

export default App;
