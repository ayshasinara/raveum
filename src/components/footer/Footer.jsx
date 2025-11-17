import React from 'react';
import Container from '../common/Container';
import './footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <Container className="footer__container">
        <div className="footer__logo">
          <img 
            src="https://www.wealthfront.com/next/contenthash/next/svg/optimized/wordmark-surface-dark.contenthash.0eff70a79bddf191f2be3b9c62051ae9a9c7619e.svg" 
            alt="Wealthfront" 
            className="footer__logoImg"
          />
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__heading">Investing</h3>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Automated Investing</a></li>
              <li><a href="#" className="footer__link">Stock Investing</a></li>
              <li><a href="#" className="footer__link">Explore all investments</a></li>
              <li><a href="#" className="footer__link">Retirement</a></li>
              <li><a href="#" className="footer__link">College</a></li>
              <li><a href="#" className="footer__link">Socially Responsible</a></li>
              <li><a href="#" className="footer__link">Pricing</a></li>
              <li><a href="#" className="footer__link footer__link--underlined">Tax-loss Harvesting</a></li>
              <li><a href="#" className="footer__link">Historical Performance</a></li>
              <li><a href="#" className="footer__link">Whitepapers</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Save</h3>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Cash</a></li>
              <li><a href="#" className="footer__link">ATM Locator</a></li>
            </ul>
            <h3 className="footer__heading">Bonds</h3>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Automated Bond Ladder</a></li>
              <li><a href="#" className="footer__link">Automated Bond Portfolio</a></li>
            </ul>
            <h3 className="footer__heading">Borrow</h3>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Home Lending</a></li>
              <li><a href="#" className="footer__link">Portfolio Line of Credit</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Learn</h3>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Blog</a></li>
              <li><a href="#" className="footer__link">Help Center</a></li>
              <li><a href="#" className="footer__link">Joint Accounts</a></li>
              <li><a href="#" className="footer__link">What level of risk suits you best?</a></li>
              <li><a href="#" className="footer__link">IRA Contributions Calculator</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">About</h3>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Newsroom</a></li>
              <li><a href="#" className="footer__link">Reviews</a></li>
              <li><a href="#" className="footer__link">Careers</a></li>
              <li><a href="#" className="footer__link">Legal</a></li>
              <li><a href="#" className="footer__link">Security</a></li>
              <li><a href="#" className="footer__link">Sitemap</a></li>
              <li><a href="#" className="footer__link" onClick={scrollToTop}>Back to top</a></li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="footer__divider"></div>
      <Container className="footer__disclaimer">
        <p className="footer__disclaimerText">
          *Rate comparison based on Freddie Mac Primary Mortgage Market Survey® average for 30-year fixed-rate mortgages as of October 16, 2025. Rate available to qualified borrowers meeting the following criteria: 780+ FICO score, $750,000 purchase price, primary single-family residence in Austin, TX, 20% down payment, and payment of 1 discount point. Actual rates may vary. APR and additional terms apply. Not all borrowers will qualify.
        </p>
        <p className="footer__disclaimerText">
          Review Wealthfront Brokerage LLC with FINRA's BrokerCheck <a href="#" className="footer__disclaimerLink">here</a>.
        </p>
        <p className="footer__disclaimerText">
          The Cash Account is offered by Wealthfront Brokerage LLC ("Wealthfront Brokerage"), Member of FINRA / SIPC. Neither Wealthfront Brokerage nor any of its affiliates are a bank, and the Cash Account itself is not a deposit account. The Annual Percentage Yield ("APY") on cash deposits as of 11/7/25, is representative, requires no minimums, and may change at any time. The APY for the Wealthfront Cash Account represents the weighted average of the APY on the aggregate deposit balances of all clients at insured depository institutions that participate in our cash sweep program (the "Program Banks"). Wealthfront sweeps available cash balances to Program Banks where they earn a variable rate of interest and, subject to the satisfaction of certain conditions, are eligible for FDIC insurance. A list of current Program Banks can be found <a href="#" className="footer__disclaimerLink">here: [www.wealthfront.com/programbanks]</a>. Deposit balances are not allocated equally among the participating program banks. FDIC pass-through insurance is not provided until the funds arrive at the Program Banks, and protects against the failure of Program Banks, not Wealthfront. While cash balances are at Wealthfront Brokerage, and while they are transitioning to and/or from Wealthfront Brokerage to the Program Banks, they are not eligible for FDIC pass-through insurance, but are eligible for SIPC protection, subject to the limit of $250,000 for cash. FDIC insurance coverage is limited to $250,000 for the total amount of all deposits a customer holds in the same ownership capacity per banking institution, regardless of whether those deposits are placed through Wealthfront Brokerage, so you are responsible for monitoring your total deposits at each Program Bank to avoid exceeding FDIC limits. Wealthfront Brokerage partners with more than one Program Bank to make available up to $8 million (or up to $16 million for joint accounts) of FDIC pass-through coverage for your cash deposits. For more information on FDIC insurance coverage, please visit <a href="#" className="footer__disclaimerLink">www.FDIC.gov</a>. Customers are responsible for monitoring their total assets at each of the Program Banks to determine the extent of available FDIC insurance coverage in accordance with FDIC rules. The deposits at Program Banks are not covered by SIPC.
        </p>
        <p className="footer__disclaimerText">
          Investment management and advisory services are provided by Wealthfront Advisers, an SEC-registered investment adviser. Financial planning tools are provided by Wealthfront Software LLC ("Wealthfront Software"). All investing involves risk, including the possible loss of money you invest, and past performance does not guarantee future performance. Securities investments are not bank deposits, are not bank guaranteed or FDIC-insured and may lose value. Please see our Full Disclosure for important details.
        </p>
        <p className="footer__disclaimerText">
          By using this website, you understand the information being presented is provided for informational purposes only and agree to our Terms of Use and Privacy Policy. Wealthfront Advisers relies on information from various sources believed to be reliable, including clients and third parties, but cannot guarantee the accuracy and completeness of that information. Nothing in this communication should be construed as an offer, recommendation, or solicitation to buy or sell any security. Additionally, Wealthfront Advisers or its affiliates do not provide tax advice and investors are encouraged to consult with their personal tax advisors.
        </p>
        <p className="footer__disclaimerText">
          Product images show Wealthfront's free, software-based financial planning tool, Path, which helps users optimize their finances to meet certain goals. The information provided by the images is for illustrative purposes only and is not investment advice or performance. Users should not rely on this information as a basis of investment, financial, or tax planning decisions. See <a href="#" className="footer__disclaimerLink">Wealthfront.com/planning</a> for details.
        </p>
        <p className="footer__disclaimerText">
          <strong>1.</strong> Nerdwallet receives cash compensation for referring potential clients to Wealthfront Advisers, LLC ("Wealthfront Advisers") via sponsored advertising material which creates a conflict of interest. While they receive compensation for referring potential clients, Nerdwallet's opinions are their own, and their awards are determined by their editorial team. Nerdwallet and Wealthfront Advisers are not associated with one another and have no formal relationship outside of this arrangement. Nerdwallet's formula used for Best Robo-Advisors, Portfolio Options takes into account portfolio mix, including level of diversification, customization and specialty portfolio offerings, expense ratios on available investments, and socially responsible portfolio options. Best Robo-Advisors, Portfolio Options Awards received January 7, 2022, January 4, 2023, January 8, 2024, and January 2, 2025. © 2017-2025 and TM, NerdWallet, Inc. All Rights Reserved.
        </p>
        <p className="footer__disclaimerText">
          Bankrate receives cash compensation for referring potential clients to Wealthfront Advisers and Wealthfront Brokerage via advertisements placed on their website which creates a conflict of interest. While they receive compensation for referring potential clients, Bankrate's opinions are their own, and their awards are determined by their editorial team. Wealthfront Advisers and Wealthfront Brokerage are not associated with Bankrate and have no formal relationship outside of these arrangements. Bankrate is not a client of Wealthfront Advisers or Wealthfront Brokerage. The formula used for Best Cash Management Account takes into account the range of deposit products offered, fees, minimum balance requirements, availability of competitive APYs, the extent of ATM networks, and key digital banking features. Best Cash Management Account awards received January 10, 2023, December 12, 2023, and December 11, 2024. The formula used to determine Best Investing App takes into account overall experience, features offered, and total value proposition to the investor. Best Investing App 2024 was awarded on December 12, 2023. Wealthfront pays an annual license fee to use Bankrate's awards in marketing materials.
        </p>
        <p className="footer__disclaimerText">
          <strong>2.</strong> References to "Clients" totals and "Client Funds" include clients with assets in products offered by both Wealthfront Advisers and Wealthfront Brokerage. "Clients" totals and "Client Funds" are as of August 31, 2025.
        </p>
        <p className="footer__disclaimerText">
          Apple App Store and Google Play Store ratings are based on user ratings that are subject to change and submitted according to the applicable terms of use maintained by the Apple App Store and the Google Play Store. The Apple App Store and the Google Play Store do not utilize questionnaires or surveys and are not designed or prepared to produce any predetermined result. Users may submit ratings and verbatim feedback based on their experience with the Wealthfront application, which rating and or verbatim feedback may or may not reflect that user's experience with the investment advisory product or service provided by Wealthfront Advisers. Reported ratings are as of August 15, 2025, and based on all user ratings submitted from February 2014 (Apple) and December 2015 (Google) through August 14, 2025. Ratings independently compiled by Apple, Inc., and Google, Inc., who receive compensation for hosting our app but not for collecting or compiling reported ratings.
        </p>
        <p className="footer__disclaimerText">
          The testimonials provided above are by clients of Wealthfront Advisers and Wealthfront Brokerage. No compensation was provided. The testimonials may not be representative of other clients' experience. Past performance is no guarantee of success. Investopedia receives cash compensation from Wealthfront Advisers for advertising, which presents a conflict of interest. The endorsement provided is independent and not directly influenced by the compensation. There is no other affiliation between Investopedia and Wealthfront Advisers, and Investopedia is not a client of Wealthfront Advisers
        </p>
        <p className="footer__disclaimerText">
          Wealthfront's APY Boost Promotion (the "Promotion") offered by Wealthfront Advisers and Wealthfront Brokerage, allows Eligible New Clients of Wealthfront who open eligible Cash Accounts with Wealthfront Brokerage to receive a one-time 0.65% APY increase over the then-applicable standard APY (a "Promotional Boost") on up to a maximum aggregate balance of $150,000 in their respective Cash Accounts with Wealthfront Brokerage (each a "Cash Account") for three months, subject to terms and conditions. The Promotion is time-limited, and eligibility is determined based on an individual's account activity between October 21, 2025 and a future date as to be determined in Wealthfront's sole discretion (the "Promotion Period"). An "Eligible New Client" for purposes of this Promotion is a prospective first-time Wealthfront client (i.e., a person who has never opened or held any Wealthfront account but is eligible to do so) Participants who receive a Promotional Boost through the Promotion will also automatically qualify for three concurrent months of Wealthfront Advisers' Fee Waiver Program subject to terms and conditions.
        </p>
        <p className="footer__disclaimerText">
          Fees and Eligibility requirements may apply to certain checking features, please see the Wealthfront Customer Debit Agreement for details.
        </p>
        <p className="footer__disclaimerText">
          Instant and same day withdrawals may be processed through the Real-Time Payments (RTP) network or the FedNow® service, enabling same day withdrawals. Please note, Real-Time Payments (RTP) transfers may be limited by destination institutions, daily transaction caps, and by participating entities such as Wells Fargo and the RTP® Network. New Cash Account deposits are subject to a 2-4 day holding period before becoming available for transfer. Wealthfront doesn't charge for transfers, but receiving institutions may impose an RTP fee. Processing times may vary.
        </p>
        <p className="footer__disclaimerText">
          The effectiveness of the tax-loss harvesting strategy to reduce the tax liability of the client will depend on the client's entire tax and investment profile, including purchases and dispositions in a client's (or client's spouse's) accounts outside of Wealthfront Advisers and type of investments (e.g., taxable or nontaxable) or holding period (e.g., short-term or long-term).
        </p>
        <p className="footer__disclaimerText">
          Wealthfront Advisers and its affiliates do not provide legal or tax advice and do not assume any liability for the tax consequences of any client transaction. Clients should consult with their personal tax advisors regarding the tax consequences of investing with Wealthfront Advisers and engaging in these tax strategies, based on their particular circumstances. Clients and their personal tax advisors are responsible for how the transactions conducted in an account are reported to the IRS or any other taxing authority on the investor's personal tax returns. Wealthfront Advisers assumes no responsibility for the tax consequences to any investor of any transaction.
        </p>
        <p className="footer__disclaimerText">
          Diversification and automated investing do not guarantee profit or ensure against loss. Investor experiences can vary widely based on strategies and time horizons. Index funds and ETFs generally offer broad diversification, but may still expose investors to specific market, sector, or asset class risks. Wealthfront provides investment management services but may not achieve returns comparable to those of the general market or specific benchmarks.
        </p>
        <p className="footer__disclaimerText">
          The S&P 500® index is a product of S&P Dow Jones Indices LLC or its affiliates ("SPDJI") and has been licensed for use by Wealthfront Advisers LLC. Standard & Poor's®, S&P®, S&P 500®, US 500 and The 500 are trademarks of Standard & Poor's Financial Services LLC ("S&P"); Dow Jones® is a registered trademark of Dow Jones Trademark Holdings LLC ("Dow Jones"); and these trademarks have been licensed for use by SPDJI and sublicensed for certain purposes by Wealthfront Advisers LLC. Wealthfront's S&P 500 Direct Portfolio is not sponsored, endorsed, sold or promoted by SPDJI, Dow Jones, S&P, their respective affiliates and none of such parties make any representation regarding the advisability of investing in such product nor do they have any liability for any errors, omissions, or interruptions of the S&P 500® index. S&P 500 Direct invests in many of the stocks in the S&P 500®, but it may not invest in all stocks in the index. As a result, its performance may deviate from that of the S&P 500® index due to tracking error, market conditions, and the limitations of Tax-Loss Harvesting. Customization options, such as excluding individual stocks, may affect your portfolio's ability to track the S&P 500® index. Wealthfront Advisers is compensated for its advisory services by charging an annual account fee of 0.09% on the net market value of a Client's S&P 500 Direct account. Indices are not available for direct investment; therefore, their performance does not reflect the expenses associated with the management of an actual portfolio.
        </p>
        <p className="footer__disclaimerText">
          Wealthfront Advisers, Wealthfront Brokerage, and Wealthfront Software are wholly owned subsidiaries of Wealthfront Corporation.
        </p>
        <p className="footer__disclaimerText">
          © 2025 Wealthfront Corporation. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

