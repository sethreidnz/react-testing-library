import { HeroBanner, HighlightColumns } from "./components";

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <HeroBanner />
      <HighlightColumns />
    </div>
  );
};
