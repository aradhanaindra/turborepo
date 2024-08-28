import GlobalComponents from "@/app/global-components";
import NextJSLogo from "@/icons/nextjs.svg";
import Title from "@repo/ui/title";
import Turborepo from "@repo/ui/turborepo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-12 space-y-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={NextJSLogo} alt="NextJS" width={64} height={64} />
          <Title>NextJS App</Title>
        </div>
        <Turborepo location="apps/nextjs" />
      </div>
      <GlobalComponents/>
    </main>
  );
}
