import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';

export default function PaymentError() {
  const navigate = useNavigate();

  const handleReturnToShop = () => {
    navigate('/products');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white border border-red-200 shadow-lg p-12 w-full max-w-lg h-auto">
        <Typography variant="h1" color="red" className="mb-4 text-center text-4xl font-eb-garamond">
          Payment Error!
        </Typography>
        <Typography variant="paragraph" color="gray" className="mb-6 text-xl text-center font-eb-garamond">
          Unfortunately, there was an issue with your payment. Please try again.
        </Typography>
        <Button
          onClick={handleReturnToShop}
          color="red"
          size="lg"
          className="mt-4 w-full font-eb-garamond text-lg"
        >
          Return to Shop
        </Button>
      </div>
    </div>
  );
}
