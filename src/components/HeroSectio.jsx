import { css } from '@emotion/react';

const heroStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f5f5f5;
  text-align: center;
`;

const HeroSection = () => (
  <section css={heroStyle}>
    <h2>Welcome to Paystack</h2>
    <p>Your payment solution made simple</p>
  </section>
);

export default HeroSection;
