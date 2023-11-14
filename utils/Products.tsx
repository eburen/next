
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  image: string;
  reviews: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the first product",
    price: 10.99,
    brand: "Brand 1",
    category: "Category 1",
    inStock: true,
    image: "https://dummyimage.com/300x300/000/fff",
    reviews: [],
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the second product",
    price: 19.99,
    brand: "Brand 2",
    category: "Category 2",
    inStock: false,
    image: "https://dummyimage.com/300x300/000/fff",
    reviews: [],
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the third product",
    price: 5.99,
    brand: "Brand 3",
    category: "Category 1",
    inStock: true,
    image: "https://dummyimage.com/300x300/000/fff",
    reviews: [],
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is the fourth product",
    price: 29.99,
    brand: "Brand 2",
    category: "Category 3",
    inStock: true,
    image: "https://dummyimage.com/300x300/000/fff",
    reviews: ['3'],
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is the fifth product",
    price: 15.99,
    brand: "Brand 1",
    category: "Category 2",
    inStock: false,
    image: "https://dummyimage.com/300x300/000/fff",
    reviews: [],
  },
];
