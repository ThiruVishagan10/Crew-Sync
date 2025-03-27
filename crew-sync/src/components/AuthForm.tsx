"use client";

import { useState } from "react";
import { signIn, signUp, signInWithGoogle } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGoogle } from "react-icons/fa";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      router.push("/chat");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      {/* Background Video */}
      <video autoPlay loop muted className="video-background">
        <source src="/winter-forest-snow-moewalls-com.mp4" type="video/mp4" />
      </video>

      {/* Auth Card with Blur & Light Blue Shade */}
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg backdrop-blur-md bg-blue-200/30 border-2 border-blue-200/50">
        <div className="flex justify-center mb-4">
          <span className="text-xl font-bold text-black">LOGO</span>
        </div>
        <h2 className="text-xl font-bold text-center text-black mb-4">Welcome back</h2>
        <div className="flex justify-center space-x-2 mb-6">
          <button
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${!isSignUp ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            onClick={() => setIsSignUp(false)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${isSignUp ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            onClick={() => setIsSignUp(true)}
          >
            Sign up
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="placeholder-black text-black"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="placeholder-black text-black"
          />
          <div className="flex justify-between text-sm text-black">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <button className="text-black hover:underline">Forgot your password?</button>
          </div>
          <Button type="submit" className="w-full bg-black text-white flex items-center justify-center hover:bg-gray-800">
            <span className="mr-2">🔑</span> {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-black">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={signInWithGoogle} className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600">
            <FaGoogle size={20} />
          </button>
        </div>
        <p className="text-xs text-center text-black mt-4">© 2024 Your Company. All rights reserved. <span className="text-black">Privacy</span> · <span className="text-black">Terms</span></p>
      </div>
    </div>
  );
};

export default AuthForm;
