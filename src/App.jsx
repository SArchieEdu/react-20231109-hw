import { restaurants } from "./constants/mock";
import { RestaurantsPage } from "./pages/restaurants-page/component";
import "./styles/index.css";

function App() {
  return <RestaurantsPage restaurants={restaurants} />;
}

export default App;
