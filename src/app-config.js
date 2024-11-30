const PaySystems = {
  cauri: "cauri",
  payeer: "payeer",
  sepa: "sepa",
};

export default {
  supportedLanguages: ["en", "ru"],
  defaultLanguage: "en",
  currentWithdrawCardPaySystem: PaySystems.cauri,
  currentTopUpCardPaySystem: PaySystems.cauri,
  PaySystems,
};
