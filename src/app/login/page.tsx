"use client";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import api from "@/services/api";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      setMessage(response.data.message || "Login successful!");
      localStorage.setItem("token", response.data.token);

    } catch (error: any) {
      setError(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = async () => {
    try {
      const response = await api.post("/auth/guest");

      setMessage(response.data.message);

    } catch (error) {
      setMessage("Guest Login Failed");
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await api.post(
        `/auth/forgot-password?email=${email}`
      );

      setMessage(response.data.message);

    } catch (error) {
      setMessage("Forgot Password Failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
      <div className="w-full max-w-md rounded-[40px] bg-white px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:px-8 sm:py-10">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1F3919] mb-2">
            Login
          </h1>
          <p className="text-sm text-gray-500 sm:text-base">
            Sign in to continue your learning journey.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border border-[#E4E7EA] bg-[#F8FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#8DE45E] focus:ring-2 focus:ring-[#DFF5D4]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full border border-[#E4E7EA] bg-[#F8FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#8DE45E] focus:ring-2 focus:ring-[#DFF5D4]"
            />
          </div>
        </div>

        <div className="text-right mt-4 mb-6">
          <button
            onClick={handleForgotPassword}
            className="text-sm text-[#1F3919] font-medium hover:text-[#0F220B]"
          >
            Forgot Password?
          </button>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full rounded-full bg-[#1F3919] py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#13300c] disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && (
          <p className="text-center text-green-600 mt-4 font-medium">
            {message}
          </p>
        )}
        {error && (
          <p className="text-center text-red-600 mt-4 font-medium">
            {error}
          </p>
        )}

        <div className="flex items-center gap-3 text-xs font-medium text-gray-400 uppercase tracking-[0.2em] my-6">
          <span className="block h-px flex-1 bg-[#E4E7EA]"></span>
          or
          <span className="block h-px flex-1 bg-[#E4E7EA]"></span>
        </div>

        <button className="w-full rounded-full border border-[#E4E7EA] bg-white py-3 px-4 mb-4 flex items-center justify-center gap-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-[#F5F7F9] transition">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <button className="w-full rounded-full bg-[#8DE45E] py-3 px-4 mb-4 flex items-center justify-center gap-3 text-sm font-semibold text-black shadow-sm hover:bg-[#7bd54f] transition">
          <FaApple size={20} />
          Continue with Apple
        </button>

        <button
          onClick={handleGuest}
          className="w-full rounded-full bg-[#E4F7D9] py-3 px-4 mb-6 text-sm font-semibold text-[#1D3F0D] shadow-sm hover:bg-[#d0f1b8] transition"
        >
          Continue as Guest
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" target="_blank" rel="noopener noreferrer" className="font-semibold text-black">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
