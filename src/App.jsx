import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import YourRecipes from './pages/YourRecipes';
import Desserts from './pages/Desserts';
import Login from './pages/Login';
import Cuisines from './pages/Cuisines';
import SearchResults from './pages/SearchResults'; // ✅ NEW
import Snacks from './pages/Snacks';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/create"
          element={
            isAuthenticated ? <Create /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/your-recipes"
          element={
            isAuthenticated ? <YourRecipes /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/desserts"
          element={
            isAuthenticated ? <Desserts /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/cuisines"
          element={
            isAuthenticated ? <Cuisines /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/snacks"
          element={
            isAuthenticated ? <Snacks /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/search"
          element={
            isAuthenticated ? <SearchResults /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
