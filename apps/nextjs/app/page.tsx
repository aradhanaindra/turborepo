import NextJSLogo from "@/components/nextjs-logo";

export default function Home() {
    return (
        <main className="flex items-center justify-center min-h-screen from-neutral-800 to-neutral-900 bg-gradient-to-br">
            <div>
                <h1 className="text-white">This is your NextJS App</h1>
                <NextJSLogo />
            </div>
        </main>
    );
}
