import { useEffect, useState } from "react";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useDisconnect } from "wagmi";
import { isAddress } from "viem";
import { useNavigate, useSearchParams } from "react-router-dom";

const referralStorageKey = (address) =>
  `hana-referral-${address.toLowerCase()}`;

export default function DashboardAccessGate({ children }) {
  const { address, isConnected } = useAppKitAccount({ namespace: "eip155" });
  const { open } = useAppKit();
  const { disconnectAsync } = useDisconnect();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryReferral = searchParams.get("ref") ?? "";
  const [referralAddress, setReferralAddress] = useState("");
  const [authorizedWallet, setAuthorizedWallet] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isConnected || !address) {
      setReferralAddress("");
      setAuthorizedWallet("");
      setInputAddress("");
      setError("");
      return;
    }

    const savedReferral = localStorage.getItem(referralStorageKey(address)) ?? "";
    setReferralAddress(savedReferral);
    setAuthorizedWallet(address.toLowerCase());
    setInputAddress(queryReferral);
    setError("");
  }, [address, isConnected, queryReferral]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedAddress = inputAddress.trim();

    if (!isAddress(normalizedAddress)) {
      setError("Enter a valid EVM wallet address.");
      return;
    }

    if (!address) {
      setError("Connect your wallet before continuing.");
      return;
    }

    try {
      localStorage.setItem(
        referralStorageKey(address),
        normalizedAddress,
      );
      setReferralAddress(normalizedAddress);
      setAuthorizedWallet(address.toLowerCase());
      setError("");
    } catch (storageError) {
      setError(
        storageError instanceof Error
          ? `Could not save the referral address: ${storageError.message}`
          : "Could not save the referral address.",
      );
    }
  };

  const handleConnect = async () => {
    setError("");
    try {
      await open({ view: "Connect", namespace: "eip155" });
    } catch (connectError) {
      setError(
        connectError instanceof Error
          ? connectError.message
          : "Could not open wallet connection.",
      );
    }
  };

  const handleDisconnect = async () => {
    setError("");
    try {
      await disconnectAsync();
      navigate("/");
    } catch (disconnectError) {
      setError(
        disconnectError instanceof Error
          ? disconnectError.message
          : "Could not disconnect wallet.",
      );
    }
  };

  const hasAccess =
    isConnected &&
    Boolean(address) &&
    authorizedWallet === address.toLowerCase() &&
    Boolean(referralAddress) &&
    isAddress(referralAddress);

  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden={!hasAccess}
        className={hasAccess ? "" : "pointer-events-none select-none blur-[2px]"}
      >
        {children}
      </div>

      {!hasAccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4">
          <section
            aria-labelledby="dashboard-access-title"
            aria-modal="true"
            className="my-auto w-full max-w-[480px] rounded-2xl border border-[#DFA52E]/60 bg-[#101010] p-6 shadow-[0_0_40px_rgba(231,173,56,0.2)] sm:p-8"
            role="dialog"
          >
            <h2
              className="unbounded text-xl font-bold text-white sm:text-2xl"
              id="dashboard-access-title"
            >
              {isConnected ? "Enter referral address" : "Connect your wallet"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#B7AFC8]">
              {isConnected
                ? "Enter an EVM referral wallet address to continue to your dashboard."
                : "Connect an EVM wallet to continue to your HANA dashboard."}
            </p>

            {isConnected && address ? (
              <>
                <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-xs text-[#A3A3A3]">Connected wallet</p>
                  <p className="mt-1 break-all font-mono text-sm text-[#F8E096]">
                    {address}
                  </p>
                  <button
                    className="mt-2 text-xs font-semibold text-[#FFB51D] hover:text-[#FFE28A]"
                    onClick={() => {
                      setInputAddress(address);
                      setError("");
                    }}
                    type="button"
                  >
                    Use my wallet address
                  </button>
                </div>

                <form className="mt-5" onSubmit={handleSubmit}>
                  <label
                    className="mb-2 block text-sm font-medium text-white"
                    htmlFor="referral-address"
                  >
                    Referral wallet address
                  </label>
                  <input
                    autoComplete="off"
                    className="w-full rounded-lg border border-white/15 bg-black px-3 py-3 font-mono text-sm text-white outline-none transition focus:border-[#DFA52E]"
                    id="referral-address"
                    onChange={(event) => {
                      setInputAddress(event.target.value);
                      setError("");
                    }}
                    placeholder="0x..."
                    spellCheck="false"
                    value={inputAddress}
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-400" role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    className="mt-5 w-full rounded-lg bg-gradient-to-r from-[#F8E096] to-[#FFB01B] px-4 py-3 font-bold text-black transition hover:brightness-110"
                    type="submit"
                  >
                   Register to HANA
                  </button>
                </form>

                <button
                  className="mt-4 w-full rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-[#D0D0D0] transition hover:border-red-400/50 hover:text-red-300"
                  onClick={handleDisconnect}
                  type="button"
                >
                  Disconnect wallet
                </button>
              </>
            ) : (
              <>
                {error && (
                  <p className="mt-4 text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}
                <button
                  className="mt-6 w-full rounded-lg bg-gradient-to-r from-[#F8E096] to-[#FFB01B] px-4 py-3 font-bold text-black transition hover:brightness-110"
                  onClick={handleConnect}
                  type="button"
                >
                  Connect wallet
                </button>
                <button
                  className="mt-3 w-full rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-[#D0D0D0] transition hover:border-white/30 hover:text-white"
                  onClick={() => navigate("/")}
                  type="button"
                >
                  Back to home
                </button>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
