import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';

export default function PaymentSuccess() {
const navigate = useNavigate();

const handleReturnToShop = () => {
navigate('/products');
};

return (
<div className="flex items-center justify-center min-h-screen bg-green-50 p-4">
    <div className="bg-white border border-green-200 shadow-lg rounded-lg p-12 w-full max-w-lg h-auto">
    <Typography variant="h1" color="green-600" className="mb-4 text-center text-3xl">
        Payment Succeeded!
    </Typography>
    <Typography variant="paragraph" color="gray-700" className="mb-6 text-lg text-center">
        Thank you for your purchase. Your payment was successful.
    </Typography>
    <Button
        onClick={handleReturnToShop}
        color="green"
        size="lg"
        className="mt-4 w-full"
    >
        Return to Shop
    </Button>
    </div>
</div>
);
}
