import { HeroBanner, HighlightColumns, PartnerForm } from './components';

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <HeroBanner />
      <HighlightColumns />
      <PartnerForm />
    </div>
  );
};
