import { Provider } from "react-redux";
import "./styles/index.css";
import store from "./redux";
import { RestaurantsPageContainer } from "./pages/restaurants-page/container";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Layout } from "./components/layout/component";
import { Route } from "react-router-dom";
import { RestaurantContainer } from "./components/restaurant/container";
import { ReviewsContainer } from "./components/reviews/container";
import { Navigate } from "react-router-dom";
import { MenuContainer } from "./components/menu/container";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<div>MainPage</div>} />
            <Route path="restaurants" element={<RestaurantsPageContainer />}>
              <Route index element={<div>Select Restaurant</div>} />
              <Route path=":restaurantId" element={<RestaurantContainer />}>
                <Route index element={<Navigate to="menu" replace />} />
                <Route path="menu" element={<MenuContainer />} />
                <Route path="reviews" element={<ReviewsContainer />} />
              </Route>
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
