import { filterProducts, type CatalogFilters } from '../../services/catalog';
import { createHeader } from '../../components/Header/Header';
import styles from './ShopPage.module.scss';
import { createProductCard, type Product } from '../../components/ProductCard/ProductCard';
import { createStoreBenefits } from '../../components/StoreBenefits/StoreBenefits';
import { createFooter } from '../../components/Footer/Footer';

const categoryGroups = [
  {
    name: 'Men',
    items: [
      'T-Shirts',
      'Casual Shirts',
      'Formal Shirts',
      'Jackets',
      'Blazers & Coats',
      'Jeans',
      'Sherwanis',
    ],
  },
  {
    name: 'Women',
    items: ['Jeans', 'Sarees', 'Ethnic Wear', 'Lehenga Cholis', 'Jackets', 'Dresses', 'Jumpsuits'],
  },
  {
    name: 'Kids',
    items: [
      'T-Shirts',
      'Shirts',
      'Jeans',
      'Trousers',
      'Party Wear',
      'Innerwear & Thermal',
      'Track Pants',
      'Value Pack',
    ],
  },
];

const products: Product[] = [
  {
    id: 'products-1',
    category: 't-shirts',
    image: '/images/products/product-1.png',
    brand: 'Roadstar',
    name: 'Printed Cotton T-Shirt',
    price: '$38.00',
    oldPrice: '$40.00',
  },
  {
    id: 'products-2',
    category: 't-shirts',
    image: '/images/products/t2.png',
    brand: 'Zara',
    name: 'Classic White T-Shirt',
    price: '$30.00',
    oldPrice: '$40.00',
  },
  {
    id: 'products-3',
    category: 't-shirts',
    image: '/images/products/t3.png',
    brand: 'Zara',
    name: 'Cotton Regular Fit T-Shirt',
    price: '$20.00',
    oldPrice: '$30.00',
  },
  {
    id: 'products-4',
    category: 't-shirts',
    image: '/images/products/t4.png',
    brand: 'H&M',
    name: 'Oversized Basic T-Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    id: 'products-5',
    category: 't-shirts',
    image: '/images/products/t5.png',
    brand: 'KFK',
    name: 'Printed Graphic T-Shirt',
    price: '$28.00',
    oldPrice: '$38.00',
  },
  {
    id: 'products-6',
    category: 't-shirts',
    image: '/images/products/t6.png',
    brand: 'Polo',
    name: 'Classic Cotton Polo T-Shirt',
    price: '$25.00',
    oldPrice: '$35.00',
  },
  {
    id: 'products-7',
    category: 't-shirts',
    image: '/images/products/t7.png',
    brand: 'Zara',
    name: 'Slim Fit Basic T-Shirt',
    price: '$32.00',
    oldPrice: '$42.00',
  },
  {
    id: 'products-8',
    category: 't-shirts',
    image: '/images/products/t8.png',
    brand: 'Zara',
    name: 'Soft Touch Cotton T-Shirt',
    price: '$24.00',
    oldPrice: '$34.00',
  },
  {
    id: 'products-9',
    category: 't-shirts',
    image: '/images/products/t9.png',
    brand: 'Zara',
    name: 'Oversized Crew Neck T-Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
];

const casualShirts: Product[] = [
  {
    id: 'casualShirts-1',
    category: 'casual shirts',
    image: '/images/products/ch1.png',
    brand: 'Zara',
    name: 'Casual Cotton Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    id: 'casualShirts-2',
    category: 'casual shirts',
    image: '/images/products/ch2.png',
    brand: 'H&M',
    name: 'Relaxed Fit Shirt',
    price: '$28.00',
    oldPrice: '$38.00',
  },
  {
    id: 'casualShirts-3',
    category: 'casual shirts',
    image: '/images/products/ch3.png',
    brand: 'Roadstar',
    name: 'Checked Casual Shirt',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    id: 'casualShirts-4',
    category: 'casual shirts',
    image: '/images/products/ch4.png',
    brand: 'Levi’s',
    name: 'Denim Casual Shirt',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    id: 'casualShirts-5',
    category: 'casual shirts',
    image: '/images/products/ch5.png',
    brand: 'Zara',
    name: 'Linen Blend Shirt',
    price: '$32.00',
    oldPrice: '$42.00',
  },
  {
    id: 'casualShirts-6',
    category: 'casual shirts',
    image: '/images/products/ch6.png',
    brand: 'H&M',
    name: 'Striped Casual Shirt',
    price: '$30.00',
    oldPrice: '$40.00',
  },
  {
    id: 'casualShirts-7',
    category: 'casual shirts',
    image: '/images/products/ch7.png',
    brand: 'Roadstar',
    name: 'Regular Fit Shirt',
    price: '$38.00',
    oldPrice: '$48.00',
  },
  {
    id: 'casualShirts-8',
    category: 'casual shirts',
    image: '/images/products/ch8.png',
    brand: 'Zara',
    name: 'Oxford Casual Shirt',
    price: '$42.00',
    oldPrice: '$52.00',
  },
  {
    id: 'casualShirts-9',
    category: 'casual shirts',
    image: '/images/products/ch9.png',
    brand: 'H&M',
    name: 'Short Sleeve Shirt',
    price: '$25.00',
    oldPrice: '$35.00',
  },
];

const formalShirts: Product[] = [
  {
    id: 'formalShirts-1',
    category: 'formal shirts',
    image: '/images/products/ch11.png',
    brand: 'Zara',
    name: 'Slim Fit Formal Shirt',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    id: 'formalShirts-2',
    category: 'formal shirts',
    image: '/images/products/ch10.png',
    brand: 'H&M',
    name: 'Classic White Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    id: 'formalShirts-3',
    category: 'formal shirts',
    image: '/images/products/ch9.png',
    brand: 'Polo',
    name: 'Premium Office Shirt',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    id: 'formalShirts-4',
    category: 'formal shirts',
    image: '/images/products/ch8.png',
    brand: 'Zara',
    name: 'Regular Fit Dress Shirt',
    price: '$42.00',
    oldPrice: '$52.00',
  },
  {
    id: 'formalShirts-5',
    category: 'formal shirts',
    image: '/images/products/ch7.png',
    brand: 'H&M',
    name: 'Cotton Business Shirt',
    price: '$38.00',
    oldPrice: '$48.00',
  },
  {
    id: 'formalShirts-6',
    category: 'formal shirts',
    image: '/images/products/ch6.png',
    brand: 'Polo',
    name: 'Oxford Formal Shirt',
    price: '$55.00',
    oldPrice: '$65.00',
  },
  {
    id: 'formalShirts-7',
    category: 'formal shirts',
    image: '/images/products/ch5.png',
    brand: 'Zara',
    name: 'Classic Black Shirt',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    id: 'formalShirts-8',
    category: 'formal shirts',
    image: '/images/products/ch4.png',
    brand: 'H&M',
    name: 'Slim Cotton Shirt',
    price: '$36.00',
    oldPrice: '$46.00',
  },
  {
    id: 'formalShirts-9',
    category: 'formal shirts',
    image: '/images/products/ch3.png',
    brand: 'Polo',
    name: 'Premium White Shirt',
    price: '$62.00',
    oldPrice: '$72.00',
  },
];

const jackets: Product[] = [
  {
    id: 'jackets-1',
    category: 'jackets',
    image: '/images/products/j1.png',
    brand: 'Zara',
    name: 'Classic Bomber Jacket',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    id: 'jackets-2',
    category: 'jackets',
    image: '/images/products/j2.png',
    brand: 'H&M',
    name: 'Lightweight Jacket',
    price: '$70.00',
    oldPrice: '$85.00',
  },
  {
    id: 'jackets-3',
    category: 'jackets',
    image: '/images/products/j3.png',
    brand: 'Levi’s',
    name: 'Denim Jacket',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    id: 'jackets-4',
    category: 'jackets',
    image: '/images/products/j4.png',
    brand: 'Roadstar',
    name: 'Casual Zip Jacket',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    id: 'jackets-5',
    category: 'jackets',
    image: '/images/products/j5.png',
    brand: 'Zara',
    name: 'Oversized Jacket',
    price: '$90.00',
    oldPrice: '$110.00',
  },
  {
    id: 'jackets-6',
    category: 'jackets',
    image: '/images/products/j6.png',
    brand: 'H&M',
    name: 'Padded Winter Jacket',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    id: 'jackets-7',
    category: 'jackets',
    image: '/images/products/j7.png',
    brand: 'Polo',
    name: 'Sport Jacket',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    id: 'jackets-8',
    category: 'jackets',
    image: '/images/products/j8.png',
    brand: 'Levi’s',
    name: 'Classic Trucker Jacket',
    price: '$100.00',
    oldPrice: '$120.00',
  },
  {
    id: 'jackets-9',
    category: 'jackets',
    image: '/images/products/j9.png',
    brand: 'Zara',
    name: 'Faux Leather Jacket',
    price: '$115.00',
    oldPrice: '$135.00',
  },
];

const blazersCoats: Product[] = [
  {
    id: 'blazersCoats-1',
    category: 'blazers & coats',
    image: '/images/products/с1.png',
    brand: 'Zara',
    name: 'Classic Black Blazer',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    id: 'blazersCoats-2',
    category: 'blazers & coats',
    image: '/images/products/с2.png',
    brand: 'H&M',
    name: 'Slim Fit Blazer',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    id: 'blazersCoats-3',
    category: 'blazers & coats',
    image: '/images/products/с3.png',
    brand: 'Polo',
    name: 'Wool Blend Coat',
    price: '$180.00',
    oldPrice: '$210.00',
  },
  {
    id: 'blazersCoats-4',
    category: 'blazers & coats',
    image: '/images/products/с4.png',
    brand: 'Zara',
    name: 'Casual Beige Blazer',
    price: '$105.00',
    oldPrice: '$125.00',
  },
  {
    id: 'blazersCoats-5',
    category: 'blazers & coats',
    image: '/images/products/с5.png',
    brand: 'H&M',
    name: 'Long Wool Coat',
    price: '$150.00',
    oldPrice: '$175.00',
  },
  {
    id: 'blazersCoats-6',
    category: 'blazers & coats',
    image: '/images/products/с6.png',
    brand: 'Polo',
    name: 'Tailored Navy Blazer',
    price: '$140.00',
    oldPrice: '$165.00',
  },
  {
    id: 'blazersCoats-7',
    category: 'blazers & coats',
    image: '/images/products/с7.png',
    brand: 'Zara',
    name: 'Oversized Grey Blazer',
    price: '$120.00',
    oldPrice: '$140.00',
  },
  {
    id: 'blazersCoats-8',
    category: 'blazers & coats',
    image: '/images/products/с8.png',
    brand: 'H&M',
    name: 'Classic Trench Coat',
    price: '$135.00',
    oldPrice: '$155.00',
  },
  {
    id: 'blazersCoats-9',
    category: 'blazers & coats',
    image: '/images/products/с9.png',
    brand: 'Polo',
    name: 'Premium Formal Blazer',
    price: '$160.00',
    oldPrice: '$185.00',
  },
];

const jeans: Product[] = [
  {
    id: 'jeans-1',
    category: 'jeans',
    image: '/images/products/je1.png',
    brand: 'Levi’s',
    name: '501 Original Straight Jeans',
    price: '$89.00',
    oldPrice: '$110.00',
  },
  {
    id: 'jeans-2',
    category: 'jeans',
    image: '/images/products/je2.png',
    brand: 'Wrangler',
    name: 'Classic Regular Fit Jeans',
    price: '$79.00',
    oldPrice: '$99.00',
  },
  {
    id: 'jeans-3',
    category: 'jeans',
    image: '/images/products/je3.png',
    brand: 'Lee',
    name: 'Extreme Motion Slim Jeans',
    price: '$85.00',
    oldPrice: '$105.00',
  },
  {
    id: 'jeans-4',
    category: 'jeans',
    image: '/images/products/je4.png',
    brand: 'Calvin Klein',
    name: 'Slim Fit Denim Jeans',
    price: '$110.00',
    oldPrice: '$135.00',
  },
  {
    id: 'jeans-5',
    category: 'jeans',
    image: '/images/products/je5.png',
    brand: 'Tommy Hilfiger',
    name: 'Classic Blue Denim Jeans',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    id: 'jeans-6',
    category: 'jeans',
    image: '/images/products/je6.png',
    brand: 'Levi’s',
    name: '511 Slim Fit Jeans',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    id: 'jeans-7',
    category: 'jeans',
    image: '/images/products/je7.png',
    brand: 'Wrangler',
    name: 'Texas Stretch Regular Jeans',
    price: '$82.00',
    oldPrice: '$102.00',
  },
  {
    id: 'jeans-8',
    category: 'jeans',
    image: '/images/products/je8.png',
    brand: 'Lee',
    name: 'Straight Leg Denim Jeans',
    price: '$88.00',
    oldPrice: '$108.00',
  },
  {
    id: 'jeans-9',
    category: 'jeans',
    image: '/images/products/je9.png',
    brand: 'Calvin Klein',
    name: 'Tapered Fit Jeans',
    price: '$115.00',
    oldPrice: '$140.00',
  },
];

const sherwanis: Product[] = [
  {
    id: 'sherwanis-1',
    category: 'sherwanis',
    image: '/images/products/s1.jpg',
    brand: 'Manyavar',
    name: 'Classic Wedding Sherwani',
    price: '$220.00',
    oldPrice: '$250.00',
  },
  {
    id: 'sherwanis-2',
    category: 'sherwanis',
    image: '/images/products/s2.jpg',
    brand: 'Manyavar',
    name: 'Embroidered Sherwani',
    price: '$280.00',
    oldPrice: '$320.00',
  },
  {
    id: 'sherwanis-3',
    category: 'sherwanis',
    image: '/images/products/s3.jpg',
    brand: 'Fabindia',
    name: 'Traditional Ivory Sherwani',
    price: '$240.00',
    oldPrice: '$275.00',
  },
  {
    id: 'sherwanis-4',
    category: 'sherwanis',
    image: '/images/products/s4.jpg',
    brand: 'Manyavar',
    name: 'Royal Blue Sherwani',
    price: '$260.00',
    oldPrice: '$300.00',
  },
  {
    id: 'sherwanis-5',
    category: 'sherwanis',
    image: '/images/products/s5.jpg',
    brand: 'Manyavar',
    name: 'Silk Wedding Sherwani',
    price: '$310.00',
    oldPrice: '$350.00',
  },
  {
    id: 'sherwanis-6',
    category: 'sherwanis',
    image: '/images/products/s6.jpg',
    brand: 'Fabindia',
    name: 'Classic Cream Sherwani',
    price: '$230.00',
    oldPrice: '$265.00',
  },
  {
    id: 'sherwanis-7',
    category: 'sherwanis',
    image: '/images/products/s7.jpg',
    brand: 'Manyavar',
    name: 'Gold Embroidered Sherwani',
    price: '$330.00',
    oldPrice: '$370.00',
  },
  {
    id: 'sherwanis-8',
    category: 'sherwanis',
    image: '/images/products/s8.jpg',
    brand: 'Manyavar',
    name: 'Modern Fit Sherwani',
    price: '$250.00',
    oldPrice: '$290.00',
  },
  {
    id: 'sherwanis-9',
    category: 'sherwanis',
    image: '/images/products/s9.jpg',
    brand: 'Fabindia',
    name: 'Festive Sherwani Set',
    price: '$275.00',
    oldPrice: '$315.00',
  },
];

const sarees: Product[] = [
  {
    id: 'sarees-1',
    category: 'sarees',
    image: '/images/products/sa1.png',
    brand: 'Fabindia',
    name: 'Traditional Silk Saree',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    id: 'sarees-2',
    category: 'sarees',
    image: '/images/products/sa2.png',
    brand: 'Manyavar',
    name: 'Red Wedding Saree',
    price: '$150.00',
    oldPrice: '$180.00',
  },
  {
    id: 'sarees-3',
    category: 'sarees',
    image: '/images/products/sa3.png',
    brand: 'Fabindia',
    name: 'Elegant Floral Saree',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    id: 'sarees-4',
    category: 'sarees',
    image: '/images/products/sa4.png',
    brand: 'Suta',
    name: 'Cotton Printed Saree',
    price: '$85.00',
    oldPrice: '$105.00',
  },
  {
    id: 'sarees-5',
    category: 'sarees',
    image: '/images/products/sa5.png',
    brand: 'Manyavar',
    name: 'Golden Embroidered Saree',
    price: '$180.00',
    oldPrice: '$210.00',
  },
  {
    id: 'sarees-6',
    category: 'sarees',
    image: '/images/products/sa6.png',
    brand: 'Fabindia',
    name: 'Classic Blue Silk Saree',
    price: '$130.00',
    oldPrice: '$155.00',
  },
  {
    id: 'sarees-7',
    category: 'sarees',
    image: '/images/products/sa7.png',
    brand: 'Suta',
    name: 'Pastel Pink Saree',
    price: '$90.00',
    oldPrice: '$110.00',
  },
  {
    id: 'sarees-8',
    category: 'sarees',
    image: '/images/products/sa8.png',
    brand: 'Manyavar',
    name: 'Bridal Designer Saree',
    price: '$220.00',
    oldPrice: '$250.00',
  },
  {
    id: 'sarees-9',
    category: 'sarees',
    image: '/images/products/sa9.png',
    brand: 'Fabindia',
    name: 'Green Traditional Saree',
    price: '$110.00',
    oldPrice: '$135.00',
  },
];

const ethnicWear: Product[] = [
  {
    id: 'ethnicWear-1',
    category: 'ethnic wear',
    image: '/images/products/d1.png',
    brand: 'Fabindia',
    name: 'Printed Ethnic Kurta',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    id: 'ethnicWear-2',
    category: 'ethnic wear',
    image: '/images/products/d2.png',
    brand: 'Biba',
    name: 'Floral Anarkali Suit',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    id: 'ethnicWear-3',
    category: 'ethnic wear',
    image: '/images/products/d3.png',
    brand: 'Manyavar',
    name: 'Traditional Embroidered Set',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    id: 'ethnicWear-4',
    category: 'ethnic wear',
    image: '/images/products/d4.png',
    brand: 'Fabindia',
    name: 'Cotton Ethnic Dress',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    id: 'ethnicWear-5',
    category: 'ethnic wear',
    image: '/images/products/d5.png',
    brand: 'Biba',
    name: 'Printed Kurta Set',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    id: 'ethnicWear-6',
    category: 'ethnic wear',
    image: '/images/products/d6.png',
    brand: 'Aurelia',
    name: 'Elegant Ethnic Tunic',
    price: '$50.00',
    oldPrice: '$65.00',
  },
  {
    id: 'ethnicWear-7',
    category: 'ethnic wear',
    image: '/images/products/d7.png',
    brand: 'Fabindia',
    name: 'Traditional Cotton Suit',
    price: '$90.00',
    oldPrice: '$110.00',
  },
  {
    id: 'ethnicWear-8',
    category: 'ethnic wear',
    image: '/images/products/d8.png',
    brand: 'Biba',
    name: 'Festive Anarkali Dress',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    id: 'ethnicWear-9',
    category: 'ethnic wear',
    image: '/images/products/d9.png',
    brand: 'Manyavar',
    name: 'Designer Ethnic Set',
    price: '$140.00',
    oldPrice: '$165.00',
  },
];

const lehengaCholis: Product[] = [
  {
    id: 'lehengaCholis-1',
    category: 'lehenga cholis',
    image: '/images/products/d9.png',
    brand: 'Manyavar',
    name: 'Red Bridal Lehenga',
    price: '$250.00',
    oldPrice: '$290.00',
  },
  {
    id: 'lehengaCholis-2',
    category: 'lehenga cholis',
    image: '/images/products/d8.png',
    brand: 'Biba',
    name: 'Pink Embroidered Lehenga',
    price: '$180.00',
    oldPrice: '$210.00',
  },
  {
    id: 'lehengaCholis-3',
    category: 'lehenga cholis',
    image: '/images/products/d7.png',
    brand: 'Fabindia',
    name: 'Traditional Blue Lehenga',
    price: '$160.00',
    oldPrice: '$190.00',
  },
  {
    id: 'lehengaCholis-4',
    category: 'lehenga cholis',
    image: '/images/products/d6.png',
    brand: 'Manyavar',
    name: 'Golden Wedding Lehenga',
    price: '$280.00',
    oldPrice: '$320.00',
  },
  {
    id: 'lehengaCholis-5',
    category: 'lehenga cholis',
    image: '/images/products/d5.png',
    brand: 'Biba',
    name: 'Pastel Floral Lehenga',
    price: '$190.00',
    oldPrice: '$220.00',
  },
  {
    id: 'lehengaCholis-6',
    category: 'lehenga cholis',
    image: '/images/products/d4.png',
    brand: 'Manyavar',
    name: 'Royal Purple Lehenga',
    price: '$230.00',
    oldPrice: '$270.00',
  },
  {
    id: 'lehengaCholis-7',
    category: 'lehenga cholis',
    image: '/images/products/d3.png',
    brand: 'Fabindia',
    name: 'Green Silk Lehenga',
    price: '$175.00',
    oldPrice: '$205.00',
  },
  {
    id: 'lehengaCholis-8',
    category: 'lehenga cholis',
    image: '/images/products/d2.png',
    brand: 'Biba',
    name: 'Peach Party Lehenga',
    price: '$165.00',
    oldPrice: '$195.00',
  },
  {
    id: 'lehengaCholis-9',
    category: 'lehenga cholis',
    image: '/images/products/d1.png',
    brand: 'Manyavar',
    name: 'Maroon Bridal Lehenga',
    price: '$300.00',
    oldPrice: '$350.00',
  },
];

const dresses: Product[] = [
  {
    id: 'dresses-1',
    category: 'dresses',
    image: '/images/products/d1.png',
    brand: 'Zara',
    name: 'Floral Summer Dress',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    id: 'dresses-2',
    category: 'dresses',
    image: '/images/products/d3.png',
    brand: 'H&M',
    name: 'Classic Black Dress',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    id: 'dresses-3',
    category: 'dresses',
    image: '/images/products/d5.png',
    brand: 'Mango',
    name: 'Elegant Midi Dress',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    id: 'dresses-4',
    category: 'dresses',
    image: '/images/products/d7.png',
    brand: 'Zara',
    name: 'Satin Evening Dress',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    id: 'dresses-5',
    category: 'dresses',
    image: '/images/products/d9.png',
    brand: 'H&M',
    name: 'Casual Cotton Dress',
    price: '$45.00',
    oldPrice: '$60.00',
  },
  {
    id: 'dresses-6',
    category: 'dresses',
    image: '/images/products/d8.png',
    brand: 'Mango',
    name: 'Pleated Maxi Dress',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    id: 'dresses-7',
    category: 'dresses',
    image: '/images/products/d6.png',
    brand: 'Zara',
    name: 'Floral Midi Dress',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    id: 'dresses-8',
    category: 'dresses',
    image: '/images/products/d4.png',
    brand: 'H&M',
    name: 'Linen Summer Dress',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    id: 'dresses-9',
    category: 'dresses',
    image: '/images/products/d2.png',
    brand: 'Mango',
    name: 'Elegant Wrap Dress',
    price: '$90.00',
    oldPrice: '$110.00',
  },
];

const jumpsuits: Product[] = [
  {
    id: 'jumpsuits-1',
    category: 'jumpsuits',
    image: '/images/products/ju1.png',
    brand: 'Zara',
    name: 'Black Wide Leg Jumpsuit',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    id: 'jumpsuits-2',
    category: 'jumpsuits',
    image: '/images/products/ju2.png',
    brand: 'Mango',
    name: 'Elegant Belted Jumpsuit',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    id: 'jumpsuits-3',
    category: 'jumpsuits',
    image: '/images/products/ju3.png',
    brand: 'H&M',
    name: 'Casual Denim Jumpsuit',
    price: '$75.00',
    oldPrice: '$90.00',
  },
];

const kidsShirts: Product[] = [
  {
    id: 'kidsShirts-1',
    category: 'shirts',
    image: '/images/products/ch1.png',
    brand: 'Zara',
    name: 'Casual Cotton Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    id: 'kidsShirts-2',
    category: 'shirts',
    image: '/images/products/ch2.png',
    brand: 'H&M',
    name: 'Relaxed Fit Shirt',
    price: '$28.00',
    oldPrice: '$38.00',
  },
  {
    id: 'kidsShirts-3',
    category: 'shirts',
    image: '/images/products/ch3.png',
    brand: 'Roadstar',
    name: 'Checked Casual Shirt',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    id: 'kidsShirts-4',
    category: 'shirts',
    image: '/images/products/ch4.png',
    brand: 'Levi’s',
    name: 'Denim Casual Shirt',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    id: 'kidsShirts-5',
    category: 'shirts',
    image: '/images/products/ch5.png',
    brand: 'Zara',
    name: 'Linen Blend Shirt',
    price: '$32.00',
    oldPrice: '$42.00',
  },
  {
    id: 'kidsShirts-6',
    category: 'shirts',
    image: '/images/products/ch6.png',
    brand: 'H&M',
    name: 'Striped Casual Shirt',
    price: '$30.00',
    oldPrice: '$40.00',
  },
];

const kidsTrousers: Product[] = [
  {
    id: 'kidsTrousers-1',
    category: 'trousers',
    image: '/images/products/tr1.png',
    brand: 'H&M Kids',
    name: 'Classic Casual Trousers',
    price: '$25.00',
    oldPrice: '$31.00',
  },
  {
    id: 'kidsTrousers-2',
    category: 'trousers',
    image: '/images/products/tr2.png',
    brand: 'Zara Kids',
    name: 'Slim Fit Chino Trousers',
    price: '$30.00',
    oldPrice: '$37.00',
  },
  {
    id: 'kidsTrousers-3',
    category: 'trousers',
    image: '/images/products/tr3.png',
    brand: 'Gap Kids',
    name: 'Cotton Straight Trousers',
    price: '$28.00',
    oldPrice: '$35.00',
  },
  {
    id: 'kidsTrousers-4',
    category: 'trousers',
    image: '/images/products/tr4.png',
    brand: 'Next Kids',
    name: 'Relaxed Fit Trousers',
    price: '$27.00',
    oldPrice: '$34.00',
  },
  {
    id: 'kidsTrousers-5',
    category: 'trousers',
    image: '/images/products/tr5.png',
    brand: 'Mango Kids',
    name: 'Smart School Trousers',
    price: '$32.00',
    oldPrice: '$39.00',
  },
  {
    id: 'kidsTrousers-6',
    category: 'trousers',
    image: '/images/products/tr6.png',
    brand: 'Nike Kids',
    name: 'Everyday Woven Trousers',
    price: '$35.00',
    oldPrice: '$42.00',
  },
];

const kidsPartyWear: Product[] = [
  {
    id: 'kidsPartyWear-1',
    category: 'party wear',
    image: '/images/products/pv1.png',
    brand: 'Zara Kids',
    name: 'Elegant Party Dress',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    id: 'kidsPartyWear-2',
    category: 'party wear',
    image: '/images/products/pv2.png',
    brand: 'Next Kids',
    name: 'Classic Party Suit',
    price: '$55.00',
    oldPrice: '$65.00',
  },
  {
    id: 'kidsPartyWear-3',
    category: 'party wear',
    image: '/images/products/pv3.png',
    brand: 'Mango Kids',
    name: 'Floral Celebration Dress',
    price: '$42.00',
    oldPrice: '$50.00',
  },
];

const kidsInnerwearThermal: Product[] = [
  {
    id: 'kidsInnerwearThermal-1',
    category: 'innerwear & thermal',
    image: '/images/products/ki1.png',
    brand: 'H&M Kids',
    name: 'Cotton Basic Underwear Set',
    price: '$18.00',
    oldPrice: '$22.00',
  },
  {
    id: 'kidsInnerwearThermal-2',
    category: 'innerwear & thermal',
    image: '/images/products/ki2.png',
    brand: 'Next Kids',
    name: 'Soft Cotton Vest Set',
    price: '$16.00',
    oldPrice: '$20.00',
  },
  {
    id: 'kidsInnerwearThermal-3',
    category: 'innerwear & thermal',
    image: '/images/products/ki3.png',
    brand: 'Uniqlo Kids',
    name: 'HEATTECH Thermal Top',
    price: '$20.00',
    oldPrice: '$25.00',
  },
  {
    id: 'kidsInnerwearThermal-4',
    category: 'innerwear & thermal',
    image: '/images/products/ki4.png',
    brand: 'Gap Kids',
    name: 'Thermal Leggings',
    price: '$19.00',
    oldPrice: '$24.00',
  },
  {
    id: 'kidsInnerwearThermal-5',
    category: 'innerwear & thermal',
    image: '/images/products/ki5.png',
    brand: 'Carter’s',
    name: 'Everyday Underwear Pack',
    price: '$22.00',
    oldPrice: '$28.00',
  },
  {
    id: 'kidsInnerwearThermal-6',
    category: 'innerwear & thermal',
    image: '/images/products/ki6.png',
    brand: 'Mothercare',
    name: 'Warm Thermal Set',
    price: '$25.00',
    oldPrice: '$31.00',
  },
];

const kidsTrackPants: Product[] = [
  {
    id: 'kidsTrackPants-1',
    category: 'track pants',
    image: '/images/products/tp1.png',
    brand: 'Nike Kids',
    name: 'Sportswear Track Pants',
    price: '$28.00',
    oldPrice: '$35.00',
  },
  {
    id: 'kidsTrackPants-2',
    category: 'track pants',
    image: '/images/products/tp2.png',
    brand: 'Adidas Kids',
    name: 'Classic Three Stripe Pants',
    price: '$30.00',
    oldPrice: '$37.00',
  },
  {
    id: 'kidsTrackPants-3',
    category: 'track pants',
    image: '/images/products/tp3.png',
    brand: 'Puma Kids',
    name: 'Essential Jogger Pants',
    price: '$26.00',
    oldPrice: '$33.00',
  },
  {
    id: 'kidsTrackPants-4',
    category: 'track pants',
    image: '/images/products/tp4.png',
    brand: 'H&M Kids',
    name: 'Cotton Relaxed Track Pants',
    price: '$22.00',
    oldPrice: '$28.00',
  },
  {
    id: 'kidsTrackPants-5',
    category: 'track pants',
    image: '/images/products/tp5.png',
    brand: 'Under Armour',
    name: 'Sport Training Pants',
    price: '$32.00',
    oldPrice: '$39.00',
  },
  {
    id: 'kidsTrackPants-6',
    category: 'track pants',
    image: '/images/products/tp6.png',
    brand: 'Reebok Kids',
    name: 'Classic Training Joggers',
    price: '$27.00',
    oldPrice: '$34.00',
  },
];

const kidsValuePack: Product[] = [
  {
    id: 'kidsValuePack-1',
    category: 'value pack',
    image: '/images/products/tp1.png',
    brand: 'H&M Kids',
    name: 'Basic T-Shirt 3 Pack',
    price: '$25.00',
    oldPrice: '$32.00',
  },
  {
    id: 'kidsValuePack-2',
    category: 'value pack',
    image: '/images/products/tr2.png',
    brand: 'Next Kids',
    name: 'Cotton Vest 3 Pack',
    price: '$20.00',
    oldPrice: '$26.00',
  },
  {
    id: 'kidsValuePack-3',
    category: 'value pack',
    image: '/images/products/ki3.png',
    brand: 'Carter’s',
    name: 'Everyday Bodysuit 5 Pack',
    price: '$30.00',
    oldPrice: '$38.00',
  },
  {
    id: 'kidsValuePack-4',
    category: 'value pack',
    image: '/images/products/pv1.png',
    brand: 'Gap Kids',
    name: 'Colorful Socks 5 Pack',
    price: '$15.00',
    oldPrice: '$20.00',
  },
  {
    id: 'kidsValuePack-5',
    category: 'value pack',
    image: '/images/products/ch5.png',
    brand: 'Zara Kids',
    name: 'Essential T-Shirt 2 Pack',
    price: '$22.00',
    oldPrice: '$28.00',
  },
  {
    id: 'kidsValuePack-6',
    category: 'value pack',
    image: '/images/products/tr6.png',
    brand: 'Mothercare',
    name: 'Cotton Pyjama 2 Pack',
    price: '$28.00',
    oldPrice: '$35.00',
  },
];

const flats: Product[] = [
  {
    id: 'flats-1',
    category: 'flats',
    image: '/images/products/fl1.png',
    brand: 'Bata',
    name: 'Classic Ballet Flats',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    id: 'flats-2',
    category: 'flats',
    image: '/images/products/fl2.png',
    brand: 'H&M',
    name: 'Leather Pointed Flats',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    id: 'flats-3',
    category: 'flats',
    image: '/images/products/fl3.png',
    brand: 'Zara',
    name: 'Elegant Bow Flats',
    price: '$38.00',
    oldPrice: '$48.00',
  },
  {
    id: 'flats-4',
    category: 'flats',
    image: '/images/products/fl4.png',
    brand: 'Clarks',
    name: 'Comfort Casual Flats',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    id: 'flats-5',
    category: 'flats',
    image: '/images/products/fl5.png',
    brand: 'Aldo',
    name: 'Minimalist Slip-On Flats',
    price: '$42.00',
    oldPrice: '$52.00',
  },
  {
    id: 'flats-6',
    category: 'flats',
    image: '/images/products/fl6.png',
    brand: 'Mango',
    name: 'Suede Ballerina Flats',
    price: '$50.00',
    oldPrice: '$60.00',
  },
];

const casualShoes: Product[] = [
  {
    id: 'casualShoes-1',
    category: 'casual shoes',
    image: '/images/products/cs1.png',
    brand: 'Nike',
    name: 'Classic Casual Sneakers',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    id: 'casualShoes-2',
    category: 'casual shoes',
    image: '/images/products/cs2.png',
    brand: 'Adidas',
    name: 'Everyday Street Shoes',
    price: '$70.00',
    oldPrice: '$85.00',
  },
  {
    id: 'casualShoes-3',
    category: 'casual shoes',
    image: '/images/products/cs3.png',
    brand: 'Puma',
    name: 'Urban Lifestyle Sneakers',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    id: 'casualShoes-4',
    category: 'casual shoes',
    image: '/images/products/cs4.png',
    brand: 'Zara',
    name: 'Minimal Leather Shoes',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    id: 'casualShoes-5',
    category: 'casual shoes',
    image: '/images/products/cs5.png',
    brand: 'Skechers',
    name: 'Comfort Walking Shoes',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    id: 'casualShoes-6',
    category: 'casual shoes',
    image: '/images/products/cs6.png',
    brand: 'Reebok',
    name: 'Retro Casual Sneakers',
    price: '$68.00',
    oldPrice: '$82.00',
  },
];

const heels: Product[] = [
  {
    id: 'heels-1',
    category: 'heels',
    image: '/images/products/he1.png',
    brand: 'Aldo',
    name: 'Classic High Heel Pumps',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    id: 'heels-2',
    category: 'heels',
    image: '/images/products/he2.png',
    brand: 'Zara',
    name: 'Elegant Strappy Heels',
    price: '$70.00',
    oldPrice: '$85.00',
  },
  {
    id: 'heels-3',
    category: 'heels',
    image: '/images/products/he3.png',
    brand: 'Mango',
    name: 'Pointed Toe Stilettos',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    id: 'heels-4',
    category: 'heels',
    image: '/images/products/he4.png',
    brand: 'Guess',
    name: 'Luxury Block Heels',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    id: 'heels-5',
    category: 'heels',
    image: '/images/products/he5.png',
    brand: 'Steve Madden',
    name: 'Open Toe Party Heels',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    id: 'heels-6',
    category: 'heels',
    image: '/images/products/he6.png',
    brand: 'H&M',
    name: 'Minimalist Kitten Heels',
    price: '$50.00',
    oldPrice: '$65.00',
  },
];

const boots: Product[] = [
  {
    id: 'boots-1',
    category: 'boots',
    image: '/images/products/bo1.png',
    brand: 'Timberland',
    name: 'Classic Leather Ankle Boots',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    id: 'boots-2',
    category: 'boots',
    image: '/images/products/bo2.png',
    brand: 'Zara',
    name: 'Elegant Knee High Boots',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    id: 'boots-3',
    category: 'boots',
    image: '/images/products/bo3.png',
    brand: 'Dr. Martens',
    name: 'Classic Lace-Up Boots',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    id: 'boots-4',
    category: 'boots',
    image: '/images/products/bo4.png',
    brand: 'Clarks',
    name: 'Comfort Chelsea Boots',
    price: '$90.00',
    oldPrice: '$105.00',
  },
  {
    id: 'boots-5',
    category: 'boots',
    image: '/images/products/bo5.png',
    brand: 'Aldo',
    name: 'Fashion Chunky Boots',
    price: '$100.00',
    oldPrice: '$120.00',
  },
  {
    id: 'boots-6',
    category: 'boots',
    image: '/images/products/bo6.png',
    brand: 'H&M',
    name: 'Casual Suede Boots',
    price: '$80.00',
    oldPrice: '$95.00',
  },
];

const sportsShoes: Product[] = [
  {
    id: 'sportsShoes-1',
    category: 'sports shoes & floaters',
    image: '/images/products/ss1.png',
    brand: 'Nike',
    name: 'Air Running Sneakers',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    id: 'sportsShoes-2',
    category: 'sports shoes & floaters',
    image: '/images/products/ss2.png',
    brand: 'Adidas',
    name: 'Ultraboost Running Shoes',
    price: '$125.00',
    oldPrice: '$145.00',
  },
  {
    id: 'sportsShoes-3',
    category: 'sports shoes & floaters',
    image: '/images/products/ss3.png',
    brand: 'Puma',
    name: 'Training Sports Sneakers',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    id: 'sportsShoes-4',
    category: 'sports shoes & floaters',
    image: '/images/products/ss4.png',
    brand: 'Reebok',
    name: 'Classic Fitness Shoes',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    id: 'sportsShoes-5',
    category: 'sports shoes & floaters',
    image: '/images/products/bo5.png',
    brand: 'Skechers',
    name: 'Lightweight Walking Shoes',
    price: '$90.00',
    oldPrice: '$105.00',
  },
  {
    id: 'sportsShoes-6',
    category: 'sports shoes & floaters',
    image: '/images/products/bo6.png',
    brand: 'New Balance',
    name: 'Athletic Running Sneakers',
    price: '$115.00',
    oldPrice: '$135.00',
  },
];

const bags: Product[] = [
  {
    id: 'bags-1',
    category: 'bags',
    image: '/images/products/ba1.png',
    brand: 'Guess',
    name: 'Classic Leather Handbag',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    id: 'bags-2',
    category: 'bags',
    image: '/images/products/ba2.png',
    brand: 'Zara',
    name: 'Elegant Shoulder Bag',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    id: 'bags-3',
    category: 'bags',
    image: '/images/products/ba3.png',
    brand: 'H&M',
    name: 'Casual Crossbody Bag',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    id: 'bags-4',
    category: 'bags',
    image: '/images/products/ba4.png',
    brand: 'Aldo',
    name: 'Mini Evening Bag',
    price: '$50.00',
    oldPrice: '$65.00',
  },
  {
    id: 'bags-5',
    category: 'bags',
    image: '/images/products/ba5.png',
    brand: 'Michael Kors',
    name: 'Structured Tote Bag',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    id: 'bags-6',
    category: 'bags',
    image: '/images/products/ba6.png',
    brand: 'Mango',
    name: 'Minimalist Shopper Bag',
    price: '$45.00',
    oldPrice: '$60.00',
  },
];

const belts: Product[] = [
  {
    id: 'belts-1',
    category: 'belts',
    image: '/images/products/be1.png',
    brand: "Levi's",
    name: 'Classic Leather Belt',
    price: '$30.00',
    oldPrice: '$40.00',
  },
  {
    id: 'belts-2',
    category: 'belts',
    image: '/images/products/be2.png',
    brand: 'Guess',
    name: 'Designer Logo Belt',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    id: 'belts-3',
    category: 'belts',
    image: '/images/products/be3.png',
    brand: 'Zara',
    name: 'Minimalist Buckle Belt',
    price: '$25.00',
    oldPrice: '$35.00',
  },
  {
    id: 'belts-4',
    category: 'belts',
    image: '/images/products/be4.png',
    brand: 'Tommy Hilfiger',
    name: 'Casual Reversible Belt',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    id: 'belts-5',
    category: 'belts',
    image: '/images/products/be5.png',
    brand: 'H&M',
    name: 'Classic Brown Belt',
    price: '$20.00',
    oldPrice: '$28.00',
  },
  {
    id: 'belts-6',
    category: 'belts',
    image: '/images/products/be6.png',
    brand: 'Calvin Klein',
    name: 'Premium Leather Belt',
    price: '$50.00',
    oldPrice: '$65.00',
  },
];

const wallets: Product[] = [
  {
    id: 'wallets-1',
    category: 'wallets',
    image: '/images/products/wl1.png',
    brand: 'Guess',
    name: 'Classic Leather Wallet',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    id: 'wallets-2',
    category: 'wallets',
    image: '/images/products/wl2.png',
    brand: 'Tommy Hilfiger',
    name: 'Compact Bifold Wallet',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    id: 'wallets-3',
    category: 'wallets',
    image: '/images/products/wl3.png',
    brand: 'Calvin Klein',
    name: 'Minimalist Card Holder',
    price: '$30.00',
    oldPrice: '$40.00',
  },
  {
    id: 'wallets-4',
    category: 'wallets',
    image: '/images/products/wl4.png',
    brand: 'Fossil',
    name: 'Vintage Leather Wallet',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    id: 'wallets-5',
    category: 'wallets',
    image: '/images/products/wl5.png',
    brand: 'H&M',
    name: 'Slim Everyday Wallet',
    price: '$20.00',
    oldPrice: '$28.00',
  },
  {
    id: 'wallets-6',
    category: 'wallets',
    image: '/images/products/wl6.png',
    brand: 'Puma',
    name: 'Sporty Zip Wallet',
    price: '$25.00',
    oldPrice: '$35.00',
  },
];

const watches: Product[] = [
  {
    id: 'watches-1',
    category: 'watches',
    image: '/images/products/wa1.png',
    brand: 'Casio',
    name: 'Classic Digital Watch',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    id: 'watches-2',
    category: 'watches',
    image: '/images/products/wa2.png',
    brand: 'Fossil',
    name: 'Minimalist Analog Watch',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    id: 'watches-3',
    category: 'watches',
    image: '/images/products/wa3.png',
    brand: 'Timex',
    name: 'Classic Leather Watch',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    id: 'watches-4',
    category: 'watches',
    image: '/images/products/wa4.png',
    brand: 'Guess',
    name: 'Elegant Gold Watch',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    id: 'watches-5',
    category: 'watches',
    image: '/images/products/wa5.png',
    brand: 'Michael Kors',
    name: 'Luxury Silver Watch',
    price: '$150.00',
    oldPrice: '$180.00',
  },
  {
    id: 'watches-6',
    category: 'watches',
    image: '/images/products/wa6.png',
    brand: 'Swatch',
    name: 'Modern Casual Watch',
    price: '$75.00',
    oldPrice: '$90.00',
  },
];

const accessories: Product[] = [
  {
    id: 'accessories-1',
    category: 'accessories',
    image: '/images/products/ac1.png',
    brand: 'Ray-Ban',
    name: 'Classic Sunglasses',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    id: 'accessories-2',
    category: 'accessories',
    image: '/images/products/ac2.png',
    brand: 'Swarovski',
    name: 'Elegant Silver Necklace',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    id: 'accessories-3',
    category: 'accessories',
    image: '/images/products/ac3.png',
    brand: 'Pandora',
    name: 'Charm Bracelet',
    price: '$70.00',
    oldPrice: '$85.00',
  },
  {
    id: 'accessories-4',
    category: 'accessories',
    image: '/images/products/ac4.png',
    brand: 'Zara',
    name: 'Fashion Hair Accessories',
    price: '$20.00',
    oldPrice: '$28.00',
  },
  {
    id: 'accessories-5',
    category: 'accessories',
    image: '/images/products/ac5.png',
    brand: 'H&M',
    name: 'Classic Fashion Scarf',
    price: '$25.00',
    oldPrice: '$35.00',
  },
  {
    id: 'accessories-6',
    category: 'accessories',
    image: '/images/products/ac6.png',
    brand: 'Aldo',
    name: 'Elegant Jewelry Set',
    price: '$45.00',
    oldPrice: '$55.00',
  },
];

const winterWear: Product[] = [
  {
    id: 'winterWear-1',
    category: 'winter wear',
    image: '/images/products/ww1.png',
    brand: 'The North Face',
    name: 'Classic Winter Jacket',
    price: '$150.00',
    oldPrice: '$180.00',
  },
  {
    id: 'winterWear-2',
    category: 'winter wear',
    image: '/images/products/ww2.png',
    brand: 'Columbia',
    name: 'Warm Puffer Jacket',
    price: '$130.00',
    oldPrice: '$155.00',
  },
  {
    id: 'winterWear-3',
    category: 'winter wear',
    image: '/images/products/ww3.png',
    brand: 'Zara',
    name: 'Long Wool Coat',
    price: '$110.00',
    oldPrice: '$135.00',
  },
  {
    id: 'winterWear-4',
    category: 'winter wear',
    image: '/images/products/ww4.png',
    brand: 'H&M',
    name: 'Knitted Winter Sweater',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    id: 'winterWear-5',
    category: 'winter wear',
    image: '/images/products/ww5.png',
    brand: 'Uniqlo',
    name: 'Ultra Warm Down Vest',
    price: '$90.00',
    oldPrice: '$110.00',
  },
  {
    id: 'winterWear-6',
    category: 'winter wear',
    image: '/images/products/ww6.png',
    brand: 'Nike',
    name: 'Winter Sports Hoodie',
    price: '$75.00',
    oldPrice: '$90.00',
  },
];

const productsByCategory: Record<string, Product[]> = {
  't-shirts': products,
  'casual shirts': casualShirts,
  'formal shirts': formalShirts,
  jackets: jackets,
  'blazers & coats': blazersCoats,
  jeans: jeans,
  sherwanis: sherwanis,

  sarees,
  'ethnic wear': ethnicWear,
  'lehenga cholis': lehengaCholis,
  dresses,
  jumpsuits,

  shirts: kidsShirts,
  trousers: kidsTrousers,
  'party wear': kidsPartyWear,
  'innerwear & thermal': kidsInnerwearThermal,
  'track pants': kidsTrackPants,
  'value pack': kidsValuePack,

  flats,
  'casual shoes': casualShoes,
  heels,
  boots,
  'sports shoes & floaters': sportsShoes,

  bags,
  belts,
  wallets,
  watches,
  accessories,
  'winter wear': winterWear,
};

export const allProducts: Product[] = Object.values(productsByCategory).flat();

function formatCategory(category: string): string {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function findCategory(query: string): string | undefined {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return undefined;

  return Object.keys(productsByCategory).find((category) => {
    return formatCategory(category).toLowerCase() === normalizedQuery;
  });
}

export function createShopPage(category: string): HTMLElement {
  const page = document.createElement('main');
  page.className = styles.shopPage;
  const content = document.createElement('div');
  content.className = styles.shopPage__content;
  const title = document.createElement('h1');
  title.className = styles.shopPage__title;
  title.textContent = 'Shop';
  const layout = document.createElement('div');
  layout.className = styles.shopPage__layout;
  const sidebar = document.createElement('aside');
  sidebar.className = styles.catalogFilters;
  sidebar.setAttribute('aria-label', 'Product filters');
  const search = document.createElement('input');
  search.type = 'search';
  search.placeholder = 'Search products or categories';
  const categorySelect = document.createElement('select');
  categorySelect.add(new Option('All categories', 'all'));
  for (const key of Object.keys(productsByCategory)) {
    categorySelect.add(new Option(formatCategory(key), key));
  }
  for (const group of categoryGroups) {
    categorySelect.add(new Option(group.name, group.name.toLowerCase()));
  }
  const initialCategory = decodeURIComponent(category.toLowerCase().split('/').pop() || 'all');
  if ([...categorySelect.options].some((option) => option.value === initialCategory)) {
    categorySelect.value = initialCategory;
  }
  const minimum = document.createElement('input');
  const maximum = document.createElement('input');
  for (const input of [minimum, maximum]) {
    input.type = 'number';
    input.min = '0';
    input.step = 'any';
    input.placeholder = 'No limit';
  }
  const sort = document.createElement('select');
  sort.add(new Option('Original order', 'original'));
  sort.add(new Option('Price: Low to High', 'asc'));
  sort.add(new Option('Price: High to Low', 'desc'));
  function field(text: string, control: HTMLElement): HTMLLabelElement {
    const label = document.createElement('label');
    label.append(text, control);
    return label;
  }
  const reset = document.createElement('button');
  reset.type = 'button';
  reset.textContent = 'Reset filters';
  sidebar.append(
    field('Search', search),
    field('Category', categorySelect),
    field('Price from ($)', minimum),
    field('Price to ($)', maximum),
    field('Sort by', sort),
    reset,
  );
  const shopContent = document.createElement('section');
  shopContent.className = styles.shopPage__shopContent;

  const results = document.createElement('p');
  results.className = styles.shopPage__resultsInfo;
  results.setAttribute('role', 'status');

  const grid = document.createElement('div');
  grid.className = styles.shopPage__productsGrid;

  const empty = document.createElement('p');
  empty.className = styles.shopPage__empty;
  empty.textContent = 'No products found. Change your filters or reset them.';

  function render(): void {
    const group = categoryGroups.find((entry) => entry.name.toLowerCase() === categorySelect.value);

    const filters: CatalogFilters = {
      query: '',
      categories:
        categorySelect.value === 'all'
          ? []
          : group
            ? group.items.map((item) => item.toLowerCase())
            : [categorySelect.value],
      min: minimum.value === '' ? undefined : Number(minimum.value),
      max: maximum.value === '' ? undefined : Number(maximum.value),
      sort: sort.value as CatalogFilters['sort'],
    };

    const filteredProducts = filterProducts(
      allProducts,
      search.value.trim() ? { ...filters, categories: [] } : filters,
    );

    const query = search.value.trim().toLowerCase();

    const products = filteredProducts.filter((product) => {
      if (!query) return true;

      return (
        product.name.toLowerCase().includes(query) || product.brand.toLowerCase().includes(query)
      );
    });

    grid.replaceChildren(...products.map(createProductCard));

    results.hidden = products.length === 0;
    empty.hidden = true;

    if (products.length > 0) {
      results.textContent = `Showing ${products.length} results`;
    }
  }

  search.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    const foundCategory = findCategory(search.value);

    if (foundCategory) {
      categorySelect.value = foundCategory;
      search.value = '';
      render();
    }
  });

  for (const control of [search, minimum, maximum]) control.addEventListener('input', render);
  for (const control of [categorySelect, sort]) control.addEventListener('change', render);
  reset.addEventListener('click', () => {
    search.value = '';
    categorySelect.value = 'all';
    minimum.value = '';
    maximum.value = '';
    sort.value = 'original';
    render();
  });
  shopContent.append(results, empty, grid);
  layout.append(sidebar, shopContent);
  content.append(title, layout);
  page.append(createHeader(), content, createStoreBenefits(), createFooter());
  render();
  return page;
}
