<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-content-wrapper">
        <div class="footer-links">
          <div class="footer-links-column">
            <div class="footer-links-title">
              {{ $t("common.products") }}
            </div>
            <router-link to="/trade/BTC-USDT">{{
              $t("common.trade")
            }}</router-link>
            <router-link to="/quick-swap">{{ $t("common.swap") }}</router-link>
            <router-link to="/wallet">{{ $t("common.wallet") }}</router-link>
            <router-link to="/quick-swap">{{
              $t("common.buysell_crypto")
            }}</router-link>
            <a href="/coming-soon" target="_blank">{{ $t("common.card") }}</a>
            <a href="/coming-soon" target="_blank">{{
              $t("common.trading_competition")
            }}</a>
            <a href="/token-listing" target="_blank">{{
              $t("common.token_listing")
            }}</a>
            <a href="/ieo" target="_blank">{{ $t("common.ieo") }}</a>
            <a href="/coming-soon" target="_blank">{{
              $t("common.market_making")
            }}</a>
            <a href="/kyc-policy" target="_blank">{{ $t("common.aml_kyc") }}</a>
          </div>

          <div class="footer-links-column">
            <div class="footer-links-title">
              {{ $t("common.information") }}
            </div>
            <a href="/about" target="_blank">{{
              $t("common.about_company")
            }}</a>
            <router-link to="/support">{{ $t("common.support") }}</router-link>
            <router-link to="/fees">{{
              $t("common.fees_and_limits")
            }}</router-link>
            <a href="/roadmap" target="_blank">{{ $t("common.roadmap") }}</a>
            <router-link to="/settings">{{
              $t("common.settings")
            }}</router-link>
          </div>

          <div class="footer-links-column">
            <div class="footer-links-title">
              {{ $t("common.earn") }}
            </div>
            <a href="/coming-soon" target="_blank">{{
              $t("common.lending")
            }}</a>
            <a href="/coming-soon" target="_blank">{{
              $t("common.borrowing")
            }}</a>
            <a href="/coming-soon" target="_blank">{{
              $t("common.staking")
            }}</a>
            <a href="/coming-soon" target="_blank">{{ $t("common.nodes") }}</a>
            <a href="/coming-soon" target="_blank">{{
              $t("common.launchpad")
            }}</a>
          </div>

          <div class="footer-links-column">
            <div class="footer-links-title">
              {{ $t("common.connect_with_us") }}
            </div>
            <div class="footer-text-p">
              {{ $t("common.support_description") }}
            </div>
            <div class="footer__socials-container">
              <a
                v-if="localConfig.socials.telegram.link"
                :href="`https://t.me/${localConfig.socials.telegram.link}`"
                target="_blank"
                class="footer__social-item"
              >
                <span class="footer__social-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4394 4.62225L19.2706 19.566C19.0314 20.6205 18.4081 20.883 17.5229 20.3865L12.2716 16.4977L9.74336 18.9297C9.48573 19.1873 9.27003 19.403 8.77472 19.403L9.12142 14.0517L18.4603 5.66098C18.8482 5.31428 18.3764 5.12016 17.8576 5.46685L6.31873 12.6644L1.11656 11.1082C0.0855701 10.7851 0.0620723 10.0735 1.31887 9.57687L21.0305 3.07038C21.9157 2.74727 22.7185 3.25553 22.4394 4.62225Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
              <a
                v-if="localConfig.socials.twitter.link"
                :href="`https://twitter.com/${localConfig.socials.twitter.link}`"
                target="_blank"
                class="footer__social-item"
              >
                <span class="footer__social-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.6435 4.93708C22.8085 5.30708 21.9115 5.55708 20.9685 5.67008C21.9415 5.08787 22.6694 4.17106 23.0165 3.09208C22.1023 3.63507 21.1018 4.01727 20.0585 4.22208C19.3569 3.47294 18.4276 2.97574 17.4148 2.80249C16.4021 2.62924 15.3626 2.78902 14.4577 3.26173C13.5529 3.73443 12.8333 4.49652 12.4107 5.42914C11.9881 6.36175 11.8867 7.41039 12.1195 8.40708C10.2677 8.31414 8.45947 7.82335 6.80478 6.96619C5.15008 6.10902 3.68736 4.90326 2.5185 3.43308C2.1185 4.08308 1.8885 4.82908 1.8885 5.62708C1.88805 6.34765 2.07693 7.05578 2.43838 7.68544C2.79982 8.31511 3.32266 8.84481 3.9535 9.23008C3.22078 9.20775 2.50686 9.00649 1.8685 8.64308V8.70208C1.86837 9.77881 2.22821 10.8242 2.89123 11.6743C3.55424 12.5245 4.48375 13.1273 5.5265 13.3921C4.84782 13.5792 4.13821 13.6066 3.4485 13.4721C3.7345 14.4067 4.32189 15.2281 5.12153 15.8228C5.92118 16.4175 6.89057 16.7548 7.8935 16.7921C6.37831 17.9896 4.49397 18.6293 2.5585 18.6271C2.18531 18.6272 1.81251 18.6054 1.4425 18.5621C3.41243 19.8338 5.70816 20.4974 8.0535 20.4951C16.1385 20.4951 20.5585 13.6571 20.5585 7.76608C20.5585 7.56608 20.5535 7.36408 20.5445 7.16408C21.4558 6.50169 22.2463 5.68382 22.8835 4.74708C22.0355 5.11539 21.1389 5.35263 20.2235 5.45108L23.6435 4.93708Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
              <a
                v-if="localConfig.socials.discord"
                :href="localConfig.socials.discord"
                target="_blank"
                class="footer__social-item"
              >
                <span class="footer__social-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2825 4.54276C17.9292 3.90376 16.4866 3.43276 14.9812 3.15076C14.9596 3.14648 14.9371 3.14755 14.9161 3.15384C14.8952 3.16013 14.8766 3.17144 14.8625 3.18676C14.6747 3.51876 14.4664 3.95376 14.3205 4.29376C12.7012 4.02876 11.0561 4.02876 9.43685 4.29376C9.27071 3.91441 9.08649 3.54357 8.88485 3.18276C8.87023 3.16774 8.85128 3.15686 8.83016 3.15116C8.80904 3.14546 8.78664 3.14513 8.76535 3.15026C7.26085 3.43226 5.81825 3.90326 4.46405 4.54276C4.44586 4.55089 4.43054 4.56442 4.42035 4.58176C1.66785 8.70676 0.877847 12.7328 1.27535 16.7108C1.27714 16.7235 1.28157 16.7357 1.28835 16.7467C1.29513 16.7576 1.30414 16.7671 1.31485 16.7748C2.93785 17.9528 4.48685 18.7048 6.00485 19.2088C6.02595 19.2157 6.04856 19.2159 6.06978 19.2094C6.091 19.2029 6.11 19.19 6.12435 19.1718C6.53485 18.6148 6.90035 18.0248 7.21235 17.4018C7.22892 17.3697 7.21785 17.3318 7.18485 17.3198C6.61985 17.1058 6.08085 16.8498 5.56035 16.5618C5.52435 16.5408 5.52135 16.4878 5.55435 16.4628C5.66785 16.3768 5.78135 16.2868 5.88935 16.1968C5.90471 16.1837 5.92445 16.1769 5.94435 16.1778C9.40685 17.7478 13.1399 17.7478 16.5589 16.1778C16.5789 16.1765 16.5988 16.1831 16.6144 16.1963C16.7224 16.2863 16.8359 16.3768 16.9499 16.4628C16.9829 16.4878 16.9804 16.5408 16.9444 16.5618C16.4239 16.8558 15.8849 17.1058 15.3194 17.3193C15.3034 17.3257 15.2897 17.3363 15.2798 17.3499C15.27 17.3635 15.2645 17.3795 15.2639 17.396C15.2634 17.4125 15.2679 17.4288 15.2769 17.4429C15.2859 17.457 15.2989 17.4685 15.3144 17.4758C15.6324 18.0973 15.9979 18.6868 16.3799 19.1713C16.3939 19.19 16.4129 19.2033 16.4343 19.21C16.4557 19.2167 16.4785 19.2165 16.4994 19.2093C18.0234 18.7048 19.5724 17.9528 21.1954 16.7748C21.2064 16.7674 21.2157 16.7581 21.2227 16.7472C21.2297 16.7363 21.2342 16.724 21.2359 16.7113C21.7124 12.1513 20.4859 8.15876 17.8924 4.58326C17.8829 4.56526 17.8679 4.55126 17.8499 4.54276H19.2825ZM7.85035 14.2948C6.85535 14.2948 6.03035 13.3848 6.03035 12.2728C6.03035 11.1608 6.83785 10.2508 7.85035 10.2508C8.87035 10.2508 9.68785 11.1683 9.67035 12.2728C9.67035 13.3848 8.86285 14.2948 7.85035 14.2948ZM15.9049 14.2948C14.9099 14.2948 14.0849 13.3848 14.0849 12.2728C14.0849 11.1608 14.8924 10.2508 15.9049 10.2508C16.9249 10.2508 17.7424 11.1683 17.7249 12.2728C17.7249 13.3848 16.9249 14.2948 15.9049 14.2948Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-copy">
          <div class="copyright">
            © {{ new Date().getFullYear() }} {{ localConfig.project_title }} -
            {{ $t("common.tagline") }}
          </div>
          <div class="footer-links footer-bottom-links">
            <a href="/terms" target="_blank">{{ $t("common.terms_of_use") }}</a>
            <a href="/privacy" target="_blank">{{
              $t("common.privacy_policy")
            }}</a>
            <a href="/kyc-policy" target="_blank">{{
              $t("common.kyc_aml_policy")
            }}</a>
            <a href="/delisting-policy" target="_blank">{{
              $t("common.delisting_policy")
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppFooter",
  data() {
    return {
      current_date: new Date(),
      cookie_message_accept: !!localStorage.getItem("cookie_message_accept"),
    };
  },
  computed: {
    ...mapGetters({
      profile: "core/profile",
    }),
    lang() {
      return this.$locale;
    },
  },
  methods: {
    hideCookieMessage() {
      localStorage.setItem("cookie_message_accept", true);
      this.cookie_message_accept = true;
    },
  },
};
</script>

<style scoped>
.footer {
  background: var(--bg-secondary);
  padding: 48px 0 24px;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.footer-links-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-links-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.footer-links-column a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-links-column a:hover {
  color: var(--text-primary);
}

.footer-text-p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
}

.footer__socials-container {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.footer__social-item {
  color: var(--theme-primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--theme-primary-color-10);
  transition: all 0.2s ease;
}

.footer__social-item:hover {
  transform: translateY(-2px);
  background: var(--theme-primary-color-20);
}

.footer__social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__social-icon svg {
  width: 24px;
  height: 24px;
}

.footer__social-icon path {
  fill: currentColor;
}

.footer-copy {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.copyright {
  color: var(--text-secondary);
  font-size: 14px;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-bottom-links a:hover {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-bottom-links {
    flex-wrap: wrap;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }

  .footer-copy {
    text-align: center;
  }

  .footer-bottom-links {
    justify-content: center;
  }
}
</style>
