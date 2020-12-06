export type CertificateProps = {
  companyName: string;
  email: string;
};

export const Certificate = ({ companyName, email }: CertificateProps) => {
  return (
    <div id="certificate">
      <p>Company name: {companyName}</p>
      <p>Email: {email}</p>
    </div>
  );
};
