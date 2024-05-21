import React from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroBanner from "../../components/landing/banner";
import Contribute from "../../components/landing/contribute";
import FeeBouns from "../../components/landing/fee-bouns";
import HappyCustomers from "../../components/landing/happy-customers";
import MembershipBenefits from "../../components/landing/membership-benefits";
import MembershipOption from "../../components/landing/membership-option";
import MoneyBack from "../../components/landing/money-back";
import Volunteer from "../../components/landing/volunteer";

export default function LandingPage() {
  return (
    <React.Fragment>
      <main>
        <Header />
        <HeroBanner />
        <Volunteer />
        <Contribute />
        <MoneyBack />
        <MembershipBenefits />
        <FeeBouns />
        <MembershipOption />
        <HappyCustomers />
        <Footer />
      </main>
    </React.Fragment>
  );
}
