import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navication from './Pages/SharedS/Navication'
import AddProduct from "./Pages/AdminPage/AddProduct/AddProduct";
import ManageCart from "./Pages/AdminPage/ManageCart.js/ManageCart";
import Login from "./Pages/AuthPage/Login/Login";
import Registration from "./Pages/AuthPage/Registration/Registration";
import HomePage from './Pages/HomePage/Home/Home';
import PreviewPage from "./Pages/PreviewPage/PreviewPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import Reviews from "./Pages/Review/Reviews";
import Footer from "./Pages/SharedS/Footer/Footer";
import Pay from "./Pages/PayPage.js/Pay";
import ManageProducts from "./Pages/AdminPage/ManageProducts/ManageProducts";
import NoPage from "./Pages/NoPage/NoPage";
import UserReviewsPage from "./Pages/UserReviewsPage/UserReviewsPage";
import { Grid } from "@mui/material";
import './App.css';


function App() {
  return (
    <Router>
      <Navication></Navication>
      <Grid container justifyContent='flex-end'>
        <Grid item mt={2} xs={11} lg={12}>
          <Switch>
            <Route exact path={'/'}><HomePage></HomePage></Route>
            <Route exact path={'/products'}><ProductsPage></ProductsPage></Route>
            <Route path={'/login'}><Login></Login></Route>
            <Route path={'/addproduct'}><AddProduct></AddProduct></Route>
            <Route path={'/registration'}><Registration></Registration></Route>
            <Route path={'/products/:id'}><PreviewPage></PreviewPage></Route>
            <Route path={'/manageproducts'}><ManageProducts></ManageProducts></Route>
            <Route path={'/userreviews'}><UserReviewsPage></UserReviewsPage></Route>
            <Route path={'/managecart'}><ManageCart></ManageCart></Route>
            <Route path={'/reviews'}><Reviews></Reviews></Route>
            <Route path={'/pay'}><Pay></Pay></Route>
            <Route path={'*'}><NoPage></NoPage></Route>
          </Switch>
          <Footer></Footer>
        </Grid>
      </Grid>
    </Router>

  );
}

export default App;
