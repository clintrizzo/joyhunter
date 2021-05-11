import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style.css";


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function CardBtn () {
//function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Link to="../../Airsoft">
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : "Airsoft Click here"}
      
    </Button>
    </Link>
  );
}

// render(<LoadingButton />);
// }

export default CardBtn;