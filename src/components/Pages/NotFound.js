import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return <div>404</div>;
};

export default NotFound;
