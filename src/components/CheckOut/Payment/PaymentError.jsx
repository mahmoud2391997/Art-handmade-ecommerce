import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';

export default function PaymentError() {
  const navigate = useNavigate();

  const handleReturnToShop = () => {
    navigate('/products');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 p-4">
      <div className="bg-white border border-red-200 shadow-lg rounded-lg p-12 w-full max-w-lg h-auto">
        <Typography variant="h1" color="red-600" className="mb-4 text-center text-3xl">
          Payment Error!
        </Typography>
        <Typography variant="paragraph" color="gray-700" className="mb-6 text-lg text-center">
          Unfortunately, there was an issue with your payment. Please try again.
        </Typography>
        <Button
          onClick={handleReturnToShop}
          color="red"
          size="lg"
          className="mt-4 w-full"
        >
          Return to Shop
        </Button>
      </div>
    </div>
  );
}
