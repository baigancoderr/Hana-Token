import { useEffect, useRef, useState } from "react";
import { useAppKit, useAppKitAccount, useAppKitState } from "@reown/appkit/react";
import { isAddress, getAddress } from "viem";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  LockKeyhole,
  LogOut,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDisconnect } from "wagmi";
import logo from "../assets/logo.png";
import {
  isWalletRegistered,
  referralStorageKey,
  dummyRegistrationStorageKey,
} from "../dashboard/referralStorage";
import "./AuthPage.css";

export default function AuthPage({ mode }) {
  const isRegister = mode === "register";
  const [searchParams] = useSearchParams();
  const [referral, setReferral] = useState(searchParams.get("ref") ?? "");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [copied, setCopied] = useState(false);
  const modalWasOpen = useRef(false);
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount({ namespace: "eip155" });
  const { open: modalOpen } = useAppKitState();
  const { disconnectAsync, isPending: disconnectPending } = useDisconnect();
  const navigate = useNavigate();

  const handleCopyAddress = async () => {
    if (!address) return;

    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setError("");
      window.setTimeout(() => setCopied(false), 1800);
    } catch (copyError) {
      setCopied(false);
      setError(
        copyError instanceof Error
          ? `Could not copy wallet address: ${copyError.message}`
          : "Could not copy wallet address.",
      );
    }
  };

  const handleDisconnect = async () => {
    setError("");
    setPending(false);
    setCopied(false);

    try {
      await disconnectAsync();
    } catch (disconnectError) {
      setError(
        disconnectError instanceof Error
          ? `Could not disconnect wallet: ${disconnectError.message}`
          : "Could not disconnect wallet.",
      );
    }
  };

  useEffect(() => {
    if (!pending) {
      modalWasOpen.current = false;
      return;
    }

    if (isConnected && address) {
      modalWasOpen.current = false;
      setPending(false);
      if (!isRegister) {
        try {
          navigate(isWalletRegistered(address) ? "/dashboard" : "/register");
        } catch (storageError) {
          setError(
            storageError instanceof Error
              ? `Could not check this wallet's registration: ${storageError.message}`
              : "Could not check this wallet's registration.",
          );
        }
      }
      return;
    }

    if (modalOpen) {
      modalWasOpen.current = true;
    } else if (modalWasOpen.current) {
      modalWasOpen.current = false;
      setPending(false);
    }
  }, [address, isConnected, isRegister, modalOpen, navigate, pending]);

  useEffect(() => {
    if (!isRegister || !isConnected || !address) return;

    try {
      if (isWalletRegistered(address)) navigate("/dashboard", { replace: true });
    } catch (storageError) {
      setError(
        storageError instanceof Error
          ? `Could not check this wallet's registration: ${storageError.message}`
          : "Could not check this wallet's registration.",
      );
    }
  }, [address, isConnected, isRegister, navigate]);

  const handleConnect = async () => {
    setError("");
    if (isConnected && address) {
      if (!isRegister) {
        try {
          navigate(isWalletRegistered(address) ? "/dashboard" : "/register");
        } catch (storageError) {
          setError(
            storageError instanceof Error
              ? `Could not check this wallet's registration: ${storageError.message}`
              : "Could not check this wallet's registration.",
          );
        }
      }
      return;
    }

    setPending(true);
    try {
      await open({ view: "Connect", namespace: "eip155" });
    } catch (connectError) {
      setPending(false);
      setError(
        connectError instanceof Error
          ? connectError.message
          : "Could not open wallet connection.",
      );
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");

    if (!isConnected || !address) {
      setError("Connect your wallet before creating your account.");
      return;
    }

    let normalizedReferral;
    try {
      if (!isAddress(referral.trim())) {
        setError("Enter a valid EVM referral wallet address.");
        return;
      }
      normalizedReferral = getAddress(referral.trim());
    } catch {
      setError("Enter a valid EVM referral wallet address.");
      return;
    }

    try {
      localStorage.setItem(referralStorageKey(address), normalizedReferral);
      localStorage.setItem(dummyRegistrationStorageKey(address), "true");
    } catch (storageError) {
      setError(
        storageError instanceof Error
          ? `Could not save this demo registration: ${storageError.message}`
          : "Could not save this demo registration.",
      );
      return;
    }

    navigate("/dashboard");
  };

  return (
    <main className="hana-auth">
      <div className="hana-auth__backdrop" aria-hidden="true" />
      <div className="hana-auth__layout">
        <section className="hana-auth__story" aria-label="Welcome to HANA">
          <Link className="hana-auth__logo" to="/" aria-label="HANA home">
            <img src={logo} alt="HANA Decentralized Token" />
          </Link>
          <div className="hana-auth__story-copy">
            <span className="hana-auth__eyebrow">
              <span className="hana-auth__eyebrow-dot" />
              Your gateway to the HANA ecosystem
            </span>
            <h1>
              {isRegister ? (
                <>Make your move <span>count.</span></>
              ) : (
                <>Welcome back to <span>HANA.</span></>
              )}
            </h1>
            <p>
              {isRegister
                ? "Create your account with a secure wallet connection and start exploring a new era of decentralized participation."
                : "Connect your wallet to securely access your HANA dashboard and ecosystem."}
            </p>
          </div>
          <div className="hana-auth__trust">
            <div className="hana-auth__trust-icon"><ShieldCheck size={19} /></div>
            <div>
              <strong>Wallet-secured access</strong>
              <span>Your keys stay in your wallet. HANA never asks for your seed phrase.</span>
            </div>
          </div>
        </section>

        <section className="hana-auth__panel" aria-labelledby="hana-auth-title">
          <Link className="hana-auth__mobile-logo" to="/" aria-label="HANA home">
            <img src={logo} alt="HANA Decentralized Token" />
          </Link>
          <Link className="hana-auth__back" to="/">
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="hana-auth__form-wrap">
            <div className="hana-auth__tabs" aria-label="Account access">
              <Link
                className={!isRegister ? "is-active" : ""}
                to="/login"
                aria-current={!isRegister ? "page" : undefined}
              >
                Login
              </Link>
              <Link
                className={isRegister ? "is-active" : ""}
                to="/register"
                aria-current={isRegister ? "page" : undefined}
              >
                Create account
              </Link>
            </div>

            <div className="hana-auth__heading">
              <span className="hana-auth__heading-icon">
                {isRegister ? <Wallet size={20} /> : <LockKeyhole size={20} />}
              </span>
              <div>
                <h2 id="hana-auth-title">{isRegister ? "Join the HANA ecosystem" : "Sign in to HANA"}</h2>
                <p>{isRegister ? "Get started in just a few steps." : "Your wallet is your secure login."}</p>
              </div>
            </div>

            {isRegister && (
              <div className="hana-auth__steps" aria-label="Registration steps">
                <span className="is-complete"><CheckCircle2 size={15} /> Wallet</span>
                <i />
                <span className={isConnected ? "is-current" : ""}>Referral</span>
                <i />
                <span>Dashboard</span>
              </div>
            )}

            <div className="hana-auth__wallet">
              <span className="hana-auth__wallet-mark"><Wallet size={18} /></span>
              <div className="hana-auth__wallet-info">
                <strong>{isConnected ? "Wallet connected" : "Connect your wallet"}</strong>
                {isConnected && address ? (
                  <div className="hana-auth__address-row">
                    <span className="hana-auth__address" title={address}>
                      {address.slice(0, 10)}...{address.slice(-8)}
                    </span>
                    <button
                      aria-label={copied ? "Wallet address copied" : "Copy full wallet address"}
                      className={`hana-auth__copy ${copied ? "is-copied" : ""}`}
                      onClick={handleCopyAddress}
                      title={copied ? "Copied!" : "Copy full wallet address"}
                      type="button"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                ) : (
                  <span>Secure access with your Web3 wallet</span>
                )}
              </div>
              <span className={`hana-auth__status ${isConnected ? "is-connected" : ""}`} aria-label={isConnected ? "Connected" : "Not connected"} />
            </div>
            {isRegister ? (
              <form className="hana-auth__form" onSubmit={handleRegister}>
                <label htmlFor="hana-referral">Referral wallet address</label>
                <input
                  autoComplete="off"
                  id="hana-referral"
                  onChange={(event) => {
                    setReferral(event.target.value);
                    setError("");
                  }}
                  placeholder="0x..."
                  spellCheck="false"
                  value={referral}
                />
                <span className="hana-auth__hint">Enter the EVM wallet address of the person who referred you.</span>
                {error && <p className="hana-auth__error" role="alert">{error}</p>}
                <div className="hana-auth__actions">
                  {isConnected ? (
                    <button className="hana-auth__submit" type="submit">
                      Create account <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button
                      className="hana-auth__submit"
                      disabled={pending}
                      onClick={handleConnect}
                      type="button"
                    >
                      {pending ? "Waiting for wallet..." : "Connect wallet"} <ArrowRight size={18} />
                    </button>
                  )}
                  {isConnected && (
                    <button
                      className="hana-auth__disconnect"
                      disabled={disconnectPending}
                      onClick={handleDisconnect}
                      type="button"
                    >
                      <LogOut size={15} />
                      {disconnectPending ? "Disconnecting..." : "Disconnect wallet"}
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <div className="hana-auth__form">
                <p className="hana-auth__description">
                  Continue with your preferred wallet. You’ll approve the connection securely in your wallet app.
                </p>
                {error && <p className="hana-auth__error" role="alert">{error}</p>}
                <div className="hana-auth__actions">
                  <button
                    className="hana-auth__submit"
                    disabled={pending}
                    onClick={handleConnect}
                    type="button"
                  >
                    {pending ? "Waiting for wallet..." : isConnected ? "Continue to dashboard" : "Connect wallet"}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            <div className="hana-auth__security">
              <ShieldCheck size={15} />
              <span>Secure connection · No password required</span>
            </div>
            <p className="hana-auth__switch">
              {isRegister ? "Already part of HANA?" : "New to HANA?"}{" "}
              <Link to={isRegister ? "/login" : "/register"}>
                {isRegister ? "Login instead" : "Create an account"}
              </Link>
            </p>
          </div>
          <p className="hana-auth__copyright">© {new Date().getFullYear()} HANA Ecosystem</p>
        </section>
      </div>
    </main>
  );
}
