// import { cookieStorage, createStorage, http } from '@wagmi/core'
import { ConnectButton } from "@/components/ConnectButton";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: "url(/img/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen p-2 md:p-6 max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center flex-row gap-2 md:gap-6">
            <a href="https://rootstock.io/" target="_blank">
              <Image
                src={"/img/rsk.png"}
                alt="rootstock"
                width={200}
                height={200}
                className="h-fit"
              />
            </a>

            <p className="font-bold text-xl">X</p>

            <a href="https://reown.com/" target="_blank">
              <Image
                src="/reown.svg"
                alt="Reown"
                width={100}
                height={100}
                priority
              />
            </a>
          </div>
          <h1 className="text-3xl font-bold text-center">
            Rootstock Reown Example
          </h1>
        </div>

        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Connect Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <ConnectButton />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <ActionButtonList />
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            This projectId only works on localhost.
            <a
              href="https://cloud.reown.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              Go to Reown Cloud
              <ExternalLink className="w-4 h-4" />
            </a>
            to get your own.
          </div>

          <InfoList />
        </div>
      </div>
      <Footer />
    </main>
  );
}
