import { signInWithGoogle } from "@/firebase/auth";
import { FaGoogle } from "react-icons/fa";

export const GoogleSignInButton = () => {
  return (
    <button
      onClick={signInWithGoogle}
      className="flex items-center justify-center w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
    >
      <FaGoogle className="mr-2 text-red-500" />
      Sign in with Google
    </button>
  );
};
