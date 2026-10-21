import { Settings as SettingsIcon, Bell, Shield, User, Wallet, Copy, CheckCircle, Eye, EyeOff, Globe } from "lucide-react";
import { useState } from "react";
import SectionCard from "../components/SectionCard";
import GoldBadge from "../components/GoldBadge";

export default function Settings() {
  const [copied, setCopied] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [notifications, setNotifications] = useState({
    roiCredit: true,
    directReferral: true,
    levelIncome: false,
    rankAchieved: true,
    withdrawal: true,
    daoPool: false,
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggle = (key) => setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <SectionCard title="Profile Information" subtitle="Your Hana account details">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFE28A] to-[#FFB51D]">
              <User size={36} className="text-black" />
            </div>
            <button className="text-[11px] text-[#A3A3A3] hover:text-[#FFB51D] transition-colors">
              Change Avatar
            </button>
          </div>

          {/* Info */}
          <div className="flex-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { label: "Full Name", value: "Hana Member", editable: true },
              { label: "Member ID", value: "#H10042", editable: false },
              { label: "Email", value: "member@hanatoken.io", editable: true },
              { label: "Phone", value: "+91 9000000000", editable: true },
              { label: "Sponsor ID", value: "#H10010", editable: false },
              { label: "Joined", value: "05 Oct 2026", editable: false },
            ].map((item) => (
              <div key={item.label}>
                <label className="mb-1 block text-[11px] font-medium text-[#A3A3A3]">{item.label}</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    defaultValue={item.value}
                    readOnly={!item.editable}
                    className={`h-[38px] flex-1 rounded-lg border px-3 text-[13px] text-white outline-none transition-colors ${
                      item.editable
                        ? "border-[#222] bg-[#111] focus:border-[#FFB51D]/50"
                        : "border-[#222] bg-[#0A0A0A] cursor-default text-[#A3A3A3]"
                    }`}
                  />
                  {!item.editable && (
                    <button
                      onClick={() => handleCopy(item.value)}
                      className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg border border-[#222] bg-[#111] text-[#A3A3A3] hover:text-[#FFB51D] transition-colors"
                    >
                      {copied ? <CheckCircle size={14} className="text-green-400" /> : <Copy size={14} />}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button className="rounded-lg bg-gradient-to-r from-[#FFE28A] to-[#FFB51D] px-5 py-2 text-[13px] font-bold text-black hover:brightness-110 transition-all">
            Save Changes
          </button>
          <button className="rounded-lg border border-[#222] bg-[#111] px-5 py-2 text-[13px] font-medium text-[#A3A3A3] hover:text-white transition-colors">
            Cancel
          </button>
        </div>
      </SectionCard>

      {/* Wallet Settings */}
      <SectionCard title="Withdrawal Wallet" subtitle="Connect your USDT (BEP-20) wallet address">
        <div className="space-y-3">
          <div>
            <label className="mb-1.5 block text-[12px] font-medium text-[#A3A3A3]">
              Wallet Address (BEP-20 / BSC)
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type={showAddress ? "text" : "password"}
                  defaultValue="0x1a2b3c4d5e6f7890abcdef1234567890abcdef12"
                  className="h-[46px] w-full rounded-lg border border-[#222] bg-[#111] px-4 pr-10 text-[13px] text-white outline-none focus:border-[#FFB51D]/50 transition-colors"
                  readOnly
                />
                <button
                  onClick={() => setShowAddress(!showAddress)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] hover:text-[#FFB51D] transition-colors"
                >
                  {showAddress ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              <button
                onClick={() => handleCopy("0x1a2b3c4d5e6f7890abcdef1234567890abcdef12")}
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-lg border border-[#222] bg-[#111] text-[#A3A3A3] hover:text-[#FFB51D] transition-colors"
              >
                {copied ? <CheckCircle size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border border-[#FFB51D]/20 bg-[#FFB51D]/5 p-3">
            <Shield size={13} className="mt-0.5 shrink-0 text-[#FFB51D]" />
            <p className="text-[11px] text-[#A3A3A3]">
              Only BEP-20 (Binance Smart Chain) USDT addresses are supported. Sending to wrong network will result in permanent loss of funds.
            </p>
          </div>
          <button className="rounded-lg bg-gradient-to-r from-[#FFE28A] to-[#FFB51D] px-5 py-2 text-[13px] font-bold text-black hover:brightness-110 transition-all">
            Update Wallet
          </button>
        </div>
      </SectionCard>

      {/* Notifications */}
      <SectionCard title="Notification Preferences" subtitle="Manage what alerts you receive">
        <div className="space-y-3">
          {[
            { key: "roiCredit", label: "ROI Credit Alerts", desc: "Every 12-hour ROI credit notification" },
            { key: "directReferral", label: "Direct Referral Income", desc: "When someone you referred stakes" },
            { key: "levelIncome", label: "Level Income Alerts", desc: "When downline ROI generates level income for you" },
            { key: "rankAchieved", label: "Rank Achievements", desc: "When you qualify for a new rank" },
            { key: "withdrawal", label: "Withdrawal Updates", desc: "Status changes on withdrawal requests" },
            { key: "daoPool", label: "DAO Pool Distribution", desc: "Weekly DAO pool payout notifications" },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between rounded-lg border border-[#222] bg-[#0A0A0A] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <Bell size={15} className={notifications[item.key] ? "text-[#FFB51D]" : "text-[#737373]"} />
                <div>
                  <p className="text-[13px] font-medium text-white">{item.label}</p>
                  <p className="text-[11px] text-[#737373]">{item.desc}</p>
                </div>
              </div>
              <button
                onClick={() => toggle(item.key)}
                className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${
                  notifications[item.key] ? "bg-[#FFB51D]" : "bg-[#222]"
                }`}
              >
                <div
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
                    notifications[item.key] ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Security */}
      <SectionCard title="Security Settings" subtitle="Protect your account">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              icon: Shield,
              color: "text-green-400",
              bg: "bg-green-500/10",
              title: "Two-Factor Auth",
              status: "Enabled",
              statusColor: "text-green-400",
              btn: "Manage 2FA",
            },
            {
              icon: Wallet,
              color: "text-[#FFB51D]",
              bg: "bg-[#FFB51D]/10",
              title: "Wallet PIN",
              status: "Set",
              statusColor: "text-[#FFB51D]",
              btn: "Change PIN",
            },
            {
              icon: Globe,
              color: "text-[#FFB51D]",
              bg: "bg-[#FFB51D]/10",
              title: "Login Sessions",
              status: "1 Active",
              statusColor: "text-[#FFB51D]",
              btn: "View Sessions",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[#222] bg-[#0A0A0A] p-4">
              <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${item.bg}`}>
                <item.icon size={17} className={item.color} />
              </div>
              <p className="text-[13px] font-semibold text-white">{item.title}</p>
              <p className={`mt-0.5 text-[12px] font-medium ${item.statusColor}`}>{item.status}</p>
              <button className="mt-3 rounded-lg border border-[#222] bg-[#111] px-3 py-1.5 text-[11px] font-medium text-[#A3A3A3] hover:text-white transition-colors w-full">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Referral Link */}
      <SectionCard title="Your Referral Link" subtitle="Share to earn 5% direct income">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            readOnly
            value="https://hanatoken.io/join?ref=H10042"
            className="h-[46px] flex-1 rounded-lg border border-[#222] bg-[#111] px-4 text-[13px] text-[#A3A3A3] outline-none"
          />
          <button
            onClick={() => handleCopy("https://hanatoken.io/join?ref=H10042")}
            className="flex h-[46px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FFE28A] to-[#FFB51D] px-5 text-[13px] font-bold text-black hover:brightness-110 transition-all whitespace-nowrap"
          >
            {copied ? <CheckCircle size={15} /> : <Copy size={15} />}
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <GoldBadge>5% Direct Bonus</GoldBadge>
          <GoldBadge>Level Income Eligible</GoldBadge>
          <GoldBadge>Momentum Reward</GoldBadge>
        </div>
      </SectionCard>
    </div>
  );
}
