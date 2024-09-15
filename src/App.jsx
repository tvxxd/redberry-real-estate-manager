import ListingPage from "./pages/ListingPage";
import "./index.css";
import { ListingsProvider } from "./context/ListingsContext";
import { RegionsProvider } from "./context/RegionsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddListingPage from "./pages/AddListingPage";
import ListingDetailsPage from "./pages/ListingDetailsPage";
import Header from "./components/Header";
function App() {
  return (
    <div id="app">
      <ListingsProvider>
        <RegionsProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<ListingPage />} />
              <Route path="/add-listing" element={<AddListingPage />} />
              <Route path="/listing/:id" element={<ListingDetailsPage />} />
            </Routes>
          </Router>
        </RegionsProvider>
      </ListingsProvider>
    </div>
  );
}

export default App;
