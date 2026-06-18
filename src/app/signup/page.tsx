"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import api from "@/services/api";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      setMessage("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setMessage("");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await api.post("/auth/signup", {
        name,
        email,
        password,
      });

      setMessage(response.data.message || "Account created successfully!");
      localStorage.setItem("token", response.data.token || response.data.accessToken || "");
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleContinueWithGoogle = () => {
    router.push("/dashboard");
  };

  const handleContinueWithApple = () => {
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
      <div className="w-full max-w-md rounded-[40px] bg-white px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.08)] text-center sm:px-8 sm:py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1F3919] mb-2">Create Account</h1>
          <p className="text-sm text-gray-500 sm:text-base">
            Sign up to start your private coaching sessions.
          </p>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-full border border-[#E4E7EA] bg-[#F8FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#8DE45E] focus:ring-2 focus:ring-[#DFF5D4]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border border-[#E4E7EA] bg-[#F8FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#8DE45E] focus:ring-2 focus:ring-[#DFF5D4]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full border border-[#E4E7EA] bg-[#F8FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#8DE45E] focus:ring-2 focus:ring-[#DFF5D4]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-full border border-[#E4E7EA] bg-[#F8FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#8DE45E] focus:ring-2 focus:ring-[#DFF5D4]"
            />
          </div>
        </div>

        <button
          onClick={handleSignUp}
          disabled={loading}
          className="w-full rounded-full bg-[#1F3919] py-3 mt-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#13300c] disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        {message && <p className="text-center text-green-600 mt-4 font-medium">{message}</p>}
        {error && <p className="text-center text-red-600 mt-4 font-medium">{error}</p>}

        <div className="flex items-center gap-3 text-xs font-medium text-gray-400 uppercase tracking-[0.2em] my-6">
          <span className="block h-px flex-1 bg-[#E4E7EA]"></span>
          or
          <span className="block h-px flex-1 bg-[#E4E7EA]"></span>
        </div>

        <button
          onClick={handleContinueWithGoogle}
          className="w-full rounded-full border border-[#E4E7EA] bg-white py-3 px-4 mb-4 flex items-center justify-center gap-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-[#F5F7F9] transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <button
          onClick={handleContinueWithApple}
          className="w-full rounded-full bg-[#8DE45E] py-3 px-4 mb-4 flex items-center justify-center gap-3 text-sm font-semibold text-black shadow-sm hover:bg-[#7bd54f] transition"
        >
          <FaApple size={20} />
          Continue with Apple
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-black">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
