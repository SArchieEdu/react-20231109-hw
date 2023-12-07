import { Provider } from "react-redux";
import { RestaurantsPage } from "./pages/restaurants-page/component";
import "./styles/index.css";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <RestaurantsPage />
    </Provider>
  );
}

export default App;
