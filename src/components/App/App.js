import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from '../Register/register';
import Login from '../Login';
import Ads from '../Ads';
import adDetail from '../AdDetail/adDetail';
import CreateAd from '../CreateAd';
import EditAd from '../EditAd';
import { useDispatch } from 'react-redux';
import { fetchAds } from '../../store/actions';
import { FormProvider } from '../Context/FormContext';

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  return (
    <FormProvider>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/editAd/id=:_id" component={EditAd} />
          <Route exact path="/anuncios/:_id" component={adDetail} />
          <Route path="/anuncios" component={Ads} />
          <Route path="/createAd" component={CreateAd} />
          <Route to="/Ads" component={Ads} />
        </Switch>
      </Router >
    </FormProvider>

  );
}

export default App;
