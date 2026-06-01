// Dummy data for all API endpoints

export const dummyCategories = [
  { id: 1, name: "Painting" },
  { id: 2, name: "Sculpture" },
  { id: 3, name: "Photography" },
  { id: 4, name: "Digital Art" },
  { id: 5, name: "Ceramics" },
];

export const dummyProducts = [
  {
    _id: "1",
    name: "Abstract Sunset",
    description: "A beautiful abstract painting of a sunset",
    price: 250,
    category: "Painting",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
    stock: 10,
    rating: 4.5,
    reviews: 12,
  },
  {
    _id: "2",
    name: "Marble Bust",
    description: "Classic marble sculpture bust",
    price: 450,
    category: "Sculpture",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=400",
    stock: 5,
    rating: 4.8,
    reviews: 8,
  },
  {
    _id: "3",
    name: "Mountain Landscape",
    description: "Stunning mountain landscape photograph",
    price: 180,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400",
    stock: 15,
    rating: 4.3,
    reviews: 20,
  },
  {
    _id: "4",
    name: "Digital Dreams",
    description: "Modern digital art piece",
    price: 120,
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400",
    stock: 20,
    rating: 4.6,
    reviews: 15,
  },
  {
    _id: "5",
    name: "Handmade Vase",
    description: "Beautiful ceramic vase",
    price: 85,
    category: "Ceramics",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400",
    stock: 8,
    rating: 4.7,
    reviews: 10,
  },
];

export const dummyEvents = [
  {
    _id: "1",
    title: "Art Exhibition 2024",
    description: "Annual art exhibition featuring local artists",
    date: "2024-07-15",
    location: "City Gallery",
    price: 25,
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=400",
  },
  {
    _id: "2",
    title: "Sculpture Workshop",
    description: "Learn sculpting techniques from experts",
    date: "2024-08-20",
    location: "Art Studio",
    price: 50,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
  },
];

export const dummyOrders = [
  {
    _id: "order1",
    products: [
      { productId: "1", quantity: 2, price: 250 },
      { productId: "2", quantity: 1, price: 450 },
    ],
    total: 950,
    status: "Delivered",
    date: "2024-01-15",
  },
  {
    _id: "order2",
    products: [
      { productId: "3", quantity: 1, price: 180 },
    ],
    total: 180,
    status: "Processing",
    date: "2024-02-20",
  },
];

export const dummyCartItems = [
  { productId: "1", quantity: 2 },
  { productId: "4", quantity: 1 },
];

export const dummyProfile = {
  _id: "profile1",
  first_name: "John",
  last_name: "Doe",
  email: "john@example.com",
  phone_number: "+1234567890",
  gender: "Male",
  date_of_birth: "1990-01-01",
};

export const dummyAuthResponse = {
  success: true,
  token: "dummy-jwt-token-12345",
  user: dummyProfile,
};

// Helper functions to simulate API delays
export const simulateDelay = (ms = 500) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Helper to get product by ID
export const getProductById = (id) => 
  dummyProducts.find(p => p._id === id);

// Helper to get event by ID
export const getEventById = (id) => 
  dummyEvents.find(e => e._id === id);
