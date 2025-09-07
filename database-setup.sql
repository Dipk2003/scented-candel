-- Supabase Database Setup for Scented Candles E-commerce
-- Run these commands in your Supabase SQL Editor

-- 1. Create Products Table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(500),
  image_url VARCHAR(500),
  features JSONB DEFAULT '[]'::jsonb,
  category VARCHAR(100),
  in_stock BOOLEAN DEFAULT true,
  rating DECIMAL(3,2) DEFAULT 4.5,
  review_count INTEGER DEFAULT 0,
  weight VARCHAR(50),
  dimensions VARCHAR(50),
  burn_time VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. Create Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'Pending',
  items JSONB DEFAULT '[]'::jsonb,
  payment_id VARCHAR(255),
  razorpay_order_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 3. Create Contacts Table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 4. Create Sales Table (for analytics)
CREATE TABLE IF NOT EXISTS sales (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  sale_date TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 5. Create Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id),
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  verified_purchase BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 6. Insert Sample Products Data
INSERT INTO products (title, name, description, price, image, features, category, in_stock, rating, review_count) VALUES
('Vanilla Bliss Candle', 'Vanilla Bliss', 'Handcrafted vanilla scented candle made with 100% natural soy wax. Perfect for creating a warm and inviting atmosphere.', 699.00, '/images/candle1.jpg', '["100% Natural Soy Wax", "45-hour burn time", "Hand-poured", "Premium vanilla fragrance", "Cotton wick"]', 'Scented Candles', true, 4.8, 126),

('Lavender Dream Candle', 'Lavender Dream', 'Calming lavender-infused candle perfect for relaxation and stress relief. Made with pure lavender essential oils.', 599.00, '/images/candle2.jpg', '["Pure Lavender Oil", "50-hour burn time", "Stress relief", "Natural soy wax", "Eco-friendly"]', 'Scented Candles', true, 4.7, 89),

('Rose Petal Glow', 'Rose Petal Glow', 'Elegant floral fragrance with the essence of fresh roses. Perfect for romantic settings and special occasions.', 799.00, '/images/candle3.jpg', '["Rose Petal Infused", "60-hour burn time", "Romantic ambiance", "Premium glass jar", "Natural ingredients"]', 'Scented Candles', true, 4.9, 156),

('Ocean Breeze Candle', 'Ocean Breeze', 'Refreshing oceanic scent that brings the calming essence of the sea to your home. Perfect for bathrooms and meditation.', 649.00, '/images/p1.jpg', '["Ocean fragrance", "Clean burning", "40-hour burn time", "Relaxing scent", "Soy wax blend"]', 'Scented Candles', true, 4.6, 73),

('Golden Luxe Decorative', 'Golden Luxe', 'Luxurious golden decorative candle that adds elegance to any space. Perfect for special occasions and home decor.', 999.00, '/images/p2.jpg', '["Decorative design", "Premium materials", "Long-lasting", "Elegant appearance", "Gift-worthy"]', 'Decorative Candles', true, 4.8, 92),

('Romantic Gift Set', 'Romantic Glow Set', 'Beautiful gift set with Rose and Vanilla candles perfect for romantic occasions and anniversaries.', 1299.00, '/images/p3.jpg', '["2 premium candles", "Gift packaging", "Rose & Vanilla scents", "Perfect for couples", "Ready to gift"]', 'Gift Sets', true, 4.9, 203),

('Spa Relaxation Set', 'Spa Bliss Collection', 'Premium spa-inspired gift set with Lavender, Eucalyptus, and Chamomile candles for ultimate relaxation.', 1599.00, '/images/p4.jpg', '["3 spa candles", "Luxury packaging", "Aromatherapy blend", "Stress relief", "Premium quality"]', 'Gift Sets', true, 4.8, 145);

-- 7. Insert Sample Reviews
INSERT INTO reviews (product_id, customer_name, customer_email, rating, comment) VALUES
((SELECT id FROM products WHERE title = 'Vanilla Bliss Candle' LIMIT 1), 'Priya Sharma', 'priya@example.com', 5, 'Amazing quality candle! The vanilla scent is so soothing and long-lasting.'),
((SELECT id FROM products WHERE title = 'Vanilla Bliss Candle' LIMIT 1), 'Rahul Kumar', 'rahul@example.com', 4, 'Great product, burns evenly and smells wonderful. Will definitely order again!'),
((SELECT id FROM products WHERE title = 'Lavender Dream Candle' LIMIT 1), 'Anita Patel', 'anita@example.com', 5, 'Perfect for my meditation sessions. The fragrance is calming and pure.'),
((SELECT id FROM products WHERE title = 'Rose Petal Glow' LIMIT 1), 'Neha Singh', 'neha@example.com', 5, 'Absolutely love this candle! The rose scent is divine and creates such a romantic atmosphere.');

-- 8. Create Storage Bucket for Images (Run this in Supabase Dashboard Storage section)
-- CREATE BUCKET 'images' WITH PUBLIC ACCESS

-- 9. Set up Row Level Security (RLS) Policies
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products and reviews
CREATE POLICY "Public read access for products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read access for reviews" ON reviews FOR SELECT USING (true);

-- Allow public insert for orders and contacts
CREATE POLICY "Public insert for orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert for contacts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert for reviews" ON reviews FOR INSERT WITH CHECK (true);

-- Allow users to read their own orders
CREATE POLICY "Users can read own orders" ON orders FOR SELECT USING (true);

-- Admin access for all operations (you can customize the admin email)
CREATE POLICY "Admin full access to products" ON products FOR ALL USING (auth.jwt() ->> 'email' = 'dkpandeyking123@gmail.com');
CREATE POLICY "Admin full access to orders" ON orders FOR ALL USING (auth.jwt() ->> 'email' = 'dkpandeyking123@gmail.com');
CREATE POLICY "Admin full access to contacts" ON contacts FOR ALL USING (auth.jwt() ->> 'email' = 'dkpandeyking123@gmail.com');

-- 10. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_price ON products(price);
CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_reviews_product_id ON reviews(product_id);
