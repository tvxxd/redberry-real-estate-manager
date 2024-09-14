import ListingPage from "./pages/ListingPage";
import "./index.css";
import AddListingPage from "./pages/AddListingPage";
import { ListingsProvider } from "./context/ListingsContext";
import { RegionsProvider } from "./context/RegionsContext";
import ListingDetailsPage from "./pages/ListingDetailsPage";

function App() {
  return (
    <div id="app">
      <ListingsProvider>
        <RegionsProvider>
          {/* <ListingPage /> */}
          {/* <AddListingPage /> */}
          <ListingDetailsPage />
        </RegionsProvider>
      </ListingsProvider>
    </div>
  );
}

export default App;
