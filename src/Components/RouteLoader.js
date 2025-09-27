import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Assests/CSS/Main.css"; //  CSS file

function RouteLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // start loader
    const timer = setTimeout(() => {
      setLoading(false); // stop loader after delay
    }, 700); // duration of loading animation
    return () => clearTimeout(timer);
  }, [location]);

  if (!loading) return null;

  return (
    <div className="route-loader">
      <div className="spinner"></div>
    </div>
  );
}

export default RouteLoader;
