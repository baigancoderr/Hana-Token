export const referralStorageKey = (address) =>
  `hana-referral-${address.toLowerCase()}`;

export const dummyRegistrationStorageKey = (address) =>
  `hana-dummy-registration-${address.toLowerCase()}`;

export const isWalletRegistered = (address) =>
  localStorage.getItem(dummyRegistrationStorageKey(address)) === "true";
