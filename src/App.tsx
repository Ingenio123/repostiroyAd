import { FC, useEffect, useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import Layout from "./components/Layout";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Admin from "./screens/Admin";
import Login from "./screens/Login";
import AddTeacher from "./screens/Admin/Teacher";
import { PrivateRoute } from "./routes/PrivateRoute";

//
const App: FC = () => {
  return (
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
      </Switch>
    </Layout>
  );
};
export default App;
