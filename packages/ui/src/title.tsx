import { cn } from "./lib/utils";

const Title = ({ children, className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return (
    <h1 className={cn("text-4xl font-semibold", className)} {...props}>{children}</h1>
  );
}

export default Title;