import NextJSLogo from "@/icons/nextjs.svg";
import GlobalComponents from "@repo/ui/global-components";
import Title from "@repo/ui/title";
import Turborepo from "@repo/ui/turborepo";
import Image from "next/image";
export default function Home() {
  return (
    <main className="p-24 space-y-24">
      <Turborepo location="apps/nextjs" />
      <div className="flex items-center gap-4">
        <Image src={NextJSLogo} alt="NextJS" width={64} height={64}/>
        <Title>NextJS App</Title>
      </div>
      <GlobalComponents />
    </main>
  );
}
