export const Rex = ({ children }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div>
      <h1 className="bg-red-500">Rex Component</h1>
      {children}
    </div>
  );
};
