import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navication from './Pages/SharedS/Navication'
import Login from "./Pages/AuthPage/Login/Login";
import Registration from "./Pages/AuthPage/Registration/Registration";
import HomePage from './Pages/HomePage/Home/Home';
import PreviewPage from "./Pages/PreviewPage/PreviewPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import Reviews from "./Pages/Review/Reviews";
import Footer from "./Pages/SharedS/Footer/Footer";
import Pay from "./Pages/PayPage.js/Pay";
import NoPage from "./Pages/NoPage/NoPage";
import UserReviewsPage from "./Pages/UserReviewsPage/UserReviewsPage";
import { Grid } from "@mui/material";
import './App.css';
import PrivateRoute from "./Pages/SharedS/PrivateRoute";
import AuthProvider from "./Utilitis/AuthProvider/AuthProvider";
import Dashbord from "./Pages/SharedS/DashbordPage/Dashbord";



function App() {

  return (
    <AuthProvider>
      <Router>
        <Navication></Navication>
        <Grid container justifyContent='flex-end'>
          <Grid item mt={2} xs={11} lg={12}>
            <Switch>
              <Route exact path={'/'}><HomePage></HomePage></Route>
              <Route exact path={'/products'}><ProductsPage></ProductsPage></Route>
              <Route path={'/login'}><Login></Login></Route>
              <Route path={'/registration'}><Registration></Registration></Route>
              <PrivateRoute path={'/products/:id'}><PreviewPage></PreviewPage></PrivateRoute>
              <PrivateRoute path={'/dashbord'}><Dashbord></Dashbord></PrivateRoute>
              <PrivateRoute path={'/userreviews'}><UserReviewsPage></UserReviewsPage></PrivateRoute>
              <PrivateRoute path={'/reviews'}><Reviews></Reviews></PrivateRoute>
              <PrivateRoute path={'/pay/:id'}><Pay></Pay></PrivateRoute>
              <Route path={'*'}><NoPage></NoPage></Route>
            </Switch>
            <Footer></Footer>
          </Grid>
        </Grid>
      </Router>
    </AuthProvider>
  );
}

export default App;
