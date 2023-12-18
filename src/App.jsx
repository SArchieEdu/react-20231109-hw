import { Provider } from "react-redux";
import "./styles/index.css";
import store from "./redux";
import { RestaurantsPageContainer } from "./pages/restaurants-page/container";

function App() {
  return (
    <Provider store={store}>
      <RestaurantsPageContainer />
    </Provider>
  );
}

export default App;
