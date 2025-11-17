import React from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/Hero'
import FeatureSection from '../components/sections/FeatureSection'
import StatsStrip from '../components/stats/StatsStrip'
import Goals from '../components/goals/Goals'
import CardsCarousel from '../components/cards/CardsCarousel'
import ProductCard from '../components/cards/ProductCard'
import Testimonial from '../components/testimonial/Testimonial'
import Banner from '../components/banner/Banner'
import FAQ from '../components/faq/FAQ'
import Footer from '../components/footer/Footer'

function home() {
  return (
    <div>
         <Navbar />
      <Hero />
      < StatsStrip/>
      <Goals />
      <FeatureSection
        eyebrow="Cash Account"
        title="Earn more interest on your cash"
        description="As a new client, you can earn a high 4.15% annual percentage yield (APY) delivered from our program banks. That’s a 0.65% boost from our 3.50% base APY. Plus, your cash is easy to access and easy to invest, with no sneaky requirements and no strings attached."
        bullets={[
          'No account fees',
          'Free 24/7 instant withdrawals',
          'Up to $8M FDIC insurance through program banks',
        ]}
        primaryCta="Start saving with $1"
        secondaryCta="Learn more"
        image={<img alt="Cash account preview" src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop" />}
      />
        <FeatureSection
        eyebrow="Cash Account"
        title="Earn more interest on your cash"
        description="As a new client, you can earn a high 4.15% annual percentage yield (APY) delivered from our program banks. That’s a 0.65% boost from our 3.50% base APY. Plus, your cash is easy to access and easy to invest, with no sneaky requirements and no strings attached."
        bullets={[
          'No account fees',
          'Free 24/7 instant withdrawals',
          'Up to $8M FDIC insurance through program banks',
        ]}
        primaryCta="Start saving with $1"
        secondaryCta="Learn more"
        image={<img alt="Cash account preview" src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop" />}
      />
        <FeatureSection
        eyebrow="Cash Account"
        title="Earn more interest on your cash"
        description="As a new client, you can earn a high 4.15% annual percentage yield (APY) delivered from our program banks. That’s a 0.65% boost from our 3.50% base APY. Plus, your cash is easy to access and easy to invest, with no sneaky requirements and no strings attached."
        bullets={[
          'No account fees',
          'Free 24/7 instant withdrawals',
          'Up to $8M FDIC insurance through program banks',
        ]}
        primaryCta="Start saving with $1"
        secondaryCta="Learn more"
        image={<img alt="Cash account preview" src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop" />}
      />
      <Goals/>
     
      <div style={{ padding: '20px 20px 40px' }}>
      <CardsCarousel>
          <ProductCard
            icon={<span>💳</span>}
            title="Cash Account"
            description="Save, spend, and pay bills while earning high APY from program banks on all your uninvested cash. Free 24/7 instant withdrawals. No monthly fees."
            tags={['RAINY DAY FUND', 'UPCOMING EXPENSES', 'BUY A HOME']}
          />
          <ProductCard
            icon={<span>🌿</span>}
            title="Automated Bond Portfolio"
            description="Invest in a diversified portfolio of bond ETFs designed to earn a higher yield than a high-yield savings account."
            tags={['UPCOMING EXPENSES', 'START INVESTING', 'BUY A HOME']}
          />
          <ProductCard
            icon={<span>🪜</span>}
            title="Automated Bond Ladder"
            description="Lock in current rates with a ladder of US Treasuries and skip state income taxes."
            tags={['WEALTH PRESERVATION', 'UPCOMING EXPENSES']}
          />
        </CardsCarousel>
      </div>
      <Testimonial />
      <Banner />
      <FAQ />
      <Footer />
    </div>
  )
}

export default home