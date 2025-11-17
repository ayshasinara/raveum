import React from 'react';
import Accordion from '../accordion/Accordion';
import Container from '../common/Container';
import './faq.css';

function FAQ() {
  return (
    <section className="faq">
      <Container className="faq__container">
        <div className="faq__left">
          <h2 className="faq__title">Questions? 5 <br /> things to know in 5 <br /> minutes or less.</h2>
          <p className="faq__description">
            To learn more about Wealthfront, read our{' '}
            <a href="#" className="faq__link">whitepapers</a> or visit the{' '}
            <a href="#" className="faq__link">help center</a>.
          </p>
        </div>

        <div className="faq__right">
          <Accordion items={[
          {
            question: "What happens after my boosted rate ends?",
            answer: "After your boosted rate period ends, your account will automatically transition to our standard base APY rate. You'll continue to earn competitive interest on your cash with no action required from you."
          },
          {
            question: "What kind of fees do you charge? Is there a minimum to know about?",
            answer: "Wealthfront charges minimal fees. For automated investing accounts, we charge a 0.25% annual advisory fee. There are no account fees, no trading fees, and no minimum balance requirements to get started."
          },
          {
            question: "How is automated investing at Wealthfront different?",
            answer: "Wealthfront uses advanced algorithms to automatically manage your portfolio, including daily rebalancing, tax-loss harvesting, and risk-based asset allocation. Our approach is designed to maximize returns while minimizing taxes and fees."
          },
          {
            question: "How does S&P 500 Direct work exactly?",
            answer: "S&P 500 Direct allows you to invest directly in individual S&P 500 stocks with fractional shares. This gives you direct ownership of the underlying stocks while maintaining the diversification benefits of the index."
          },
          {
            question: "What is Tax-Loss Harvesting? And what does that mean for me?",
            answer: "Tax-Loss Harvesting is an automated strategy that sells investments at a loss to offset capital gains taxes. This can potentially save you hundreds or thousands of dollars in taxes each year, increasing your after-tax returns."
          }
        ]} />
        </div>
      </Container>
    </section>
  );
}

export default FAQ;

