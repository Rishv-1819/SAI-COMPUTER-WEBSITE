import React, { useEffect, useState } from "react";
import "./splashscreen.css";

const SplashScreen = ({ children }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      {loading && (
        <div className="splash">

          <div className="loader">

            <div className="ring ring1"></div>

            <div className="ring ring2"></div>

            <div className="logo">
              SAI
            </div>

          </div>

        </div>
      )}

      {children}

    </>
  );
};

export default SplashScreen;