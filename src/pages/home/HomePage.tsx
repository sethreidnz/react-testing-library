import { HeroBanner, BenefitsRow, PartnerForm } from "./components";

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <HeroBanner />
      <BenefitsRow />
      <PartnerForm />
    </div>
  );
};
