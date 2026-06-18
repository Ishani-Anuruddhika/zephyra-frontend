"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import api from "@/services/api";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
      <div className="w-full max-w-md rounded-[40px] bg-white px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.08)] text-center sm:px-8 sm:py-10">
        
        <div className="mx-auto mb-8 h-52 w-52 flex items-center justify-center sm:h-56 sm:w-56">
          <img
            src="/illustration.png"
            alt="Private Coaching"
            className="h-44 w-auto sm:h-48"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#1F3919] mb-3 sm:text-4xl">
          Private Coaching
        </h1>

        <p className="text-sm text-gray-500 leading-6 mb-8 px-2 sm:text-base sm:leading-7 sm:px-6">
          Add one-on-one, confidential sessions for only
          <span className="font-semibold text-black"> $35 per session</span>.
        </p>

        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="h-1.5 w-30 rounded-full bg-[#8DE45E]"></span>
          <span className="h-1.5 w-30 rounded-full bg-[#8DE45E]"></span>
          <span className="h-1.5 w-30 rounded-full bg-gray-200"></span>
        </div>

        <button className="w-full rounded-full border border-[#E4E7EA] bg-white py-3 px-4 mb-4 flex items-center justify-center gap-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-[#F5F7F9] transition sm:text-base">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <button className="w-full rounded-full bg-[#8DE45E] py-3 px-4 mb-4 flex items-center justify-center gap-3 text-sm font-semibold text-black shadow-sm hover:bg-[#7bd54f] transition sm:text-base">
          <FaApple size={20} />
          Continue with Apple
        </button>

        <button className="w-full rounded-full bg-[#E4F7D9] py-3 px-4 mb-6 text-sm font-semibold text-[#1D3F0D] shadow-sm hover:bg-[#d0f1b8] transition sm:text-base">
          Continue as Guest
        </button>

        <p className="text-sm text-gray-600 sm:text-base">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-black">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}