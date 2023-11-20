import { restaurants } from "./constants/mock";
import { RestaurantsPage } from "./pages/restaurants-page/component";

function App() {
  return (
    <div>
      <RestaurantsPage restaurants={restaurants} />
    </div>
  );
}

export default App;
