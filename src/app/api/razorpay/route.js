import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    if (!amount) {
      return new Response(JSON.stringify({ error: "Amount is required" }), { status: 400 });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // Convert to paisa
      currency: "INR",
      receipt: `receipt_${Math.random().toString(36).substr(2, 9)}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    return new Response(JSON.stringify({ success: true, order }), { status: 200 });
  } catch (error) {
    console.error("Razorpay API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
