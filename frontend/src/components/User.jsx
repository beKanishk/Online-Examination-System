import { useState } from "react";
import AuthForm from "./AuthForm";

export default function App() {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <AuthForm isRegister={isRegister} />
      <button onClick={() => setIsRegister(!isRegister)} className="mt-4 text-blue-500 hover:underline">
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
    </div>
  );
}
