import { useState } from "react";
import "./App.css";
import { restaurants } from "./api/restaurants";
import RestaurantCard from "./components/restaurant-card";
import { useNavigate, useSearchParams } from "react-router-dom";

function App() {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchChange = (event) => {
    const newSearchText = event.target.value;
    searchParams.set("search", newSearchText);
    setSearchParams(searchParams);

    const filter = newSearchText.toLowerCase();
    setFilteredRestaurants(
      restaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(filter) ||
          restaurant.description.toLowerCase().includes(filter)
      )
    );
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 max-w-[720px] mx-auto py-3">
      <div className="h-11 px-3 py-2 rounded-lg border-2 border-zinc-500 flex-col justify-center flex">
        <input
          value={searchParams.get("search")}
          placeholder="Найти..."
          onChange={searchChange}
          className="text-stone-900 placeholder-stone-400 text-2xl font-light outline-none"
        />
      </div>
      <div className="flex flex-col gap-3">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            description={restaurant.description}
            onClick={() => navigate(`/${restaurant.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
