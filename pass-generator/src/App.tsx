import { useState, useCallback, useEffect, useRef } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isNumberAllowed, setIsnumberAllowed] = useState(false);
  const [isSymbolAllowed, setIsSymbolAllowed] = useState(false);


  const generatePassword = useCallback(() => {
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=";
    let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (isNumberAllowed) data += numbers;
    if (isSymbolAllowed) data += symbols;
    for (let i = 0; i < length; i++) {
      pass += data.charAt(Math.floor(Math.random() * data.length));
    }
    setPassword(pass);
  }, [length, isNumberAllowed, isSymbolAllowed]);


  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isSymbolAllowed, generatePassword]);


  const passwordRef = useRef(null)

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordRef.current?.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-60 to-pink-200 p-6">
      <div className="bg-white/30 backdrop-blur-xl rounded-md shadow-lg p-8 w-full max-w-md text-center transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 drop-shadow-sm">
          Password Generator
        </h1>

        <div className="mb-6 animate-pulse">
          <input
            type="text"
            placeholder="Generated Password"
            value={password}
            ref={passwordRef}
            className="w-56 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 text-black text-lg placeholder-gray-500"
          />
        </div>

        <button onClick={copyToClipboard} className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition transform hover:scale-105 mb-6">
          Copy
        </button>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <label htmlFor="length" className="text-gray-800 font-semibold">
            Length:
          </label>
          <input
            id="length"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="accent-indigo-500"
          />
          <span className="px-2 py-1 text-gray-800 font-semibold bg-white/80 rounded">
            {length}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full shadow-sm">
            <input
              id="number"
              type="checkbox"
              name="number"
              className="accent-indigo-500 h-5 w-5"
              onChange={() => setIsnumberAllowed((prev) => !prev)}
            />
            <label htmlFor="number" className="text-gray-700 font-medium">
              Include Number
            </label>
          </div>
          <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full shadow-sm">
            <input
              id="symbol"
              type="checkbox"
              name="symbol"
              className="accent-indigo-500 h-5 w-5"
              onChange={() => setIsSymbolAllowed((prev) => !prev)}
            />
            <label htmlFor="symbol" className="text-gray-700 font-medium">
              Include Symbol
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}



