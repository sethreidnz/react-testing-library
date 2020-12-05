export type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <header className="h-16 bg-black text-white">
        <div className="h-16 container mx-auto flex items-center">
          <h1>Company Name</h1>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
