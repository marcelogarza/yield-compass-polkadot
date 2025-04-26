
import React from "react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();
  const { walletConnected, connectWallet, isPolkadotExtensionAvailable } = useWallet();

  React.useEffect(() => {
    if (walletConnected) {
      // Automatically navigate to asset selection when wallet is connected
      navigate("/select-assets");
    }
  }, [walletConnected, navigate]);

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-polkadot-dark mb-4">
          Maximize Your <span className="text-polkadot-primary">Polkadot</span> Yields
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Find the best yield farming opportunities for your DOT, USDC, and KSM assets
          with our AI-powered optimizer.
        </p>
      </div>

      <Card className="w-full mb-8 border-none shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center p-6 text-center">
            {isPolkadotExtensionAvailable ? (
              <>
                <div className="mb-8 text-gray-700">
                  Connect your Polkadot wallet to get started finding the best yield opportunities.
                </div>
                <Button 
                  onClick={connectWallet}
                  className="bg-polkadot-primary hover:bg-polkadot-secondary text-white"
                  size="lg"
                >
                  Connect Polkadot Wallet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <div className="mb-6 text-gray-700">
                  <p className="font-medium text-lg mb-2 text-polkadot-primary">Polkadot.js Extension Not Detected</p>
                  <p>You need to install the Polkadot.js extension to connect your wallet.</p>
                </div>
                <Button 
                  onClick={() => window.open("https://polkadot.js.org/extension/", "_blank")}
                  className="bg-polkadot-dark hover:bg-polkadot-secondary text-white"
                  size="lg"
                >
                  Install Polkadot.js Extension
                </Button>
                <div className="mt-4 text-sm text-gray-500">
                  After installing, please refresh this page.
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <FeatureCard 
          title="Find Best Yields"
          description="Compare APYs, risks, and fees across different protocols"
        />
        <FeatureCard 
          title="Smart Recommendations"
          description="Get AI-powered suggestions tailored to your assets"
        />
        <FeatureCard 
          title="Risk Assessment"
          description="Understand the risk profile of each yield option"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-50">
      <h3 className="font-bold text-lg mb-2 text-polkadot-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
