import { useLocation } from "react-router-dom";
import { getValueFromLocationSearch } from "@utility/queryString";
import { Certificate } from "./components";
export const CertificatePage = () => {
  const location = useLocation();
  const companyName = getValueFromLocationSearch(
    location.search,
    "companyName"
  );
  const email = getValueFromLocationSearch(location.search, "email");

  if (!companyName || !email) {
    return <>Sorry something went wrong</>;
  }
  return <Certificate companyName={companyName} email={email} />;
};
