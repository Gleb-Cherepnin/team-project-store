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

const otherCategories = ['Bags', 'Belts', 'Wallets', 'Watches', 'Accessories', 'Winter Wear'];

const products: Product[] = [
  {
    image: '/images/products/product-1.png',
    brand: 'Roadstar',
    name: 'Printed Cotton T-Shirt',
    price: '$38.00',
    oldPrice: '$40.00',
  },
  {
    image: '/images/products/t2.png',
    brand: 'Zara',
    name: 'Classic White T-Shirt',
    price: '$30.00',
    oldPrice: '$40.00',
  },
  {
    image: '/images/products/t3.png',
    brand: 'Zara',
    name: 'Cotton Regular Fit T-Shirt',
    price: '$20.00',
    oldPrice: '$30.00',
  },
  {
    image: '/images/products/t4.png',
    brand: 'H&M',
    name: 'Oversized Basic T-Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    image: '/images/products/t5.png',
    brand: 'KFK',
    name: 'Printed Graphic T-Shirt',
    price: '$28.00',
    oldPrice: '$38.00',
  },
  {
    image: '/images/products/t6.png',
    brand: 'Polo',
    name: 'Classic Cotton Polo T-Shirt',
    price: '$25.00',
    oldPrice: '$35.00',
  },
  {
    image: '/images/products/t7.png',
    brand: 'Zara',
    name: 'Slim Fit Basic T-Shirt',
    price: '$32.00',
    oldPrice: '$42.00',
  },
  {
    image: '/images/products/t8.png',
    brand: 'Zara',
    name: 'Soft Touch Cotton T-Shirt',
    price: '$24.00',
    oldPrice: '$34.00',
  },
  {
    image: '/images/products/t9.png',
    brand: 'Zara',
    name: 'Oversized Crew Neck T-Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
];

const casualShirts: Product[] = [
  {
    image: '/images/products/ch1.png',
    brand: 'Zara',
    name: 'Casual Cotton Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    image: '/images/products/ch2.png',
    brand: 'H&M',
    name: 'Relaxed Fit Shirt',
    price: '$28.00',
    oldPrice: '$38.00',
  },
  {
    image: '/images/products/ch3.png',
    brand: 'Roadstar',
    name: 'Checked Casual Shirt',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    image: '/images/products/ch4.png',
    brand: 'Levi’s',
    name: 'Denim Casual Shirt',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    image: '/images/products/ch5.png',
    brand: 'Zara',
    name: 'Linen Blend Shirt',
    price: '$32.00',
    oldPrice: '$42.00',
  },
  {
    image: '/images/products/ch6.png',
    brand: 'H&M',
    name: 'Striped Casual Shirt',
    price: '$30.00',
    oldPrice: '$40.00',
  },
  {
    image: '/images/products/ch7.png',
    brand: 'Roadstar',
    name: 'Regular Fit Shirt',
    price: '$38.00',
    oldPrice: '$48.00',
  },
  {
    image: '/images/products/ch8.png',
    brand: 'Zara',
    name: 'Oxford Casual Shirt',
    price: '$42.00',
    oldPrice: '$52.00',
  },
  {
    image: '/images/products/ch9.png',
    brand: 'H&M',
    name: 'Short Sleeve Shirt',
    price: '$25.00',
    oldPrice: '$35.00',
  },
];

const formalShirts: Product[] = [
  {
    image: '/images/products/ch11.png',
    brand: 'Zara',
    name: 'Slim Fit Formal Shirt',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    image: '/images/products/ch10.png',
    brand: 'H&M',
    name: 'Classic White Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    image: '/images/products/ch9.png',
    brand: 'Polo',
    name: 'Premium Office Shirt',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    image: '/images/products/ch8.png',
    brand: 'Zara',
    name: 'Regular Fit Dress Shirt',
    price: '$42.00',
    oldPrice: '$52.00',
  },
  {
    image: '/images/products/ch7.png',
    brand: 'H&M',
    name: 'Cotton Business Shirt',
    price: '$38.00',
    oldPrice: '$48.00',
  },
  {
    image: '/images/products/ch6.png',
    brand: 'Polo',
    name: 'Oxford Formal Shirt',
    price: '$55.00',
    oldPrice: '$65.00',
  },
  {
    image: '/images/products/ch5.png',
    brand: 'Zara',
    name: 'Classic Black Shirt',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    image: '/images/products/ch4.png',
    brand: 'H&M',
    name: 'Slim Cotton Shirt',
    price: '$36.00',
    oldPrice: '$46.00',
  },
  {
    image: '/images/products/ch3.png',
    brand: 'Polo',
    name: 'Premium White Shirt',
    price: '$62.00',
    oldPrice: '$72.00',
  },
];

const jackets: Product[] = [
  {
    image: '/images/products/j1.png',
    brand: 'Zara',
    name: 'Classic Bomber Jacket',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    image: '/images/products/j2.png',
    brand: 'H&M',
    name: 'Lightweight Jacket',
    price: '$70.00',
    oldPrice: '$85.00',
  },
  {
    image: '/images/products/j3.png',
    brand: 'Levi’s',
    name: 'Denim Jacket',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    image: '/images/products/j4.png',
    brand: 'Roadstar',
    name: 'Casual Zip Jacket',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    image: '/images/products/j5.png',
    brand: 'Zara',
    name: 'Oversized Jacket',
    price: '$90.00',
    oldPrice: '$110.00',
  },
  {
    image: '/images/products/j6.png',
    brand: 'H&M',
    name: 'Padded Winter Jacket',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    image: '/images/products/j7.png',
    brand: 'Polo',
    name: 'Sport Jacket',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    image: '/images/products/j8.png',
    brand: 'Levi’s',
    name: 'Classic Trucker Jacket',
    price: '$100.00',
    oldPrice: '$120.00',
  },
  {
    image: '/images/products/j9.png',
    brand: 'Zara',
    name: 'Faux Leather Jacket',
    price: '$115.00',
    oldPrice: '$135.00',
  },
];

const blazersCoats: Product[] = [
  {
    image: '/images/products/с1.png',
    brand: 'Zara',
    name: 'Classic Black Blazer',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    image: '/images/products/с2.png',
    brand: 'H&M',
    name: 'Slim Fit Blazer',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    image: '/images/products/с3.png',
    brand: 'Polo',
    name: 'Wool Blend Coat',
    price: '$180.00',
    oldPrice: '$210.00',
  },
  {
    image: '/images/products/с4.png',
    brand: 'Zara',
    name: 'Casual Beige Blazer',
    price: '$105.00',
    oldPrice: '$125.00',
  },
  {
    image: '/images/products/с5.png',
    brand: 'H&M',
    name: 'Long Wool Coat',
    price: '$150.00',
    oldPrice: '$175.00',
  },
  {
    image: '/images/products/с6.png',
    brand: 'Polo',
    name: 'Tailored Navy Blazer',
    price: '$140.00',
    oldPrice: '$165.00',
  },
  {
    image: '/images/products/с7.png',
    brand: 'Zara',
    name: 'Oversized Grey Blazer',
    price: '$120.00',
    oldPrice: '$140.00',
  },
  {
    image: '/images/products/с8.png',
    brand: 'H&M',
    name: 'Classic Trench Coat',
    price: '$135.00',
    oldPrice: '$155.00',
  },
  {
    image: '/images/products/с9.png',
    brand: 'Polo',
    name: 'Premium Formal Blazer',
    price: '$160.00',
    oldPrice: '$185.00',
  },
];

const jeans: Product[] = [
  {
    image: '/images/products/je1.png',
    brand: 'Levi’s',
    name: '501 Original Straight Jeans',
    price: '$89.00',
    oldPrice: '$110.00',
  },
  {
    image: '/images/products/je2.png',
    brand: 'Wrangler',
    name: 'Classic Regular Fit Jeans',
    price: '$79.00',
    oldPrice: '$99.00',
  },
  {
    image: '/images/products/je3.png',
    brand: 'Lee',
    name: 'Extreme Motion Slim Jeans',
    price: '$85.00',
    oldPrice: '$105.00',
  },
  {
    image: '/images/products/je4.png',
    brand: 'Calvin Klein',
    name: 'Slim Fit Denim Jeans',
    price: '$110.00',
    oldPrice: '$135.00',
  },
  {
    image: '/images/products/je5.png',
    brand: 'Tommy Hilfiger',
    name: 'Classic Blue Denim Jeans',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    image: '/images/products/je6.png',
    brand: 'Levi’s',
    name: '511 Slim Fit Jeans',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    image: '/images/products/je7.png',
    brand: 'Wrangler',
    name: 'Texas Stretch Regular Jeans',
    price: '$82.00',
    oldPrice: '$102.00',
  },
  {
    image: '/images/products/je8.png',
    brand: 'Lee',
    name: 'Straight Leg Denim Jeans',
    price: '$88.00',
    oldPrice: '$108.00',
  },
  {
    image: '/images/products/je9.png',
    brand: 'Calvin Klein',
    name: 'Tapered Fit Jeans',
    price: '$115.00',
    oldPrice: '$140.00',
  },
];

const sherwanis: Product[] = [
  {
    image: '/images/products/s1.jpg',
    brand: 'Manyavar',
    name: 'Classic Wedding Sherwani',
    price: '$220.00',
    oldPrice: '$250.00',
  },
  {
    image: '/images/products/s2.jpg',
    brand: 'Manyavar',
    name: 'Embroidered Sherwani',
    price: '$280.00',
    oldPrice: '$320.00',
  },
  {
    image: '/images/products/s3.jpg',
    brand: 'Fabindia',
    name: 'Traditional Ivory Sherwani',
    price: '$240.00',
    oldPrice: '$275.00',
  },
  {
    image: '/images/products/s4.jpg',
    brand: 'Manyavar',
    name: 'Royal Blue Sherwani',
    price: '$260.00',
    oldPrice: '$300.00',
  },
  {
    image: '/images/products/s5.jpg',
    brand: 'Manyavar',
    name: 'Silk Wedding Sherwani',
    price: '$310.00',
    oldPrice: '$350.00',
  },
  {
    image: '/images/products/s6.jpg',
    brand: 'Fabindia',
    name: 'Classic Cream Sherwani',
    price: '$230.00',
    oldPrice: '$265.00',
  },
  {
    image: '/images/products/s7.jpg',
    brand: 'Manyavar',
    name: 'Gold Embroidered Sherwani',
    price: '$330.00',
    oldPrice: '$370.00',
  },
  {
    image: '/images/products/s8.jpg',
    brand: 'Manyavar',
    name: 'Modern Fit Sherwani',
    price: '$250.00',
    oldPrice: '$290.00',
  },
  {
    image: '/images/products/s9.jpg',
    brand: 'Fabindia',
    name: 'Festive Sherwani Set',
    price: '$275.00',
    oldPrice: '$315.00',
  },
];

const sarees: Product[] = [
  {
    image: '/images/products/sa1.png',
    brand: 'Fabindia',
    name: 'Traditional Silk Saree',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    image: '/images/products/sa2.png',
    brand: 'Manyavar',
    name: 'Red Wedding Saree',
    price: '$150.00',
    oldPrice: '$180.00',
  },
  {
    image: '/images/products/sa3.png',
    brand: 'Fabindia',
    name: 'Elegant Floral Saree',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    image: '/images/products/sa4.png',
    brand: 'Suta',
    name: 'Cotton Printed Saree',
    price: '$85.00',
    oldPrice: '$105.00',
  },
  {
    image: '/images/products/sa5.png',
    brand: 'Manyavar',
    name: 'Golden Embroidered Saree',
    price: '$180.00',
    oldPrice: '$210.00',
  },
  {
    image: '/images/products/sa6.png',
    brand: 'Fabindia',
    name: 'Classic Blue Silk Saree',
    price: '$130.00',
    oldPrice: '$155.00',
  },
  {
    image: '/images/products/sa7.png',
    brand: 'Suta',
    name: 'Pastel Pink Saree',
    price: '$90.00',
    oldPrice: '$110.00',
  },
  {
    image: '/images/products/sa8.png',
    brand: 'Manyavar',
    name: 'Bridal Designer Saree',
    price: '$220.00',
    oldPrice: '$250.00',
  },
  {
    image: '/images/products/sa9.png',
    brand: 'Fabindia',
    name: 'Green Traditional Saree',
    price: '$110.00',
    oldPrice: '$135.00',
  },
];

const ethnicWear: Product[] = [
  {
    image: '/images/products/d1.png',
    brand: 'Fabindia',
    name: 'Printed Ethnic Kurta',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    image: '/images/products/d2.png',
    brand: 'Biba',
    name: 'Floral Anarkali Suit',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    image: '/images/products/d3.png',
    brand: 'Manyavar',
    name: 'Traditional Embroidered Set',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    image: '/images/products/d4.png',
    brand: 'Fabindia',
    name: 'Cotton Ethnic Dress',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    image: '/images/products/d5.png',
    brand: 'Biba',
    name: 'Printed Kurta Set',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    image: '/images/products/d6.png',
    brand: 'Aurelia',
    name: 'Elegant Ethnic Tunic',
    price: '$50.00',
    oldPrice: '$65.00',
  },
  {
    image: '/images/products/d7.png',
    brand: 'Fabindia',
    name: 'Traditional Cotton Suit',
    price: '$90.00',
    oldPrice: '$110.00',
  },
  {
    image: '/images/products/d8.png',
    brand: 'Biba',
    name: 'Festive Anarkali Dress',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    image: '/images/products/d9.png',
    brand: 'Manyavar',
    name: 'Designer Ethnic Set',
    price: '$140.00',
    oldPrice: '$165.00',
  },
];

const lehengaCholis: Product[] = [
  {
    image: '/images/products/d9.png',
    brand: 'Manyavar',
    name: 'Red Bridal Lehenga',
    price: '$250.00',
    oldPrice: '$290.00',
  },
  {
    image: '/images/products/d8.png',
    brand: 'Biba',
    name: 'Pink Embroidered Lehenga',
    price: '$180.00',
    oldPrice: '$210.00',
  },
  {
    image: '/images/products/d7.png',
    brand: 'Fabindia',
    name: 'Traditional Blue Lehenga',
    price: '$160.00',
    oldPrice: '$190.00',
  },
  {
    image: '/images/products/d6.png',
    brand: 'Manyavar',
    name: 'Golden Wedding Lehenga',
    price: '$280.00',
    oldPrice: '$320.00',
  },
  {
    image: '/images/products/d5.png',
    brand: 'Biba',
    name: 'Pastel Floral Lehenga',
    price: '$190.00',
    oldPrice: '$220.00',
  },
  {
    image: '/images/products/d4.png',
    brand: 'Manyavar',
    name: 'Royal Purple Lehenga',
    price: '$230.00',
    oldPrice: '$270.00',
  },
  {
    image: '/images/products/d3.png',
    brand: 'Fabindia',
    name: 'Green Silk Lehenga',
    price: '$175.00',
    oldPrice: '$205.00',
  },
  {
    image: '/images/products/d2.png',
    brand: 'Biba',
    name: 'Peach Party Lehenga',
    price: '$165.00',
    oldPrice: '$195.00',
  },
  {
    image: '/images/products/d1.png',
    brand: 'Manyavar',
    name: 'Maroon Bridal Lehenga',
    price: '$300.00',
    oldPrice: '$350.00',
  },
];

const dresses: Product[] = [
  {
    image: '/images/products/d1.png',
    brand: 'Zara',
    name: 'Floral Summer Dress',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    image: '/images/products/d3.png',
    brand: 'H&M',
    name: 'Classic Black Dress',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    image: '/images/products/d5.png',
    brand: 'Mango',
    name: 'Elegant Midi Dress',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    image: '/images/products/d7.png',
    brand: 'Zara',
    name: 'Satin Evening Dress',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    image: '/images/products/d9.png',
    brand: 'H&M',
    name: 'Casual Cotton Dress',
    price: '$45.00',
    oldPrice: '$60.00',
  },
  {
    image: '/images/products/d8.png',
    brand: 'Mango',
    name: 'Pleated Maxi Dress',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    image: '/images/products/d6.png',
    brand: 'Zara',
    name: 'Floral Midi Dress',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    image: '/images/products/d4.png',
    brand: 'H&M',
    name: 'Linen Summer Dress',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    image: '/images/products/d2.png',
    brand: 'Mango',
    name: 'Elegant Wrap Dress',
    price: '$90.00',
    oldPrice: '$110.00',
  },
];

const jumpsuits: Product[] = [
  {
    image: '/images/products/ju1.png',
    brand: 'Zara',
    name: 'Black Wide Leg Jumpsuit',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    image: '/images/products/ju2.png',
    brand: 'Mango',
    name: 'Elegant Belted Jumpsuit',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    image: '/images/products/ju3.png',
    brand: 'H&M',
    name: 'Casual Denim Jumpsuit',
    price: '$75.00',
    oldPrice: '$90.00',
  },
];

const kidsShirts: Product[] = [
  {
    image: '/images/products/ch1.png',
    brand: 'Zara',
    name: 'Casual Cotton Shirt',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    image: '/images/products/ch2.png',
    brand: 'H&M',
    name: 'Relaxed Fit Shirt',
    price: '$28.00',
    oldPrice: '$38.00',
  },
  {
    image: '/images/products/ch3.png',
    brand: 'Roadstar',
    name: 'Checked Casual Shirt',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    image: '/images/products/ch4.png',
    brand: 'Levi’s',
    name: 'Denim Casual Shirt',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    image: '/images/products/ch5.png',
    brand: 'Zara',
    name: 'Linen Blend Shirt',
    price: '$32.00',
    oldPrice: '$42.00',
  },
  {
    image: '/images/products/ch6.png',
    brand: 'H&M',
    name: 'Striped Casual Shirt',
    price: '$30.00',
    oldPrice: '$40.00',
  },
];

const kidsTrousers: Product[] = [
  {
    image: '/images/products/tr1.png',
    brand: 'H&M Kids',
    name: 'Classic Casual Trousers',
    price: '$25.00',
    oldPrice: '$31.00',
  },
  {
    image: '/images/products/tr2.png',
    brand: 'Zara Kids',
    name: 'Slim Fit Chino Trousers',
    price: '$30.00',
    oldPrice: '$37.00',
  },
  {
    image: '/images/products/tr3.png',
    brand: 'Gap Kids',
    name: 'Cotton Straight Trousers',
    price: '$28.00',
    oldPrice: '$35.00',
  },
  {
    image: '/images/products/tr4.png',
    brand: 'Next Kids',
    name: 'Relaxed Fit Trousers',
    price: '$27.00',
    oldPrice: '$34.00',
  },
  {
    image: '/images/products/tr5.png',
    brand: 'Mango Kids',
    name: 'Smart School Trousers',
    price: '$32.00',
    oldPrice: '$39.00',
  },
  {
    image: '/images/products/tr6.png',
    brand: 'Nike Kids',
    name: 'Everyday Woven Trousers',
    price: '$35.00',
    oldPrice: '$42.00',
  },
];

const kidsPartyWear: Product[] = [
  {
    image: '/images/products/pv1.png',
    brand: 'Zara Kids',
    name: 'Elegant Party Dress',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    image: '/images/products/pv2.png',
    brand: 'Next Kids',
    name: 'Classic Party Suit',
    price: '$55.00',
    oldPrice: '$65.00',
  },
  {
    image: '/images/products/pv3.png',
    brand: 'Mango Kids',
    name: 'Floral Celebration Dress',
    price: '$42.00',
    oldPrice: '$50.00',
  },
];

const kidsInnerwearThermal: Product[] = [
  {
    image: '/images/products/ki1.png',
    brand: 'H&M Kids',
    name: 'Cotton Basic Underwear Set',
    price: '$18.00',
    oldPrice: '$22.00',
  },
  {
    image: '/images/products/ki2.png',
    brand: 'Next Kids',
    name: 'Soft Cotton Vest Set',
    price: '$16.00',
    oldPrice: '$20.00',
  },
  {
    image: '/images/products/ki3.png',
    brand: 'Uniqlo Kids',
    name: 'HEATTECH Thermal Top',
    price: '$20.00',
    oldPrice: '$25.00',
  },
  {
    image: '/images/products/ki4.png',
    brand: 'Gap Kids',
    name: 'Thermal Leggings',
    price: '$19.00',
    oldPrice: '$24.00',
  },
  {
    image: '/images/products/ki5.png',
    brand: 'Carter’s',
    name: 'Everyday Underwear Pack',
    price: '$22.00',
    oldPrice: '$28.00',
  },
  {
    image: '/images/products/ki6.png',
    brand: 'Mothercare',
    name: 'Warm Thermal Set',
    price: '$25.00',
    oldPrice: '$31.00',
  },
];

const kidsTrackPants: Product[] = [
  {
    image: '/images/products/tp1.png',
    brand: 'Nike Kids',
    name: 'Sportswear Track Pants',
    price: '$28.00',
    oldPrice: '$35.00',
  },
  {
    image: '/images/products/tp2.png',
    brand: 'Adidas Kids',
    name: 'Classic Three Stripe Pants',
    price: '$30.00',
    oldPrice: '$37.00',
  },
  {
    image: '/images/products/tp3.png',
    brand: 'Puma Kids',
    name: 'Essential Jogger Pants',
    price: '$26.00',
    oldPrice: '$33.00',
  },
  {
    image: '/images/products/tp4.png',
    brand: 'H&M Kids',
    name: 'Cotton Relaxed Track Pants',
    price: '$22.00',
    oldPrice: '$28.00',
  },
  {
    image: '/images/products/tp5.png',
    brand: 'Under Armour',
    name: 'Sport Training Pants',
    price: '$32.00',
    oldPrice: '$39.00',
  },
  {
    image: '/images/products/tp6.png',
    brand: 'Reebok Kids',
    name: 'Classic Training Joggers',
    price: '$27.00',
    oldPrice: '$34.00',
  },
];

const kidsValuePack: Product[] = [
  {
    image: '/images/products/tp1.png',
    brand: 'H&M Kids',
    name: 'Basic T-Shirt 3 Pack',
    price: '$25.00',
    oldPrice: '$32.00',
  },
  {
    image: '/images/products/tr2.png',
    brand: 'Next Kids',
    name: 'Cotton Vest 3 Pack',
    price: '$20.00',
    oldPrice: '$26.00',
  },
  {
    image: '/images/products/ki3.png',
    brand: 'Carter’s',
    name: 'Everyday Bodysuit 5 Pack',
    price: '$30.00',
    oldPrice: '$38.00',
  },
  {
    image: '/images/products/pv1.png',
    brand: 'Gap Kids',
    name: 'Colorful Socks 5 Pack',
    price: '$15.00',
    oldPrice: '$20.00',
  },
  {
    image: '/images/products/ch5.png',
    brand: 'Zara Kids',
    name: 'Essential T-Shirt 2 Pack',
    price: '$22.00',
    oldPrice: '$28.00',
  },
  {
    image: '/images/products/tr6.png',
    brand: 'Mothercare',
    name: 'Cotton Pyjama 2 Pack',
    price: '$28.00',
    oldPrice: '$35.00',
  },
];

const flats: Product[] = [
  {
    image: '/images/products/fl1.png',
    brand: 'Bata',
    name: 'Classic Ballet Flats',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    image: '/images/products/fl2.png',
    brand: 'H&M',
    name: 'Leather Pointed Flats',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    image: '/images/products/fl3.png',
    brand: 'Zara',
    name: 'Elegant Bow Flats',
    price: '$38.00',
    oldPrice: '$48.00',
  },
  {
    image: '/images/products/fl4.png',
    brand: 'Clarks',
    name: 'Comfort Casual Flats',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    image: '/images/products/fl5.png',
    brand: 'Aldo',
    name: 'Minimalist Slip-On Flats',
    price: '$42.00',
    oldPrice: '$52.00',
  },
  {
    image: '/images/products/fl6.png',
    brand: 'Mango',
    name: 'Suede Ballerina Flats',
    price: '$50.00',
    oldPrice: '$60.00',
  },
];

const casualShoes: Product[] = [
  {
    image: '/images/products/cs1.png',
    brand: 'Nike',
    name: 'Classic Casual Sneakers',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    image: '/images/products/cs2.png',
    brand: 'Adidas',
    name: 'Everyday Street Shoes',
    price: '$70.00',
    oldPrice: '$85.00',
  },
  {
    image: '/images/products/cs3.png',
    brand: 'Puma',
    name: 'Urban Lifestyle Sneakers',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    image: '/images/products/cs4.png',
    brand: 'Zara',
    name: 'Minimal Leather Shoes',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    image: '/images/products/cs5.png',
    brand: 'Skechers',
    name: 'Comfort Walking Shoes',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    image: '/images/products/cs6.png',
    brand: 'Reebok',
    name: 'Retro Casual Sneakers',
    price: '$68.00',
    oldPrice: '$82.00',
  },
];

const heels: Product[] = [
  {
    image: '/images/products/he1.png',
    brand: 'Aldo',
    name: 'Classic High Heel Pumps',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    image: '/images/products/he2.png',
    brand: 'Zara',
    name: 'Elegant Strappy Heels',
    price: '$70.00',
    oldPrice: '$85.00',
  },
  {
    image: '/images/products/he3.png',
    brand: 'Mango',
    name: 'Pointed Toe Stilettos',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    image: '/images/products/he4.png',
    brand: 'Guess',
    name: 'Luxury Block Heels',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    image: '/images/products/he5.png',
    brand: 'Steve Madden',
    name: 'Open Toe Party Heels',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    image: '/images/products/he6.png',
    brand: 'H&M',
    name: 'Minimalist Kitten Heels',
    price: '$50.00',
    oldPrice: '$65.00',
  },
];

const boots: Product[] = [
  {
    image: '/images/products/bo1.png',
    brand: 'Timberland',
    name: 'Classic Leather Ankle Boots',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    image: '/images/products/bo2.png',
    brand: 'Zara',
    name: 'Elegant Knee High Boots',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    image: '/images/products/bo3.png',
    brand: 'Dr. Martens',
    name: 'Classic Lace-Up Boots',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    image: '/images/products/bo4.png',
    brand: 'Clarks',
    name: 'Comfort Chelsea Boots',
    price: '$90.00',
    oldPrice: '$105.00',
  },
  {
    image: '/images/products/bo5.png',
    brand: 'Aldo',
    name: 'Fashion Chunky Boots',
    price: '$100.00',
    oldPrice: '$120.00',
  },
  {
    image: '/images/products/bo6.png',
    brand: 'H&M',
    name: 'Casual Suede Boots',
    price: '$80.00',
    oldPrice: '$95.00',
  },
];

const sportsShoes: Product[] = [
  {
    image: '/images/products/ss1.png',
    brand: 'Nike',
    name: 'Air Running Sneakers',
    price: '$110.00',
    oldPrice: '$130.00',
  },
  {
    image: '/images/products/ss2.png',
    brand: 'Adidas',
    name: 'Ultraboost Running Shoes',
    price: '$125.00',
    oldPrice: '$145.00',
  },
  {
    image: '/images/products/ss3.png',
    brand: 'Puma',
    name: 'Training Sports Sneakers',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    image: '/images/products/ss4.png',
    brand: 'Reebok',
    name: 'Classic Fitness Shoes',
    price: '$75.00',
    oldPrice: '$90.00',
  },
  {
    image: '/images/products/bo5.png',
    brand: 'Skechers',
    name: 'Lightweight Walking Shoes',
    price: '$90.00',
    oldPrice: '$105.00',
  },
  {
    image: '/images/products/bo6.png',
    brand: 'New Balance',
    name: 'Athletic Running Sneakers',
    price: '$115.00',
    oldPrice: '$135.00',
  },
];

const bags: Product[] = [
  {
    image: '/images/products/ba1.png',
    brand: 'Guess',
    name: 'Classic Leather Handbag',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    image: '/images/products/ba2.png',
    brand: 'Zara',
    name: 'Elegant Shoulder Bag',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    image: '/images/products/ba3.png',
    brand: 'H&M',
    name: 'Casual Crossbody Bag',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    image: '/images/products/ba4.png',
    brand: 'Aldo',
    name: 'Mini Evening Bag',
    price: '$50.00',
    oldPrice: '$65.00',
  },
  {
    image: '/images/products/ba5.png',
    brand: 'Michael Kors',
    name: 'Structured Tote Bag',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    image: '/images/products/ba6.png',
    brand: 'Mango',
    name: 'Minimalist Shopper Bag',
    price: '$45.00',
    oldPrice: '$60.00',
  },
];

const belts: Product[] = [
  {
    image: '/images/products/be1.png',
    brand: "Levi's",
    name: 'Classic Leather Belt',
    price: '$30.00',
    oldPrice: '$40.00',
  },
  {
    image: '/images/products/be2.png',
    brand: 'Guess',
    name: 'Designer Logo Belt',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    image: '/images/products/be3.png',
    brand: 'Zara',
    name: 'Minimalist Buckle Belt',
    price: '$25.00',
    oldPrice: '$35.00',
  },
  {
    image: '/images/products/be4.png',
    brand: 'Tommy Hilfiger',
    name: 'Casual Reversible Belt',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    image: '/images/products/be5.png',
    brand: 'H&M',
    name: 'Classic Brown Belt',
    price: '$20.00',
    oldPrice: '$28.00',
  },
  {
    image: '/images/products/be6.png',
    brand: 'Calvin Klein',
    name: 'Premium Leather Belt',
    price: '$50.00',
    oldPrice: '$65.00',
  },
];

const wallets: Product[] = [
  {
    image: '/images/products/wl1.png',
    brand: 'Guess',
    name: 'Classic Leather Wallet',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    image: '/images/products/wl2.png',
    brand: 'Tommy Hilfiger',
    name: 'Compact Bifold Wallet',
    price: '$40.00',
    oldPrice: '$50.00',
  },
  {
    image: '/images/products/wl3.png',
    brand: 'Calvin Klein',
    name: 'Minimalist Card Holder',
    price: '$30.00',
    oldPrice: '$40.00',
  },
  {
    image: '/images/products/wl4.png',
    brand: 'Fossil',
    name: 'Vintage Leather Wallet',
    price: '$45.00',
    oldPrice: '$55.00',
  },
  {
    image: '/images/products/wl5.png',
    brand: 'H&M',
    name: 'Slim Everyday Wallet',
    price: '$20.00',
    oldPrice: '$28.00',
  },
  {
    image: '/images/products/wl6.png',
    brand: 'Puma',
    name: 'Sporty Zip Wallet',
    price: '$25.00',
    oldPrice: '$35.00',
  },
];

const watches: Product[] = [
  {
    image: '/images/products/wa1.png',
    brand: 'Casio',
    name: 'Classic Digital Watch',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    image: '/images/products/wa2.png',
    brand: 'Fossil',
    name: 'Minimalist Analog Watch',
    price: '$95.00',
    oldPrice: '$115.00',
  },
  {
    image: '/images/products/wa3.png',
    brand: 'Timex',
    name: 'Classic Leather Watch',
    price: '$65.00',
    oldPrice: '$80.00',
  },
  {
    image: '/images/products/wa4.png',
    brand: 'Guess',
    name: 'Elegant Gold Watch',
    price: '$120.00',
    oldPrice: '$145.00',
  },
  {
    image: '/images/products/wa5.png',
    brand: 'Michael Kors',
    name: 'Luxury Silver Watch',
    price: '$150.00',
    oldPrice: '$180.00',
  },
  {
    image: '/images/products/wa6.png',
    brand: 'Swatch',
    name: 'Modern Casual Watch',
    price: '$75.00',
    oldPrice: '$90.00',
  },
];

const accessories: Product[] = [
  {
    image: '/images/products/ac1.png',
    brand: 'Ray-Ban',
    name: 'Classic Sunglasses',
    price: '$60.00',
    oldPrice: '$75.00',
  },
  {
    image: '/images/products/ac2.png',
    brand: 'Swarovski',
    name: 'Elegant Silver Necklace',
    price: '$85.00',
    oldPrice: '$100.00',
  },
  {
    image: '/images/products/ac3.png',
    brand: 'Pandora',
    name: 'Charm Bracelet',
    price: '$70.00',
    oldPrice: '$85.00',
  },
  {
    image: '/images/products/ac4.png',
    brand: 'Zara',
    name: 'Fashion Hair Accessories',
    price: '$20.00',
    oldPrice: '$28.00',
  },
  {
    image: '/images/products/ac5.png',
    brand: 'H&M',
    name: 'Classic Fashion Scarf',
    price: '$25.00',
    oldPrice: '$35.00',
  },
  {
    image: '/images/products/ac6.png',
    brand: 'Aldo',
    name: 'Elegant Jewelry Set',
    price: '$45.00',
    oldPrice: '$55.00',
  },
];

const winterWear: Product[] = [
  {
    image: '/images/products/ww1.png',
    brand: 'The North Face',
    name: 'Classic Winter Jacket',
    price: '$150.00',
    oldPrice: '$180.00',
  },
  {
    image: '/images/products/ww2.png',
    brand: 'Columbia',
    name: 'Warm Puffer Jacket',
    price: '$130.00',
    oldPrice: '$155.00',
  },
  {
    image: '/images/products/ww3.png',
    brand: 'Zara',
    name: 'Long Wool Coat',
    price: '$110.00',
    oldPrice: '$135.00',
  },
  {
    image: '/images/products/ww4.png',
    brand: 'H&M',
    name: 'Knitted Winter Sweater',
    price: '$55.00',
    oldPrice: '$70.00',
  },
  {
    image: '/images/products/ww5.png',
    brand: 'Uniqlo',
    name: 'Ultra Warm Down Vest',
    price: '$90.00',
    oldPrice: '$110.00',
  },
  {
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

function formatCategory(category: string): string {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function navigateToCategory(category: string, group?: string): void {
  const categoryPath = group
    ? `${group.toLowerCase()}/${category.toLowerCase()}`
    : category.toLowerCase();

  window.location.hash = `shop/${encodeURIComponent(categoryPath)}`;
}

export function createShopPage(category: string): HTMLElement {
  const page = document.createElement('main');
  page.className = styles.shopPage;

  const header = createHeader();

  const content = document.createElement('div');
  content.className = styles.shopPage__content;

  const categoryParts = category.toLowerCase().split('/');
  const selectedCategory = categoryParts[categoryParts.length - 1];

  let selectedGroup = categoryParts.length > 1 ? categoryParts[0] : '';

  if (!selectedGroup) {
    const matchingGroup = categoryGroups.find((group) =>
      group.items.some((item) => item.toLowerCase() === selectedCategory),
    );

    if (matchingGroup) {
      selectedGroup = matchingGroup.name.toLowerCase();
    }
  }

  // Selected category title
  const title = document.createElement('h1');
  title.className = styles.shopPage__title;
  title.textContent = `Shop ${formatCategory(selectedCategory)}`;

  // Main layout
  const layout = document.createElement('div');
  layout.className = styles.shopPage__layout;

  // Sidebar
  const sidebar = document.createElement('aside');
  sidebar.className = styles.shopPage__sidebar;

  // Categories section
  const categoriesSection = document.createElement('section');
  categoriesSection.className = styles.shopPage__categories;

  const categoriesHeader = document.createElement('div');
  categoriesHeader.className = styles.shopPage__categoriesHeader;

  const categoriesTitle = document.createElement('h2');
  categoriesTitle.className = styles.shopPage__categoriesTitle;
  categoriesTitle.textContent = 'Product Categories';

  const collapseButton = document.createElement('button');
  collapseButton.className = styles.shopPage__collapseButton;
  collapseButton.type = 'button';
  collapseButton.setAttribute('aria-label', 'Collapse categories');
  collapseButton.setAttribute('aria-expanded', 'true');

  const collapseArrow = document.createElement('span');
  collapseArrow.className = styles.shopPage__collapseArrow;

  collapseButton.append(collapseArrow);
  categoriesHeader.append(categoriesTitle, collapseButton);

  const categoriesList = document.createElement('div');
  categoriesList.className = styles.shopPage__categoriesList;

  function createCheckbox(
    name: string,
    isChecked: boolean,
    onChange: () => void,
  ): HTMLLabelElement {
    const label = document.createElement('label');
    label.className = styles.shopPage__categoryLabel;

    const checkbox = document.createElement('input');
    checkbox.className = styles.shopPage__checkbox;
    checkbox.type = 'checkbox';
    checkbox.name = 'shop-category';
    checkbox.checked = isChecked;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        onChange();
      }
    });

    const text = document.createElement('span');
    text.className = styles.shopPage__categoryName;
    text.textContent = name;

    label.append(checkbox, text);

    return label;
  }

  categoryGroups.forEach((group) => {
    const groupElement = document.createElement('div');
    groupElement.className = styles.shopPage__group;

    const groupRow = document.createElement('div');
    groupRow.className = styles.shopPage__groupRow;

    const normalizedGroup = group.name.toLowerCase();

    const isGroupSelected = selectedGroup === normalizedGroup;

    const groupCheckbox = createCheckbox(group.name, isGroupSelected, () => {
      navigateToCategory(group.name);
    });

    const expandButton = document.createElement('button');
    expandButton.className = styles.shopPage__expandButton;
    expandButton.type = 'button';
    expandButton.textContent = '+';
    expandButton.setAttribute('aria-label', `Expand ${group.name}`);

    const subcategories = document.createElement('div');
    subcategories.className = styles.shopPage__subcategories;

    const isGroupOpen =
      selectedGroup === normalizedGroup ||
      (!selectedGroup && group.items.some((item) => item.toLowerCase() === selectedCategory));

    subcategories.hidden = !isGroupOpen;
    expandButton.textContent = isGroupOpen ? '−' : '+';

    expandButton.addEventListener('click', () => {
      subcategories.hidden = !subcategories.hidden;
      expandButton.textContent = subcategories.hidden ? '+' : '−';
      expandButton.setAttribute(
        'aria-label',
        `${subcategories.hidden ? 'Expand' : 'Collapse'} ${group.name}`,
      );
    });

    group.items.forEach((item) => {
      const itemCheckbox = createCheckbox(
        item,
        selectedCategory === item.toLowerCase() && selectedGroup === normalizedGroup,
        () => navigateToCategory(item, group.name),
      );

      subcategories.append(itemCheckbox);
    });

    groupRow.append(groupCheckbox, expandButton);
    groupElement.append(groupRow, subcategories);
    categoriesList.append(groupElement);
  });

  otherCategories.forEach((item) => {
    const itemCheckbox = createCheckbox(
      item,
      !selectedGroup && selectedCategory === item.toLowerCase(),
      () => navigateToCategory(item),
    );

    categoriesList.append(itemCheckbox);
  });

  collapseButton.addEventListener('click', () => {
    const isCollapsed = categoriesList.classList.toggle(
      styles['shopPage__categoriesList--collapsed'],
    );

    collapseArrow.classList.toggle(styles['shopPage__collapseArrow--closed'], isCollapsed);

    collapseButton.setAttribute(
      'aria-label',
      isCollapsed ? 'Expand categories' : 'Collapse categories',
    );

    collapseButton.setAttribute('aria-expanded', String(!isCollapsed));
  });

  categoriesSection.append(categoriesHeader, categoriesList);

  // Filter by Price
  const priceFilter = document.createElement('section');
  priceFilter.className = styles.shopPage__priceFilter;

  const priceFilterHeader = document.createElement('div');
  priceFilterHeader.className = styles.shopPage__priceFilterHeader;

  const priceFilterTitle = document.createElement('h2');
  priceFilterTitle.className = styles.shopPage__priceFilterTitle;
  priceFilterTitle.textContent = 'Filter by Price';

  const priceCollapseButton = document.createElement('button');
  priceCollapseButton.className = styles.shopPage__collapseButton;
  priceCollapseButton.type = 'button';
  priceCollapseButton.setAttribute('aria-label', 'Collapse price filter');
  priceCollapseButton.setAttribute('aria-expanded', 'true');

  const priceCollapseArrow = document.createElement('span');
  priceCollapseArrow.className = styles.shopPage__collapseArrow;

  priceCollapseButton.append(priceCollapseArrow);
  priceFilterHeader.append(priceFilterTitle, priceCollapseButton);

  const priceFilterContent = document.createElement('div');
  priceFilterContent.className = styles.shopPage__priceFilterContent;

  const priceText = document.createElement('p');
  priceText.className = styles.shopPage__priceText;

  const priceSlider = document.createElement('div');
  priceSlider.className = styles.shopPage__priceSlider;

  const priceTrack = document.createElement('div');
  priceTrack.className = styles.shopPage__priceTrack;

  const currentProducts = productsByCategory[selectedCategory] || [];

  const prices = currentProducts.map((product) => Number(product.price.replace('$', '')));

  const categoryMinPrice = prices.length ? Math.min(...prices) : 0;
  const categoryMaxPrice = prices.length ? Math.max(...prices) : 0;

  let minPrice = categoryMinPrice;
  let maxPrice = categoryMaxPrice;

  const minRange = document.createElement('input');
  minRange.className = styles.shopPage__range;
  minRange.type = 'range';
  minRange.min = String(categoryMinPrice);
  minRange.max = String(categoryMaxPrice);
  minRange.step = '1';
  minRange.value = String(minPrice);
  minRange.setAttribute('aria-label', 'Minimum price');

  const maxRange = document.createElement('input');
  maxRange.className = styles.shopPage__range;
  maxRange.type = 'range';
  maxRange.min = String(categoryMinPrice);
  maxRange.max = String(categoryMaxPrice);
  maxRange.step = '1';
  maxRange.value = String(maxPrice);
  maxRange.setAttribute('aria-label', 'Maximum price');

  function updatePriceFilter(): void {
    priceText.textContent = `Price: $${minPrice} - $${maxPrice}`;

    const difference = categoryMaxPrice - categoryMinPrice;

    const minPercent = difference ? ((minPrice - categoryMinPrice) / difference) * 100 : 0;

    const maxPercent = difference ? ((maxPrice - categoryMinPrice) / difference) * 100 : 100;

    priceTrack.style.background = `linear-gradient(
    to right,
    #d1d1d1 ${minPercent}%,
    #131118 ${minPercent}%,
    #131118 ${maxPercent}%,
    #d1d1d1 ${maxPercent}%
  )`;

    renderProducts();
  }

  priceCollapseButton.addEventListener('click', () => {
    const isCollapsed = priceFilterContent.classList.toggle(
      styles['shopPage__priceFilterContent--collapsed'],
    );

    priceCollapseArrow.classList.toggle(styles['shopPage__collapseArrow--closed'], isCollapsed);

    priceCollapseButton.setAttribute(
      'aria-label',
      isCollapsed ? 'Expand price filter' : 'Collapse price filter',
    );

    priceCollapseButton.setAttribute('aria-expanded', String(!isCollapsed));
  });

  priceFilter.append(priceFilterHeader, priceFilterContent);

  // Shop products section
  const shopContent = document.createElement('section');
  shopContent.className = styles.shopPage__shopContent;

  const resultsInfo = document.createElement('div');
  resultsInfo.className = styles.shopPage__resultsInfo;

  const filterIcon = document.createElement('img');
  filterIcon.className = styles.shopPage__filterIcon;
  filterIcon.src = '/images/auth/filter.png';
  filterIcon.alt = 'Filter';

  const resultsText = document.createElement('p');
  resultsText.className = styles.shopPage__resultsText;
  resultsText.textContent = 'Showing 1-15 of 15 results';

  // Sorting
  const shopToolbar = document.createElement('div');
  shopToolbar.className = styles.shopPage__shopToolbar;

  const sortContainer = document.createElement('div');
  sortContainer.className = styles.shopPage__sortContainer;

  const sortButton = document.createElement('button');
  sortButton.className = styles.shopPage__sortButton;
  sortButton.type = 'button';

  const sortText = document.createElement('span');
  sortText.textContent = 'Sort by latest';

  const sortArrow = document.createElement('span');
  sortArrow.className = styles.shopPage__sortArrow;

  sortButton.append(sortText, sortArrow);

  const sortOptions = document.createElement('div');
  sortOptions.className = styles.shopPage__sortOptions;
  sortOptions.hidden = true;

  const sortTypes = ['Price: Low to High', 'Price: High to Low'];

  sortTypes.forEach((type) => {
    const option = document.createElement('button');
    option.className = styles.shopPage__sortOption;
    option.type = 'button';
    option.textContent = type;

    option.addEventListener('click', () => {
      sortText.textContent = type;
      sortOptions.hidden = true;
      sortArrow.classList.remove(styles['shopPage__sortArrow--open']);
      sortButton.setAttribute('aria-expanded', 'false');

      if (type === 'Price: Low to High') {
        currentProducts.sort(
          (a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')),
        );
      } else {
        currentProducts.sort(
          (a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')),
        );
      }

      renderProducts();
    });

    sortOptions.append(option);
  });

  sortButton.setAttribute('aria-expanded', 'false');

  sortButton.addEventListener('click', () => {
    const isOpen = !sortOptions.hidden;

    sortOptions.hidden = isOpen;
    sortArrow.classList.toggle(styles['shopPage__sortArrow--open'], !isOpen);

    sortButton.setAttribute('aria-expanded', String(!isOpen));
  });

  sortContainer.append(sortButton, sortOptions);

  resultsInfo.append(filterIcon, resultsText);
  shopToolbar.append(resultsInfo, sortContainer);
  shopContent.append(shopToolbar);

  const productsGrid = document.createElement('div');
  productsGrid.className = styles.shopPage__productsGrid;

  function renderProducts(): void {
    productsGrid.innerHTML = '';

    const filteredProducts = currentProducts.filter((product) => {
      const price = Number(product.price.replace('$', ''));

      return price >= minPrice && price <= maxPrice;
    });

    filteredProducts.forEach((product) => {
      productsGrid.append(createProductCard(product));
    });

    resultsText.textContent = `Showing ${filteredProducts.length} results`;
  }

  minRange.addEventListener('input', () => {
    minPrice = Math.min(Number(minRange.value), maxPrice);
    minRange.value = String(minPrice);

    updatePriceFilter();
  });

  maxRange.addEventListener('input', () => {
    maxPrice = Math.max(Number(maxRange.value), minPrice);
    maxRange.value = String(maxPrice);

    updatePriceFilter();
  });

  priceSlider.append(priceTrack, minRange, maxRange);
  priceFilterContent.append(priceText, priceSlider);

  updatePriceFilter();

  shopContent.append(productsGrid);

  // Assemble page
  sidebar.append(categoriesSection, priceFilter);
  layout.append(sidebar, shopContent);

  shopContent.append(productsGrid);

  content.append(title, layout);

  page.append(header, content, createStoreBenefits(), createFooter());

  return page;
}
