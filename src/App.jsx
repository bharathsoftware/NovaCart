import OrderSuccess from "./OrderSuccess";
import Checkout from "./Checkout";
import { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  Star,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShoppingBag,
  Sparkles,
  UserRound,
} from "lucide-react";
import "./App.css";

const categories = [
  { name: "All Products", emoji: "✨" },
  { name: "Men's Fashion", emoji: "👔" },
  { name: "Women's Fashion", emoji: "👗" },
  { name: "Electronics", emoji: "🎧" },
  { name: "Footwear", emoji: "👟" },
  { name: "Home & Living", emoji: "🏠" },
  { name: "Beauty", emoji: "💄" },
  { name: "Bags & Accessories", emoji: "👜" },
  { name: "Sports & Fitness", emoji: "🏋️" },
  { name: "Watches", emoji: "⌚" },
  { name: "Jewellery", emoji: "💎" },
  { name: "Kids & Baby", emoji: "🧸" },
  { name: "Books & Stationery", emoji: "📚" },
];

const products = [
  // MEN'S FASHION — 15 products
  { id: 1, name: "Classic Cotton T-Shirt", category: "Men's Fashion", price: 799, oldPrice: 1199, rating: 4.5, badge: "BESTSELLER", image: "photo-1521572163474-6864f9cf17ab" },
  { id: 2, name: "Slim Fit Jeans", category: "Men's Fashion", price: 1299, oldPrice: 1799, rating: 4.4, badge: "", image: "photo-1542272604-787c3835535d" },
  { id: 3, name: "Casual Shirt", category: "Men's Fashion", price: 999, oldPrice: 1499, rating: 4.6, badge: "TRENDING", image: "photo-1596755094514-f87e34085b2c" },
  { id: 4, name: "Denim Jacket", category: "Men's Fashion", price: 2199, oldPrice: 2999, rating: 4.5, badge: "", image: "photo-1551028719-00167b16eac5" },
  { id: 5, name: "Formal Trousers", category: "Men's Fashion", price: 1499, oldPrice: 1999, rating: 4.3, badge: "", image: "photo-1473966968600-fa801b869a1a" },
  { id: 6, name: "Polo T-Shirt", category: "Men's Fashion", price: 699, oldPrice: 999, rating: 4.4, badge: "", image: "photo-1586790170083-2f9ceadc732d" },
  { id: 7, name: "Printed Hoodie", category: "Men's Fashion", price: 1599, oldPrice: 2199, rating: 4.7, badge: "POPULAR", image: "photo-1556821840-3a63f95609a7" },
  { id: 8, name: "Linen Shirt", category: "Men's Fashion", price: 1199, oldPrice: 1599, rating: 4.3, badge: "", image: "photo-1603252110481-7ba873bf42ab" },
  { id: 9, name: "Chino Pants", category: "Men's Fashion", price: 1399, oldPrice: 1899, rating: 4.2, badge: "", image: "photo-1624378439575-d8705ad7ae80" },
{
  id: 10,
  name: "Leather Jacket",
  category: "Men's Fashion",
  price: 3499,
  oldPrice: 4499,
  rating: 4.8,
  badge: "HOT DEAL",
  image: "photo-1551028719-00167b16eac5"
},  { id: 11, name: "Checked Shirt", category: "Men's Fashion", price: 899, oldPrice: 1299, rating: 4.1, badge: "", image: "photo-1602810318383-e386cc2a3ccf" },
  { id: 12, name: "Summer Shorts", category: "Men's Fashion", price: 599, oldPrice: 899, rating: 4.2, badge: "", image: "photo-1591195853828-11db59a44f6b" },
  { id: 13, name: "Classic Blazer", category: "Men's Fashion", price: 2999, oldPrice: 3999, rating: 4.7, badge: "", image: "photo-1591047139829-d91aecb6caea" },
  { id: 14, name: "Track Pants", category: "Men's Fashion", price: 899, oldPrice: 1299, rating: 4.4, badge: "", image: "photo-1552902865-b72c031ac5ea" },
  { id: 15, name: "Winter Sweater", category: "Men's Fashion", price: 1699, oldPrice: 2299, rating: 4.6, badge: "", image: "photo-1614975059251-992f11792b9f" },

  // WOMEN'S FASHION — 15 products
  { id: 16, name: "Elegant Summer Dress", category: "Women's Fashion", price: 1499, oldPrice: 2199, rating: 4.8, badge: "TRENDING", image: "photo-1539008835657-9e8e9680c956" },







{ id: 17, name: "Cotton Kurti", category: "Women's Fashion", price: 899, oldPrice: 1299, rating: 4.5, badge: "", image: "photo-1610030469983-98e550d6193c" },

  { id: 18, name: "Designer Saree", category: "Women's Fashion", price: 2499, oldPrice: 3499, rating: 4.7, badge: "POPULAR", image: "photo-1610030469983-98e550d6193c" },

{
  id: 19,
  name: "Casual Top",
  category: "Women's Fashion",
  price: 699,
  oldPrice: 999,
  rating: 4.3,
  badge: "",
  image: "photo-1525507119028-ed4c629a60a3"
},
  { id: 20, name: "Wide Leg Jeans", category: "Women's Fashion", price: 1399, oldPrice: 1899, rating: 4.6, badge: "", image: "photo-1541099649105-f69ad21f3246" },
  { id: 21, name: "Party Wear Gown", category: "Women's Fashion", price: 3299, oldPrice: 4299, rating: 4.8, badge: "BESTSELLER", image: "photo-1566174053879-31528523f8ae" },
  { id: 22, name: "Printed Palazzo", category: "Women's Fashion", price: 799, oldPrice: 1099, rating: 4.2, badge: "", image: "photo-1584865288642-42078afe6942" },
  { id: 23, name: "Ethnic Anarkali", category: "Women's Fashion", price: 1899, oldPrice: 2599, rating: 4.5, badge: "", image: "photo-1595777457583-95e059d581b8" },
  { id: 24, name: "Denim Jacket", category: "Women's Fashion", price: 1799, oldPrice: 2399, rating: 4.4, badge: "", image: "photo-1543076447-215ad9ba6923" },
  { id: 25, name: "Formal Blazer", category: "Women's Fashion", price: 2299, oldPrice: 2999, rating: 4.6, badge: "SALE", image: "photo-1591369822096-ffd140ec948f" },
  { id: 26, name: "Maxi Dress", category: "Women's Fashion", price: 1599, oldPrice: 2199, rating: 4.7, badge: "", image: "photo-1496747611176-843222e1e57c" },
  { id: 27, name: "Crop Top", category: "Women's Fashion", price: 499, oldPrice: 799, rating: 4.2, badge: "", image: "photo-1503342217505-b0a15ec3261c" },
  { id: 28, name: "Cotton Leggings", category: "Women's Fashion", price: 399, oldPrice: 599, rating: 4.1, badge: "", image: "photo-1509631179647-0177331693ae" },

{
  id: 29,
  name: "Traditional Lehenga",
  category: "Women's Fashion",
  price: 3999,
  oldPrice: 5299,
  rating: 4.8,
  badge: "POPULAR",
  image: "photo-1610030469983-98e550d6193c"
},
  { id: 30, name: "Winter Cardigan", category: "Women's Fashion", price: 1299, oldPrice: 1799, rating: 4.4, badge: "", image: "photo-1434389677669-e08b4cac3105" },

  // ELECTRONICS — 15 products
  { id: 31, name: "Wireless Headphones", category: "Electronics", price: 2499, oldPrice: 3499, rating: 4.7, badge: "HOT DEAL", image: "photo-1505740420928-5e560c06d30e" },
  { id: 32, name: "Bluetooth Speaker", category: "Electronics", price: 1799, oldPrice: 2499, rating: 4.5, badge: "", image: "photo-1608043152269-423dbba4e7e1" },
  { id: 33, name: "Smartphone", category: "Electronics", price: 18999, oldPrice: 22999, rating: 4.6, badge: "POPULAR", image: "photo-1511707171634-5f897ff02aa9" },
  { id: 34, name: "Laptop", category: "Electronics", price: 54999, oldPrice: 64999, rating: 4.8, badge: "", image: "photo-1496181133206-80ce9b88a853" },
  { id: 35, name: "Smart Watch", category: "Electronics", price: 3999, oldPrice: 5499, rating: 4.5, badge: "", image: "photo-1523275335684-37898b6baf30" },
  { id: 36, name: "Wireless Earbuds", category: "Electronics", price: 1999, oldPrice: 2999, rating: 4.4, badge: "", image: "photo-1606220945770-b5b6c2c55bf1" },
  { id: 37, name: "Gaming Mouse", category: "Electronics", price: 1299, oldPrice: 1799, rating: 4.6, badge: "", image: "photo-1527814050087-3793815479db" },
  { id: 38, name: "Mechanical Keyboard", category: "Electronics", price: 2999, oldPrice: 3999, rating: 4.7, badge: "TRENDING", image: "photo-1587829741301-dc798b83add3" },
  { id: 39, name: "Tablet", category: "Electronics", price: 14999, oldPrice: 17999, rating: 4.5, badge: "", image: "photo-1544244015-0df4b3ffc6b0" },
  { id: 40, name: "Power Bank", category: "Electronics", price: 999, oldPrice: 1499, rating: 4.3, badge: "", image: "photo-1609091839311-d5365f9ff1c5" },
  { id: 41, name: "USB-C Charger", category: "Electronics", price: 599, oldPrice: 899, rating: 4.2, badge: "", image: "photo-1583394838336-acd977736f90" },
  { id: 42, name: "Webcam", category: "Electronics", price: 2199, oldPrice: 2999, rating: 4.4, badge: "", image: "photo-1587825140708-dfaf72ae4b04" },
  { id: 43, name: "Portable SSD", category: "Electronics", price: 4999, oldPrice: 5999, rating: 4.6, badge: "", image: "photo-1597872200969-2b65d56bd16b" },
  { id: 44, name: "Gaming Controller", category: "Electronics", price: 3499, oldPrice: 4499, rating: 4.5, badge: "", image: "photo-1600080972464-8e5f35f63d08" },
  { id: 45, name: "LED Monitor", category: "Electronics", price: 11999, oldPrice: 14999, rating: 4.7, badge: "BESTSELLER", image: "photo-1527443224154-c4a3942d3acf" },

  // FOOTWEAR — 15 products
  { id: 46, name: "Everyday Sneakers", category: "Footwear", price: 1999, oldPrice: 2799, rating: 4.6, badge: "POPULAR", image: "photo-1542291026-7eec264c27ff" },

{ id: 47, name: "Classic White Shoes", category: "Footwear", price: 1799, oldPrice: 2399, rating: 4.4, badge: "", image: "photo-1542291026-7eec264c27ff" },
  { id: 48, name: "Leather Loafers", category: "Footwear", price: 2299, oldPrice: 2999, rating: 4.5, badge: "", image: "photo-1533867617858-e7b97e060509" },
  { id: 49, name: "Sports Shoes", category: "Footwear", price: 2499, oldPrice: 3299, rating: 4.7, badge: "", image: "photo-1460353581641-37baddab0fa2" },
  { id: 50, name: "Casual Sandals", category: "Footwear", price: 699, oldPrice: 999, rating: 4.2, badge: "", image: "photo-1603487742131-4160ec999306" },
  { id: 51, name: "High Top Sneakers", category: "Footwear", price: 2199, oldPrice: 2899, rating: 4.6, badge: "TRENDING", image: "photo-1525966222134-fcfa99b8ae77" },
  { id: 52, name: "Formal Oxford Shoes", category: "Footwear", price: 2799, oldPrice: 3699, rating: 4.5, badge: "", image: "photo-1614252369475-531eba835eb1" },
  { id: 53, name: "Walking Shoes", category: "Footwear", price: 1599, oldPrice: 2199, rating: 4.4, badge: "", image: "photo-1495555961986-6d4c1ecb7be3" },
  { id: 54, name: "Ankle Boots", category: "Footwear", price: 2999, oldPrice: 3999, rating: 4.7, badge: "", image: "photo-1543163521-1bf539c55dd2" },
  { id: 55, name: "Slip-On Shoes", category: "Footwear", price: 1199, oldPrice: 1699, rating: 4.3, badge: "", image: "photo-1520256862855-398228c41684" },
  { id: 56, name: "Training Shoes", category: "Footwear", price: 1899, oldPrice: 2599, rating: 4.5, badge: "", image: "photo-1539185441755-769473a23570" },
  { id: 57, name: "Flip Flops", category: "Footwear", price: 299, oldPrice: 499, rating: 4.1, badge: "", image: "photo-1603487742131-4160ec999306" },
  { id: 58, name: "Canvas Sneakers", category: "Footwear", price: 999, oldPrice: 1499, rating: 4.3, badge: "", image: "photo-1525966222134-fcfa99b8ae77" },
  { id: 59, name: "Block Heel Sandals", category: "Footwear", price: 1499, oldPrice: 1999, rating: 4.6, badge: "", image: "photo-1543163521-1bf539c55dd2" },
  { id: 60, name: "Hiking Boots", category: "Footwear", price: 3299, oldPrice: 4299, rating: 4.7, badge: "BESTSELLER", image: "photo-1542291026-7eec264c27ff" },

  // HOME & LIVING — 15 products
  { id: 61, name: "Minimal Desk Lamp", category: "Home & Living", price: 1299, oldPrice: 1799, rating: 4.3, badge: "", image: "photo-1507473885765-e6ed057f782c" },
  { id: 62, name: "Soft Cushion Set", category: "Home & Living", price: 799, oldPrice: 1199, rating: 4.4, badge: "", image: "photo-1584100936595-c0654b55a2e2" },
  { id: 63, name: "Ceramic Vase", category: "Home & Living", price: 599, oldPrice: 899, rating: 4.5, badge: "", image: "photo-1578500494198-246f612d3b3d" },
  { id: 64, name: "Cotton Bedsheet", category: "Home & Living", price: 1499, oldPrice: 1999, rating: 4.6, badge: "POPULAR", image: "photo-1631049307264-da0ec9d70304" },
  { id: 65, name: "Wall Art Print", category: "Home & Living", price: 699, oldPrice: 999, rating: 4.2, badge: "", image: "photo-1579783902614-a3fb3927b6a5" },
  { id: 66, name: "Modern Wall Clock", category: "Home & Living", price: 899, oldPrice: 1299, rating: 4.3, badge: "", image: "photo-1563861826100-9cb868fdbe1c" },
  { id: 67, name: "Indoor Planter", category: "Home & Living", price: 499, oldPrice: 799, rating: 4.5, badge: "", image: "photo-1485955900006-10f4d324d411" },
  { id: 68, name: "Scented Candle Set", category: "Home & Living", price: 399, oldPrice: 699, rating: 4.4, badge: "NEW", image: "photo-1603006905003-be475563bc59" },
  { id: 69, name: "Throw Blanket", category: "Home & Living", price: 1099, oldPrice: 1499, rating: 4.6, badge: "", image: "photo-1600210492486-724fe5c67fb0" },
  { id: 70, name: "Storage Basket", category: "Home & Living", price: 449, oldPrice: 699, rating: 4.2, badge: "", image: "photo-1600210492486-724fe5c67fb0" },
  { id: 71, name: "Coffee Mug Set", category: "Home & Living", price: 599, oldPrice: 899, rating: 4.4, badge: "", image: "photo-1514228742587-6b1558fcca3d" },
  { id: 72, name: "Table Runner", category: "Home & Living", price: 399, oldPrice: 599, rating: 4.1, badge: "", image: "photo-1600566753086-00f18fb6b3ea" },
  { id: 73, name: "Decorative Mirror", category: "Home & Living", price: 1799, oldPrice: 2399, rating: 4.6, badge: "", image: "photo-1618221195710-dd6b41faaea6" },
  { id: 74, name: "Floor Rug", category: "Home & Living", price: 1999, oldPrice: 2799, rating: 4.5, badge: "", image: "photo-1600166898405-da9535204843" },
  { id: 75, name: "Bedside Organizer", category: "Home & Living", price: 699, oldPrice: 999, rating: 4.2, badge: "", image: "photo-1616486338812-3dadae4b4ace" },

  // BEAUTY — 15 products
  { id: 76, name: "Skincare Essentials", category: "Beauty", price: 999, oldPrice: 1499, rating: 4.6, badge: "NEW", image: "photo-1608248543803-ba4f8c70ae0b" },
  { id: 77, name: "Hydrating Face Serum", category: "Beauty", price: 699, oldPrice: 999, rating: 4.5, badge: "", image: "photo-1620916566398-39f1143ab7be" },
  { id: 78, name: "Daily Moisturizer", category: "Beauty", price: 499, oldPrice: 799, rating: 4.4, badge: "", image: "photo-1601049541289-9b1b7bbbfe19" },
  { id: 79, name: "Gentle Cleanser", category: "Beauty", price: 399, oldPrice: 599, rating: 4.3, badge: "", image: "photo-1556229010-6c3f2c9ca5f8" },
  { id: 80, name: "Matte Lipstick", category: "Beauty", price: 599, oldPrice: 899, rating: 4.7, badge: "POPULAR", image: "photo-1586495777744-4413f21062fa" },
  { id: 81, name: "Vitamin C Face Cream", category: "Beauty", price: 799, oldPrice: 1199, rating: 4.6, badge: "", image: "photo-1601049541289-9b1b7bbbfe19" },
  { id: 82, name: "Sunscreen SPF 50", category: "Beauty", price: 449, oldPrice: 699, rating: 4.4, badge: "", image: "photo-1556228720-195a672e8a03" },
  { id: 83, name: "Hair Care Shampoo", category: "Beauty", price: 349, oldPrice: 499, rating: 4.2, badge: "", image: "photo-1608248543803-ba4f8c70ae0b" },
  { id: 84, name: "Body Lotion", category: "Beauty", price: 299, oldPrice: 449, rating: 4.3, badge: "", image: "photo-1601049541289-9b1b7bbbfe19" },
  { id: 85, name: "Face Mask Set", category: "Beauty", price: 399, oldPrice: 599, rating: 4.5, badge: "", image: "photo-1596755389378-c31d21fd1273" },
  { id: 86, name: "Makeup Brush Kit", category: "Beauty", price: 699, oldPrice: 999, rating: 4.6, badge: "", image: "photo-1522335789203-aabd1fc54bc9" },
  { id: 87, name: "Liquid Foundation", category: "Beauty", price: 799, oldPrice: 1099, rating: 4.4, badge: "", image: "photo-1596462502278-27bfdc403348" },
  { id: 88, name: "Lip Balm", category: "Beauty", price: 199, oldPrice: 299, rating: 4.1, badge: "", image: "photo-1586495777744-4413f21062fa" },
  { id: 89, name: "Eye Shadow Palette", category: "Beauty", price: 899, oldPrice: 1299, rating: 4.7, badge: "TRENDING", image: "photo-1512496015851-a90fb38ba796" },
  { id: 90, name: "Facial Toner", category: "Beauty", price: 399, oldPrice: 599, rating: 4.3, badge: "", image: "photo-1608248543803-ba4f8c70ae0b" },

  // BAGS & ACCESSORIES — 15 products
  { id: 91, name: "Premium Leather Bag", category: "Bags & Accessories", price: 1899, oldPrice: 2699, rating: 4.5, badge: "", image: "photo-1548036328-c9fa89d128fa" },
  { id: 92, name: "Leather Wallet", category: "Bags & Accessories", price: 699, oldPrice: 999, rating: 4.4, badge: "", image: "photo-1627123424574-724758594e93" },
  { id: 93, name: "Crossbody Bag", category: "Bags & Accessories", price: 1299, oldPrice: 1799, rating: 4.6, badge: "POPULAR", image: "photo-1548036328-c9fa89d128fa" },
  { id: 94, name: "Travel Duffel Bag", category: "Bags & Accessories", price: 1599, oldPrice: 2199, rating: 4.5, badge: "", image: "photo-1553062407-98eeb64c6a62" },
  { id: 95, name: "Laptop Bag", category: "Bags & Accessories", price: 1499, oldPrice: 1999, rating: 4.4, badge: "", image: "photo-1553062407-98eeb64c6a62" },
  { id: 96, name: "Canvas Tote Bag", category: "Bags & Accessories", price: 499, oldPrice: 799, rating: 4.2, badge: "", image: "photo-1544816155-12df9643f363" },
  { id: 97, name: "Mini Shoulder Bag", category: "Bags & Accessories", price: 999, oldPrice: 1399, rating: 4.5, badge: "", image: "photo-1584917865442-de89df76afd3" },
  { id: 98, name: "Card Holder", category: "Bags & Accessories", price: 399, oldPrice: 599, rating: 4.1, badge: "", image: "photo-1627123424574-724758594e93" },
  { id: 99, name: "Travel Organizer", category: "Bags & Accessories", price: 599, oldPrice: 899, rating: 4.3, badge: "", image: "photo-1553062407-98eeb64c6a62" },
  { id: 100, name: "Classic Belt", category: "Bags & Accessories", price: 499, oldPrice: 799, rating: 4.2, badge: "", image: "photo-1624222247344-550fb8a9b1a4" },
  { id: 101, name: "Fashion Sunglasses", category: "Bags & Accessories", price: 699, oldPrice: 999, rating: 4.2, badge: "SALE", image: "photo-1511499767150-a48a237f0083" },
  { id: 102, name: "Passport Holder", category: "Bags & Accessories", price: 449, oldPrice: 699, rating: 4.3, badge: "", image: "photo-1553062407-98eeb64c6a62" },
  { id: 103, name: "Messenger Bag", category: "Bags & Accessories", price: 1299, oldPrice: 1799, rating: 4.4, badge: "", image: "photo-1553062407-98eeb64c6a62" },
  { id: 104, name: "Waist Bag", category: "Bags & Accessories", price: 799, oldPrice: 1099, rating: 4.1, badge: "", image: "photo-1622560480654-d96214fdc887" },
  { id: 105, name: "Premium Handbag", category: "Bags & Accessories", price: 2499, oldPrice: 3299, rating: 4.7, badge: "BESTSELLER", image: "photo-1584917865442-de89df76afd3" },

  // SPORTS & FITNESS — 15 products
  { id: 106, name: "Modern Running Shoes", category: "Sports & Fitness", price: 2299, oldPrice: 3199, rating: 4.4, badge: "", image: "photo-1542291026-7eec264c27ff" },
  { id: 107, name: "Yoga Mat", category: "Sports & Fitness", price: 799, oldPrice: 1199, rating: 4.5, badge: "", image: "photo-1601925260368-ae2f83cf8b7f" },
  { id: 108, name: "Adjustable Dumbbells", category: "Sports & Fitness", price: 2499, oldPrice: 3299, rating: 4.7, badge: "POPULAR", image: "photo-1583454110551-21f2fa2afe61" },
  { id: 109, name: "Resistance Bands", category: "Sports & Fitness", price: 399, oldPrice: 599, rating: 4.3, badge: "", image: "photo-1598289431512-b97b0917affc" },
  { id: 110, name: "Sports Water Bottle", category: "Sports & Fitness", price: 299, oldPrice: 499, rating: 4.2, badge: "", image: "photo-1602143407151-7111542de6e8" },
  { id: 111, name: "Gym Gloves", category: "Sports & Fitness", price: 499, oldPrice: 799, rating: 4.4, badge: "", image: "photo-1583454110551-21f2fa2afe61" },
{ id: 112, name: "Fitness Exercise Bar", category: "Sports & Fitness", price: 599, oldPrice: 899, rating: 4.5, badge: "", image: "photo-1517836357463-d25dfeac3438" }, 
 { id: 116, name: "Football", category: "Sports & Fitness", price: 799, oldPrice: 1199, rating: 4.5, badge: "", image: "photo-1574629810360-7efbbe195018" },
  { id: 117, name: "Basketball", category: "Sports & Fitness", price: 899, oldPrice: 1299, rating: 4.5, badge: "", image: "photo-1519861531473-9200262188bf" },
{ id: 118, name: "Tennis Racket", category: "Sports & Fitness", price: 1999, oldPrice: 2799, rating: 4.6, badge: "", image: "photo-1622279457486-62dcc4a431d6" },
{ id: 119, name: "Cycling Helmet", category: "Sports & Fitness", price: 1499, oldPrice: 1999, rating: 4.4, badge: "", image: "photo-1507035895480-2b3156c31fc8" },
{ id: 120, name: "Skipping Rope", category: "Sports & Fitness", price: 249, oldPrice: 399, rating: 4.2, badge: "", image: "/images/skipping-rope.jpg" },
  // WATCHES — 15 products
  { id: 121, name: "Smart Fitness Watch", category: "Watches", price: 3299, oldPrice: 4499, rating: 4.8, badge: "BESTSELLER", image: "photo-1523275335684-37898b6baf30" },
  { id: 122, name: "Classic Wrist Watch", category: "Watches", price: 1799, oldPrice: 2499, rating: 4.7, badge: "", image: "photo-1524805444758-089113d48a6d" },
  { id: 123, name: "Minimalist Wristwatch", category: "Watches", price: 1499, oldPrice: 1999, rating: 4.4, badge: "", image: "photo-1523275335684-37898b6baf30" },
  { id: 124, name: "Digital Sports Watch", category: "Watches", price: 999, oldPrice: 1499, rating: 4.3, badge: "", image: "photo-1524805444758-089113d48a6d" },
  { id: 125, name: "Luxury Dress Watch", category: "Watches", price: 4999, oldPrice: 6499, rating: 4.8, badge: "POPULAR", image: "photo-1523170335258-f5ed11844a49" },
  { id: 126, name: "Leather Strap Watch", category: "Watches", price: 2199, oldPrice: 2999, rating: 4.5, badge: "", image: "photo-1523275335684-37898b6baf30" },
  { id: 127, name: "Chronograph Watch", category: "Watches", price: 3499, oldPrice: 4499, rating: 4.6, badge: "", image: "photo-1524805444758-089113d48a6d" },
  { id: 128, name: "Rose Gold Watch", category: "Watches", price: 2799, oldPrice: 3699, rating: 4.7, badge: "", image: "photo-1523170335258-f5ed11844a49" },
  { id: 129, name: "Silver Dial Watch", category: "Watches", price: 1899, oldPrice: 2599, rating: 4.4, badge: "", image: "photo-1523275335684-37898b6baf30" },
  { id: 130, name: "Everyday Watch", category: "Watches", price: 1299, oldPrice: 1799, rating: 4.2, badge: "", image: "photo-1524805444758-089113d48a6d" },
  { id: 131, name: "Black Dial Watch", category: "Watches", price: 2299, oldPrice: 2999, rating: 4.5, badge: "", image: "photo-1523170335258-f5ed11844a49" },
  { id: 132, name: "Mesh Strap Watch", category: "Watches", price: 1999, oldPrice: 2699, rating: 4.4, badge: "", image: "photo-1523275335684-37898b6baf30" },
  { id: 133, name: "Adventure Watch", category: "Watches", price: 2999, oldPrice: 3999, rating: 4.6, badge: "", image: "photo-1524805444758-089113d48a6d" },
  { id: 134, name: "Square Dial Watch", category: "Watches", price: 1599, oldPrice: 2199, rating: 4.3, badge: "", image: "photo-1523170335258-f5ed11844a49" },
  { id: 135, name: "Classic Gold Watch", category: "Watches", price: 2599, oldPrice: 3499, rating: 4.7, badge: "TRENDING", image: "photo-1523275335684-37898b6baf30" },

  // JEWELLERY — 15 products
  { id: 136, name: "Pearl Necklace", category: "Jewellery", price: 999, oldPrice: 1499, rating: 4.6, badge: "", image: "photo-1515562141207-7a88fb7ce338" },
  { id: 137, name: "Gold Plated Earrings", category: "Jewellery", price: 599, oldPrice: 899, rating: 4.5, badge: "", image: "photo-1535632066927-ab7c9ab60908" },
  { id: 138, name: "Silver Bracelet", category: "Jewellery", price: 799, oldPrice: 1199, rating: 4.4, badge: "", image: "photo-1611591437281-460bfbe1220a" },
  { id: 139, name: "Minimalist Pendant", category: "Jewellery", price: 499, oldPrice: 799, rating: 4.3, badge: "", image: "photo-1611652022419-a9419f74343d" },
  { id: 140, name: "Statement Ring", category: "Jewellery", price: 699, oldPrice: 999, rating: 4.5, badge: "POPULAR", image: "photo-1605100804763-247f67b3557e" },
  { id: 141, name: "Charm Bracelet", category: "Jewellery", price: 899, oldPrice: 1299, rating: 4.6, badge: "", image: "photo-1611591437281-460bfbe1220a" },
  { id: 142, name: "Hoop Earrings", category: "Jewellery", price: 399, oldPrice: 599, rating: 4.2, badge: "", image: "photo-1535632066927-ab7c9ab60908" },
  { id: 143, name: "Layered Necklace", category: "Jewellery", price: 1199, oldPrice: 1599, rating: 4.7, badge: "", image: "photo-1515562141207-7a88fb7ce338" },
  { id: 144, name: "Gemstone Pendant", category: "Jewellery", price: 1499, oldPrice: 1999, rating: 4.6, badge: "", image: "photo-1611652022419-a9419f74343d" },
  { id: 145, name: "Stud Earrings", category: "Jewellery", price: 299, oldPrice: 499, rating: 4.1, badge: "", image: "photo-1535632066927-ab7c9ab60908" },
  { id: 146, name: "Elegant Anklet", category: "Jewellery", price: 449, oldPrice: 699, rating: 4.2, badge: "", image: "photo-1611591437281-460bfbe1220a" },
  { id: 147, name: "Fashion Bangle", category: "Jewellery", price: 599, oldPrice: 899, rating: 4.3, badge: "", image: "photo-1515562141207-7a88fb7ce338" },
  { id: 148, name: "Heart Pendant", category: "Jewellery", price: 799, oldPrice: 1099, rating: 4.5, badge: "", image: "photo-1611652022419-a9419f74343d" },
  { id: 149, name: "Crystal Ring", category: "Jewellery", price: 999, oldPrice: 1399, rating: 4.6, badge: "", image: "photo-1605100804763-247f67b3557e" },
  { id: 150, name: "Jewellery Gift Set", category: "Jewellery", price: 1799, oldPrice: 2399, rating: 4.8, badge: "BESTSELLER", image: "photo-1515562141207-7a88fb7ce338" },

  // KIDS & BABY — 15 products
  { id: 151, name: "Kids Cotton T-Shirt", category: "Kids & Baby", price: 399, oldPrice: 599, rating: 4.4, badge: "", image: "photo-1519238263530-99bdd11df2ea" },
  { id: 152, name: "Baby Romper", category: "Kids & Baby", price: 499, oldPrice: 699, rating: 4.5, badge: "", image: "photo-1519689680058-324335c77eba" },
  { id: 153, name: "Kids Sneakers", category: "Kids & Baby", price: 799, oldPrice: 1199, rating: 4.6, badge: "POPULAR", image: "photo-1514989940723-e8e51635b782" },
  { id: 154, name: "Cartoon Backpack", category: "Kids & Baby", price: 599, oldPrice: 899, rating: 4.4, badge: "", image: "photo-1553062407-98eeb64c6a62" },
  { id: 155, name: "Baby Blanket", category: "Kids & Baby", price: 699, oldPrice: 999, rating: 4.7, badge: "", image: "photo-1519689680058-324335c77eba" },
  { id: 156, name: "Kids Party Dress", category: "Kids & Baby", price: 999, oldPrice: 1499, rating: 4.5, badge: "", image: "photo-1519238263530-99bdd11df2ea" },
  { id: 157, name: "Building Blocks Set", category: "Kids & Baby", price: 799, oldPrice: 1199, rating: 4.8, badge: "BESTSELLER", image: "photo-1587654780291-39c9404d746b" },
  { id: 158, name: "Soft Plush Toy", category: "Kids & Baby", price: 399, oldPrice: 599, rating: 4.5, badge: "", image: "photo-1559454403-b8fb88521f11" },
  { id: 159, name: "Kids Water Bottle", category: "Kids & Baby", price: 299, oldPrice: 449, rating: 4.2, badge: "", image: "photo-1602143407151-7111542de6e8" },
  { id: 160, name: "Baby Feeding Set", category: "Kids & Baby", price: 499, oldPrice: 699, rating: 4.4, badge: "", image: "photo-1519689680058-324335c77eba" },
  { id: 161, name: "Kids Raincoat", category: "Kids & Baby", price: 599, oldPrice: 899, rating: 4.3, badge: "", image: "photo-1519238263530-99bdd11df2ea" },
  { id: 162, name: "Toy Racing Car", category: "Kids & Baby", price: 349, oldPrice: 499, rating: 4.5, badge: "", image: "photo-1594787318286-3d835c1d207f" },
  { id: 163, name: "Kids Pajama Set", category: "Kids & Baby", price: 499, oldPrice: 799, rating: 4.4, badge: "", image: "photo-1519238263530-99bdd11df2ea" },
  { id: 164, name: "Baby Care Bag", category: "Kids & Baby", price: 899, oldPrice: 1299, rating: 4.6, badge: "", image: "photo-1553062407-98eeb64c6a62" },
  { id: 165, name: "Educational Puzzle", category: "Kids & Baby", price: 299, oldPrice: 499, rating: 4.3, badge: "", image: "photo-1606092195730-5d7b9af1efc5" },

  // BOOKS & STATIONERY — 15 products
  { id: 166, name: "Classic Notebook", category: "Books & Stationery", price: 199, oldPrice: 299, rating: 4.4, badge: "", image: "photo-1455390582262-044cdead277a" },
  { id: 167, name: "Premium Ballpoint Pens", category: "Books & Stationery", price: 149, oldPrice: 249, rating: 4.3, badge: "", image: "photo-1583485088034-697b5bc54ccd" },
  { id: 168, name: "Daily Planner", category: "Books & Stationery", price: 299, oldPrice: 449, rating: 4.6, badge: "POPULAR", image: "photo-1506784983877-45594efa4cbe" },
  { id: 169, name: "Sketchbook", category: "Books & Stationery", price: 249, oldPrice: 399, rating: 4.5, badge: "", image: "photo-1513364776144-60967b0f800f" },
  { id: 170, name: "Highlighter Set", category: "Books & Stationery", price: 199, oldPrice: 299, rating: 4.2, badge: "", image: "photo-1455390582262-044cdead277a" },
  { id: 171, name: "Hardcover Journal", category: "Books & Stationery", price: 349, oldPrice: 499, rating: 4.5, badge: "", image: "photo-1517842645767-c639042777db" },
  { id: 172, name: "Desk Organizer", category: "Books & Stationery", price: 399, oldPrice: 599, rating: 4.3, badge: "", image: "photo-1497366754035-f200968a6e72" },
  { id: 173, name: "Sticky Notes Pack", category: "Books & Stationery", price: 99, oldPrice: 149, rating: 4.1, badge: "", image: "photo-1455390582262-044cdead277a" },
  { id: 174, name: "Fountain Pen", category: "Books & Stationery", price: 599, oldPrice: 899, rating: 4.7, badge: "", image: "photo-1583485088034-697b5bc54ccd" },
  { id: 175, name: "Academic Notebook Set", category: "Books & Stationery", price: 299, oldPrice: 449, rating: 4.4, badge: "", image: "photo-1455390582262-044cdead277a" },
  { id: 176, name: "Drawing Pencil Kit", category: "Books & Stationery", price: 249, oldPrice: 399, rating: 4.5, badge: "", image: "photo-1513364776144-60967b0f800f" },
  { id: 177, name: "File Folder Set", category: "Books & Stationery", price: 199, oldPrice: 299, rating: 4.2, badge: "", image: "photo-1455390582262-044cdead277a" },
  { id: 178, name: "Study Lamp", category: "Books & Stationery", price: 899, oldPrice: 1299, rating: 4.5, badge: "", image: "photo-1507473885765-e6ed057f782c" },
  { id: 179, name: "Book Stand", category: "Books & Stationery", price: 349, oldPrice: 499, rating: 4.3, badge: "", image: "photo-1495446815901-a7297e633e8d" },
  { id: 180, name: "Art Supplies Kit", category: "Books & Stationery", price: 699, oldPrice: 999, rating: 4.7, badge: "TRENDING", image: "photo-1513364776144-60967b0f800f" }
];


const imageUrl = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`;

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

function App() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);  
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sort, setSort] = useState("featured");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activePanel, setActivePanel] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loginMode, setLoginMode] = useState("login");
  const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [currentUserName, setCurrentUserName] = useState(() => localStorage.getItem("novacartUserName") || "");

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All Products") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term)
      );
    }

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [search, selectedCategory, sort]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    notify(`${product.name} added to cart`);
  };

  const updateQuantity = (id, change) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    setWishlist((current) =>
      exists
        ? current.filter((item) => item.id !== product.id)
        : [...current, product]
    );

    notify(exists ? "Removed from wishlist" : "Added to wishlist");
  };

  const chooseCategory = (name) => {
    setSelectedCategory(name);
    setMobileMenu(false);
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };


if (showCheckout) {
  return (
    <Checkout
      cart={cart}
      cartTotal={cartTotal}
      onBack={() => setShowCheckout(false)}
      onPlaceOrder={() => {
        setCart([]);
        setShowCheckout(false);
        setOrderPlaced(false);
        setActivePanel("");
        notify("Your order has been placed successfully!");
      }}
    />
  );
}


if (showCheckout) {
  return (
    <Checkout
      cart={cart}
      cartTotal={cartTotal}
      onBack={() => setShowCheckout(false)}
      onPlaceOrder={() => {
        setCart([]);
        setShowCheckout(false);
        notify("Your demo order has been placed successfully!");
      }}
    />
  );
}
  return (
    
    <div className="app">
      <div className="announcement">
        <Sparkles size={15} />
        <span>Welcome to NovaCart — discover something wonderful!</span>
      </div>

      <header className="header">
        <button
          className="icon-button mobile-menu-button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>

        <a className="logo" href="#" aria-label="NovaCart home">
          <span className="logo-icon">
            <ShoppingBag size={23} />
          </span>
          <span>Nova<span className="logo-accent">Cart</span></span>
        </a>

        <nav className={`main-nav ${mobileMenu ? "nav-open" : ""}`}>
          <button onClick={() => chooseCategory("All Products")}>Home</button>
          <button onClick={() => {
            setMobileMenu(false);
            document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
          }}>Categories</button>
          <button onClick={() => {
            setMobileMenu(false);
            document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
            window.setTimeout(() => document.querySelector(".search-box input")?.focus(), 350);
          }}>Search</button>
          <button onClick={() => chooseCategory("Men's Fashion")}>Men</button>
          <button onClick={() => chooseCategory("Women's Fashion")}>Women</button>
          <button onClick={() => {
            setMobileMenu(false);
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}>About</button>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Wishlist"
            onClick={() => setActivePanel("wishlist")}
          >
            <Heart />
            {wishlist.length > 0 && (
              <span className="count-badge">{wishlist.length}</span>
            )}
          </button>

          <button
            className="icon-button cart-icon"
            aria-label="Shopping cart"
            onClick={() => setActivePanel("cart")}
          >
            <ShoppingCart />
            {cartCount > 0 && <span className="count-badge">{cartCount}</span>}
          </button>

          <button
            className="account-button"
            onClick={() => {
              if (currentUserName) {
                setActivePanel("account");
              } else {
                setLoginMode("login");
                setActivePanel("login");
              }
            }}
            title={currentUserName ? `Signed in as ${currentUserName}` : "Login"}
          >
            <UserRound size={17} />
            <span>{currentUserName || "Login"}</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={15} /> YOUR EVERYDAY STYLE DESTINATION
            </span>

            <h1>
              Find your
              <br />
              next <span>favourite.</span>
            </h1>

            <p>
              Discover products you'll love. Shop the latest trends,
              everyday essentials, and little things that make life better.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => chooseCategory("All Products")}
              >
                Explore collection <ArrowRight size={18} />
              </button>
              <span className="hero-note">Good finds. Great prices.</span>
            </div>

            <div className="hero-stats">
              <div><strong>12+</strong><span>Categories</span></div>
              <div><strong>100%</strong><span>Shopping joy</span></div>
              <div><strong>24/7</strong><span>Browse anytime</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-main">
              <img
                src={imageUrl("photo-1441986300917-64674bd600d8")}
                alt="Stylish fashion store"
              />
            </div>
            <div className="hero-image-small">
              <img
                src={imageUrl("photo-1490481651871-ab68de25d43d")}
                alt="Fashion collection"
              />
            </div>
            <div className="floating-note">
              <span className="floating-icon">✦</span>
              <div><strong>Curated for you</strong><span>Discover your style</span></div>
            </div>
            <div className="hero-decoration">N</div>
          </div>
        </section>

        <section className="benefits">
          <div><span>🚚</span><div><strong>Easy shopping</strong><small>Browse with ease</small></div></div>
          <div><span>💎</span><div><strong>Curated products</strong><small>Find your favourites</small></div></div>
          <div><span>💳</span><div><strong>Clear pricing</strong><small>See prices upfront</small></div></div>
          <div><span>💬</span><div><strong>Here to help</strong><small>Support when needed</small></div></div>
        </section>

        <section className="categories-section" id="categories">
          <div className="section-heading">
            <div>
              <span className="section-kicker">SHOP YOUR WAY</span>
              <h2>Explore categories</h2>
              <p>Something for every mood and moment.</p>
            </div>
          </div>

          <div className="category-grid">
            {categories.slice(1).map((category) => (
              <button
                key={category.name}
                className={`category-card ${
                  selectedCategory === category.name ? "category-active" : ""
                }`}
                onClick={() => chooseCategory(category.name)}
              >
                <span className="category-emoji">{category.emoji}</span>
                <span>{category.name}</span>
                <ArrowRight size={16} className="category-arrow" />
              </button>
            ))}
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading products-heading">
            <div>
              <span className="section-kicker">HANDPICKED FOR YOU</span>
              <h2>
                {selectedCategory === "All Products"
                  ? "Featured products"
                  : selectedCategory}
              </h2>
              <p>Find your next favourite from our collection.</p>
            </div>
            <span className="product-count">
              {filteredProducts.length} products
            </span>
          </div>

          <div className="shop-toolbar">
            <div className="search-box">
              <Search size={19} />
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {search && (
                <button className="clear-search" onClick={() => setSearch("")}>
                  <X size={16} />
                </button>
              )}
            </div>

            <select
              className="sort-select"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>

          <div className="active-filters">
            {categories.slice(0, 7).map((category) => (
              <button
                key={category.name}
                className={`filter-chip ${
                  selectedCategory === category.name ? "filter-active" : ""
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => {
                const isWished = wishlist.some(
                  (item) => item.id === product.id
                );

                return (
                  <article className="product-card" key={product.id}>
                    <div className="product-image-wrap" onClick={() => setSelectedProduct(product)} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedProduct(product); } }} style={{ cursor: "pointer" }}>
                      <img
                        className="product-image"
                        src={imageUrl(product.image)}
                        alt={product.name}
                        loading="lazy"
                      />

                      {product.badge && (
                        <span className="product-badge">{product.badge}</span>
                      )}

                      <button
                        className={`wishlist-button ${isWished ? "wished" : ""}`}
                        onClick={(event) => { event.stopPropagation(); toggleWishlist(product); }}
                        aria-label={
                          isWished ? "Remove from wishlist" : "Add to wishlist"
                        }
                      >
                        <Heart size={18} fill={isWished ? "currentColor" : "none"} />
                      </button>

                      <button
                        className="quick-add"
                        onClick={(event) => { event.stopPropagation(); addToCart(product); }}
                      >
                        <Plus size={17} /> Quick add
                      </button>
                    </div>

                    <div className="product-info">
                      <span className="product-category">{product.category}</span>
                      <h3 onClick={() => setSelectedProduct(product)} style={{ cursor: "pointer" }}>{product.name}</h3>
                      <div className="product-rating">
                        <Star size={14} fill="currentColor" />
                        <strong>{product.rating}</strong>
                        <span>Customer rating</span>
                      </div>
                      <div className="product-bottom">
                        <div className="product-prices">
                          <strong>{formatPrice(product.price)}</strong>
                          <del>{formatPrice(product.oldPrice)}</del>
                        </div>
                        <button
                          className="add-cart-button"
                          onClick={() => addToCart(product)}
                          aria-label={`Add ${product.name} to cart`}
                        >
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-results">
              <span>🔎</span>
              <h3>No products found</h3>
              <p>Try another search or choose a different category.</p>
              <button
                className="primary-button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All Products");
                }}
              >
                Show all products
              </button>
            </div>
          )}
        </section>

        <section className="newsletter">
          <div>
            <span className="section-kicker">A LITTLE SOMETHING EXTRA</span>
            <h2>Good things are just around the corner.</h2>
            <p>Keep exploring NovaCart and find products that fit your life.</p>
          </div>
          <button
            className="newsletter-button"
            onClick={() => chooseCategory("All Products")}
          >
            Browse products <ArrowRight size={18} />
          </button>
        </section>
      </main>

      <footer className="footer" id="about">
        <a className="logo footer-logo" href="#">
          <span className="logo-icon"><ShoppingBag size={21} /></span>
          <span>Nova<span className="logo-accent">Cart</span></span>
        </a>
        <p>Your everyday shopping destination.</p>
        <span className="footer-copy">© {new Date().getFullYear()} NovaCart. Demo project.</span>
      </footer>

      {activePanel && (
        <div className="panel-backdrop" onClick={() => setActivePanel("")}>
          <aside
            className="side-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="panel-header">
              <div>
                <span className="section-kicker">YOUR NOVACART</span>
                <h2>{activePanel === "cart" ? "Shopping cart" : activePanel === "login" ? (loginMode === "login" ? "Welcome back" : "Create account") : activePanel === "account" ? "My account" : "Wishlist"}</h2>
              </div>
              <button
                className="icon-button"
                onClick={() => setActivePanel("")}
                aria-label="Close panel"
              >
                <X />
              </button>
            </div>

            {activePanel === "cart" ? (
              <>
                <div className="panel-items">
                  {cart.length ? (
                    cart.map((item) => (
                      <div className="panel-item" key={item.id}>
                        <img src={imageUrl(item.image)} alt={item.name} />
                        <div className="panel-item-info">
                          <h3>{item.name}</h3>
                          <strong>{formatPrice(item.price)}</strong>
                          <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity"><Minus size={14} /></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity"><Plus size={14} /></button>
                          </div>
                        </div>
                        <button
                          className="remove-button"
                          onClick={() =>
                            setCart((current) =>
                              current.filter((product) => product.id !== item.id)
                            )
                          }
                          aria-label="Remove item"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="panel-empty">
                      <ShoppingCart size={38} />
                      <h3>Your cart is waiting</h3>
                      <p>Add something you love to get started.</p>
                    </div>
                  )}
                </div>

                <div className="panel-footer">
                  <div className="subtotal-row"><span>Subtotal</span><strong>{formatPrice(cartTotal)}</strong></div>
                  <p>Shipping and payment are not configured in this demo.</p>

<button
  className="primary-button checkout-button"
  disabled={!cart.length}
  onClick={() => {
    setActivePanel("");
    setShowCheckout(true);
  }}
>
  Proceed to Checkout <ArrowRight size={18} />
</button>

                </div>
              </>
            ) : activePanel === "account" ? (
              <div style={{ padding: "22px 4px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#eef2ff", color: "#4338ca", display: "grid", placeItems: "center", fontSize: "26px", fontWeight: 700 }}>
                  {currentUserName.charAt(0).toUpperCase()}
                </div>
                <h3 style={{ margin: 0 }}>Hello, {currentUserName}!</h3>
                <p style={{ margin: 0, color: "#6b7280" }}>You are signed in to your NovaCart demo account.</p>
                <button className="primary-button" type="button" onClick={() => { setCurrentUserName(""); localStorage.removeItem("novacartUserName"); setLoginMode("login"); setActivePanel(""); notify("You have logged out."); }} style={{ justifyContent: "center" }}>
                  Log out
                </button>
              </div>
            ) : activePanel === "login" ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const nameToShow = loginMode === "signup"
                    ? loginName.trim()
                    : (loginEmail.split("@")[0] || "Customer").replace(/[._-]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
                  setCurrentUserName(nameToShow);
                  localStorage.setItem("novacartUserName", nameToShow);
                  notify(`Welcome, ${nameToShow}!`);
                  setActivePanel("");
                  setLoginPassword("");
                }}
                style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "22px 4px" }}
              >
                <p style={{ margin: "0 0 8px", color: "#6b7280", lineHeight: 1.6 }}>
                  {loginMode === "login"
                    ? "Sign in to your NovaCart account."
                    : "Create an account to start your NovaCart journey."}
                </p>
                {loginMode === "signup" && (
                  <label style={{ display: "flex", flexDirection: "column", gap: "7px", fontWeight: 600 }}>
                    Full name
                    <input required value={loginName} onChange={(event) => setLoginName(event.target.value)} placeholder="Enter your full name" style={{ padding: "13px", border: "1px solid #d1d5db", borderRadius: "10px", font: "inherit" }} />
                  </label>
                )}
                <label style={{ display: "flex", flexDirection: "column", gap: "7px", fontWeight: 600 }}>
                  Email address
                  <input required type="email" value={loginEmail} onChange={(event) => setLoginEmail(event.target.value)} placeholder="you@example.com" style={{ padding: "13px", border: "1px solid #d1d5db", borderRadius: "10px", font: "inherit" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "7px", fontWeight: 600 }}>
                  Password
                  <input required minLength={6} type="password" value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} placeholder="At least 6 characters" style={{ padding: "13px", border: "1px solid #d1d5db", borderRadius: "10px", font: "inherit" }} />
                </label>
                <button className="primary-button" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}>
                  {loginMode === "login" ? "Login" : "Create account"} <ArrowRight size={17} />
                </button>
                <p style={{ textAlign: "center", margin: "6px 0 0", color: "#6b7280" }}>
                  {loginMode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                  <button type="button" className="text-action" onClick={() => setLoginMode(loginMode === "login" ? "signup" : "login")}>
                    {loginMode === "login" ? "Sign up" : "Login"}
                  </button>
                </p>
                <small style={{ color: "#9ca3af", lineHeight: 1.5 }}>
                  Demo only: this form does not create accounts or verify passwords until a backend is connected.
                </small>
              </form>
            ) : (
              <div className="panel-items">
                {wishlist.length ? (
                  wishlist.map((item) => (
                    <div className="panel-item" key={item.id}>
                      <img src={imageUrl(item.image)} alt={item.name} />
                      <div className="panel-item-info">
                        <h3>{item.name}</h3>
                        <strong>{formatPrice(item.price)}</strong>
                        <button className="text-action" onClick={() => addToCart(item)}>
                          Add to cart
                        </button>
                      </div>
                      <button
                        className="remove-button"
                        onClick={() =>
                          setWishlist((current) =>
                            current.filter((product) => product.id !== item.id)
                          )
                        }
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="panel-empty">
                    <Heart size={38} />
                    <h3>Your wishlist is empty</h3>
                    <p>Tap a heart on a product to save it here.</p>
                  </div>
                )}
              </div>
            )}
          </aside>
        </div>
      )}

      {selectedProduct && (
        <div
          role="presentation"
          onClick={() => setSelectedProduct(null)}
          style={{ position: "fixed", inset: 0, zIndex: 1200, background: "rgba(15, 23, 42, 0.68)", display: "flex", alignItems: "center", justifyContent: "center", padding: "18px", overflowY: "auto" }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProduct.name} product details`}
            onClick={(event) => event.stopPropagation()}
            style={{ width: "min(900px, 100%)", maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: "20px", position: "relative", padding: "clamp(18px, 4vw, 32px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "28px", color: "#111827" }}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
              style={{ position: "absolute", right: "14px", top: "14px", zIndex: 1, border: "0", borderRadius: "50%", width: "40px", height: "40px", display: "grid", placeItems: "center", background: "#f3f4f6", cursor: "pointer" }}
            ><X size={20} /></button>
            <div style={{ minWidth: 0 }}>
              <img src={imageUrl(selectedProduct.image)} alt={selectedProduct.name} style={{ width: "100%", maxHeight: "440px", objectFit: "cover", borderRadius: "14px", background: "#f3f4f6" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px", paddingTop: "12px" }}>
              <span className="product-category">{selectedProduct.category}</span>
              {selectedProduct.badge && <span className="product-badge" style={{ position: "static" }}>{selectedProduct.badge}</span>}
              <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", lineHeight: 1.2, margin: 0 }}>{selectedProduct.name}</h2>
              <div className="product-rating"><Star size={16} fill="currentColor" /><strong>{selectedProduct.rating}</strong><span>Customer rating</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <strong style={{ fontSize: "28px", color: "#111827" }}>{formatPrice(selectedProduct.price)}</strong>
                <del style={{ color: "#9ca3af" }}>{formatPrice(selectedProduct.oldPrice)}</del>
                {selectedProduct.oldPrice > selectedProduct.price && <span style={{ color: "#15803d", fontWeight: 700 }}>{Math.round((1 - selectedProduct.price / selectedProduct.oldPrice) * 100)}% off</span>}
              </div>
              <p style={{ color: "#6b7280", lineHeight: 1.7, margin: 0 }}>
                Discover the {selectedProduct.name.toLowerCase()} from NovaCart. Explore this {selectedProduct.category.toLowerCase()} pick at the displayed price. Product specifications and availability can be connected to your backend later.
              </p>
              <div style={{ background: "#f9fafb", borderRadius: "12px", padding: "14px 16px", width: "100%", boxSizing: "border-box" }}>
                <p style={{ margin: "0 0 8px", fontWeight: 700 }}>Product information</p>
                <p style={{ margin: "5px 0", color: "#6b7280" }}>Category: {selectedProduct.category}</p>
                <p style={{ margin: "5px 0", color: "#6b7280" }}>Rating: {selectedProduct.rating} / 5</p>
                <p style={{ margin: "5px 0", color: "#6b7280" }}>Product ID: NC-{String(selectedProduct.id).padStart(4, "0")}</p>
                <p style={{ margin: "5px 0", color: "#6b7280" }}>Availability: Demo listing</p>
              </div>
              <div style={{ display: "flex", gap: "10px", width: "100%", flexWrap: "wrap", marginTop: "4px" }}>
                <button className="primary-button" style={{ flex: "1 1 160px", justifyContent: "center" }} onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}><ShoppingCart size={18} /> Add to cart</button>
                <button className="add-cart-button" style={{ minWidth: "52px", minHeight: "48px" }} onClick={() => toggleWishlist(selectedProduct)} aria-label="Add product to wishlist"><Heart size={19} /></button>
              </div>
              <small style={{ color: "#9ca3af", lineHeight: 1.5 }}>Demo details: exact materials, sizes, warranty, delivery and stock information are not yet configured.</small>
            </div>
          </section>
        </div>
      )}

      {toast && <div className="toast-message">✓ {toast}</div>}
    </div>
  );
}

export default App;
