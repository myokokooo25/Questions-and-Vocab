
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (key: string) => void;
  error: string | null;
}

const Login: React.FC<LoginProps> = ({ onLogin, error }) => {
  const [key, setKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onLogin(key.trim());
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-neumorphic-bg text-neumorphic-text">
      <div className="w-full max-w-sm">
        <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-700">Japanese Technical Vocabulary</h1>
            <p className="text-slate-500 mt-2">Please enter your access key.</p>
        </header>
        <form onSubmit={handleSubmit} className="bg-neumorphic-bg shadow-neumorphic-outset p-8 rounded-xl space-y-6">
          <div>
            <label htmlFor="access-key" className="block text-sm font-medium text-slate-600 mb-2">
              Access Key
            </label>
            <div className="bg-neumorphic-bg shadow-neumorphic-inset rounded-lg">
                <input
                  id="access-key"
                  type="password"
                  value={key}
                  onChange={(e) => setKey(e.target.value.toUpperCase())}
                  className="bg-transparent border-none w-full p-3 outline-none"
                  placeholder="••••••••••••"
                  required
                  autoFocus
                />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset font-bold py-3 px-4 rounded-lg"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;