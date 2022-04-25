import { FC } from "react";
import Layout from "./components/Layout";
import Admin from "./screens/Admin";
import Login from "./screens/Login";
import AddTeacher from "./screens/Admin/Teacher";
import { PrivateRoute } from "./routes/PrivateRoute";
import UpdateTeacher from "./screens/Admin/UpdateTeacher";
import { CreateCuponCode } from "./screens/Admin/CreateCuponCode";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CreateTeacher } from "./screens/Admin/CreateTeacher";
import { CreateReviews } from "./screens/Admin/CreateReviews";

//
const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute
            exact
            path="/admin"
            component={Admin}
            isAuthenticated={true}
          />
          <PrivateRoute
            exact
            path="/admin/teacher"
            component={AddTeacher}
            isAuthenticated={true}
          />
          {/* update */}
          <PrivateRoute
            exact
            path="/admin/update/teacher/:id"
            component={UpdateTeacher}
            isAuthenticated={true}
          />
          {/* create */}
          <PrivateRoute
            exact
            path="/admin/create/cuponcode"
            component={CreateCuponCode}
            isAuthenticated={true}
          />
          <PrivateRoute
            exact
            path="/admin/create/teacher"
            component={CreateTeacher}
            isAuthenticated={true}
          />
          <PrivateRoute
            exact
            path="/admin/create/reviews"
            component={CreateReviews}
            isAuthenticated={true}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
