"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
// import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const AdminPanel = () => {
  // const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  
  // For development - bypass authentication
  const isLoaded = true;
  const isSignedIn = true;
  const user = { firstName: "Developer", emailAddresses: [{ emailAddress: "dkpandeyking123@gmail.com" }] };
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [activeSection, setActiveSection] = useState("products");
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    price: "",
    image: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchSales();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) console.error("Error fetching products:", error);
    else setProducts(data);
  };

  const fetchSales = async () => {
    const { data, error } = await supabase.from("sales").select("*");
    if (error) console.error("Error fetching sales:", error);
    else setSales(data);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setShowForm(false);
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      console.error("Error deleting product:", error);
    } else {
      setProducts(products.filter(product => product.id !== id));
      setMessage("Product deleted successfully!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleAddProduct = () => {
    setFormData({ id: null, title: "", price: "", image: "" });
    setIsEditing(false);
    setShowForm(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const { data, error } = await supabase.storage
      .from("images")
      .upload(`products/${file.name}`, file, { upsert: true });

    if (error) {
      console.error("Error uploading image:", error);
    } else {
      const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/products/${file.name}`;
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.price) return;
    
    const { data, error } = isEditing
      ? await supabase.from("products").update(formData).eq("id", formData.id)
      : await supabase.from("products").insert([formData]);

    if (error) {
      console.error("Error saving product:", error);
    } else {
      fetchProducts();
      setShowForm(false);
      setMessage(isEditing ? "Product updated successfully!" : "Product added successfully!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  // Authentication check
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">🔒 Admin Access Required</h1>
          <p className="text-gray-600 mb-6">
            You need to sign in to access the admin panel.
          </p>
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Sign In to Continue
            </button>
          </SignInButton>
        </div>
      </div>
    );
  }

  // Check if user is admin (you can customize this logic)
  const isAdmin = user?.emailAddresses?.[0]?.emailAddress === "dkpandeyking123@gmail.com" || 
                  user?.username === "admin";

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <h1 className="text-3xl font-bold text-red-600 mb-4">❌ Access Denied</h1>
          <p className="text-gray-600 mb-6">
            You don't have permission to access the admin panel.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-16">
      {/* Admin Header */}
      <div className="w-full max-w-5xl mb-6">
        <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">👨‍💼 Admin Dashboard</h1>
            <p className="text-gray-600">Welcome, {user?.firstName || "Admin"}</p>
          </div>
          <button 
            onClick={() => router.push("/")}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            🏠 Back to Home
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-md text-center">
        <div className="flex justify-around mb-4">
          <button onClick={() => handleSectionChange("products")} className={`px-4 py-2 ${activeSection === "products" ? "bg-black text-white" : "bg-gray-300"} rounded-lg`}>Products</button>
          <button onClick={() => handleSectionChange("sales")} className={`px-4 py-2 ${activeSection === "sales" ? "bg-black text-white" : "bg-gray-300"} rounded-lg`}>Sales</button>
        </div>
      </div>

      {message && <div className="bg-green-500 text-white p-2 rounded-lg mb-4">{message}</div>}

      {showForm ? (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-bold text-center mb-4">{isEditing ? "Edit Product" : "Add Product"}</h2>
          <input type="text" placeholder="Title" className="w-full mb-3 p-2 border rounded-lg" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
          <input type="text" placeholder="Price" className="w-full mb-3 p-2 border rounded-lg" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
          <input type="file" accept="image/*" className="w-full mb-3 p-2 border rounded-lg" onChange={handleImageUpload} />
          {formData.image && <img src={formData.image} alt="Uploaded" className="w-full h-40 object-cover mb-3" />}
          <div className="flex justify-between">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>{isEditing ? "Update" : "Add"}</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowForm(false)}>Back</button>
          </div>
        </div>
      ) : activeSection === "products" ? (
        <div className="w-full max-w-5xl mt-6">
          <h2 className="text-2xl font-bold text-center mb-4">Product List</h2>
          <button onClick={handleAddProduct} className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4">Add Product</button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white relative">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mt-2">{product.title}</h3>
                <p className="text-gray-600">₹{product.price}</p>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => handleEdit(product)} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Edit</button>
                  <button onClick={() => handleDelete(product.id)} className="flex-1 bg-red-600 text-white py-2 rounded-lg">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdminPanel;
