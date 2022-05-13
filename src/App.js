import "./categories.styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Login from "./routes/login/login.component";

const Shop = () => <div>Shop page</div>;

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="login" element={<Login />} />
    </Route>
  </Routes>
);

export default App;
