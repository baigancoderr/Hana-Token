import { useEffect, useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { Navigate } from "react-router-dom";
import { isWalletRegistered } from "../referralStorage";

export default function DashboardAccessGate({ children }) {
  const { address, isConnected } = useAppKitAccount({ namespace: "eip155" });
  const [registered, setRegistered] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isConnected || !address) {
      setRegistered(false);
      return;
    }

    try {
      setRegistered(isWalletRegistered(address));
      setError("");
    } catch (storageError) {
      setRegistered(null);
      setError(
        storageError instanceof Error
          ? `Could not check this wallet's registration: ${storageError.message}`
          : "Could not check this wallet's registration.",
      );
    }
  }, [address, isConnected]);

  if (!isConnected || !address) {
    return <Navigate to="/login" replace />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black p-6 text-center text-red-300">
        {error}
      </div>
    );
  }

  if (registered === null) return null;
  if (!registered) return <Navigate to="/register" replace />;

  return children;
}
