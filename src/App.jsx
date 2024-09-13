import ListingPage from "./pages/ListingPage";
import "./index.css";
import AddListingPage from "./pages/AddListingPage";
import { ListingsProvider } from "./context/ListingsContext";
import { RegionsProvider } from "./context/RegionsContext";

function App() {
  return (
    <div id="app">
      <ListingsProvider>
        <RegionsProvider>
          {/* <ListingPage /> */}
          <AddListingPage />
        </RegionsProvider>
      </ListingsProvider>
    </div>
  );
}

export default App;
