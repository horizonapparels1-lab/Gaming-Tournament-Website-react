import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Valorant Masters 2024 Entry',
      price: 50,
      quantity: 1,
      image: '/images/image1.jpg',
      type: 'Tournament Entry',
    },
    {
      id: 2,
      name: 'Premium Team Badge',
      price: 15,
      quantity: 2,
      image: '/images/image2.jpg',
      type: 'Merchandise',
    },
    {
      id: 3,
      name: 'VIP Spectator Pass',
      price: 25,
      quantity: 1,
      image: '/images/image3.jpg',
      type: 'Event Pass',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      <h1
        className="text-[3.5rem] mb-10 font-black tracking-widest text-center"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          background: 'linear-gradient(135deg, #f0f0ff 0%, #22d3ee 50%, #7c3aed 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl dark:text-[#a0a0cc] text-gray-700 mb-6">Your cart is empty</p>
          <a
            href="/services"
            className="btn-shimmer inline-block px-8 py-4 rounded-xl font-bold text-white text-lg no-underline transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
            }}
          >
            Browse Tournaments
          </a>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8 w-full">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/50"
                style={{
                  background: 'linear-gradient(145deg, #111127, #0d0d22)',
                  border: '1px solid #2a2a4a',
                }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <span className="text-xs text-cyan-400 font-semibold tracking-wide">
                      {item.type}
                    </span>
                    <h3
                      className="text-xl mb-2 dark:text-[#f0f0ff] text-gray-900"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-amber-400 mb-4">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-lg bg-violet-600/20 text-violet-400 font-bold hover:bg-violet-600/40 transition-all"
                        >
                          −
                        </button>
                        <span className="text-lg font-semibold dark:text-[#f0f0ff] text-gray-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-lg bg-violet-600/20 text-violet-400 font-bold hover:bg-violet-600/40 transition-all"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto px-4 py-2 rounded-lg bg-red-600/20 text-red-400 font-semibold hover:bg-red-600/40 transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl p-8 sticky top-24"
              style={{
                background: 'linear-gradient(145deg, #111127, #0d0d22)',
                border: '1px solid #2a2a4a',
              }}
            >
              <h2
                className="text-2xl mb-6 dark:text-[#f0f0ff] text-gray-900"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Order Summary
              </h2>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between">
                  <span className="dark:text-[#a0a0cc] text-gray-700">Subtotal</span>
                  <span className="font-semibold dark:text-[#f0f0ff] text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="dark:text-[#a0a0cc] text-gray-700">Tax (10%)</span>
                  <span className="font-semibold dark:text-[#f0f0ff] text-gray-900">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-[#2a2a4a] pt-4 flex justify-between">
                  <span
                    className="text-xl font-bold dark:text-[#f0f0ff] text-gray-900"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Total
                  </span>
                  <span
                    className="text-xl font-bold text-cyan-400"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                className="btn-shimmer w-full px-6 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
                }}
              >
                Proceed to Checkout
              </button>

              <button className="w-full mt-4 px-6 py-3 rounded-xl font-semibold dark:text-[#a0a0cc] text-gray-700 border border-[#2a2a4a] hover:border-cyan-400/50 transition-all">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
