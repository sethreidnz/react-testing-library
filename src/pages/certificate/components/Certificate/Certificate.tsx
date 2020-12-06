import { useRef } from "react";
import { generatePdf } from "@utility/pdf";

export type CertificateProps = {
  companyName: string;
  email: string;
};

export const Certificate = ({ companyName, email }: CertificateProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const downloadCertificate = () => {
    if (!ref || !ref.current) {
      return;
    }
    generatePdf(ref.current);
  };
  return (
    <>
      <div id="certificate" ref={ref}>
        <p>Company name: {companyName}</p>
        <p>Email: {email}</p>
      </div>
      <button onClick={downloadCertificate}>Download</button>
    </>
  );
};
