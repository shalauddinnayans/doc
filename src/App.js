import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Doctors from "./components/Doctors/Doctors";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Appoinment from "./components/Appoinment/Appoinment";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* <PrivateRoute exact path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute> */}
            <PrivateRoute path="/appoinment/:serviceId">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
