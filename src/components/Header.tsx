
import React from "react";
import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";

export function Header() {
  const { walletConnected, walletAddress, disconnectWallet } = useWallet();

  return (
    <header className="bg-polkadot-dark py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/lovable-uploads/44650240-6f1f-4805-872c-e2ab3d9d060d.png"
            alt="Polkadot Logo"
            className="h-8"
          />
          <h1 className="text-xl font-bold text-white">Yield Compass</h1>
        </div>
        
        {walletConnected && walletAddress && (
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-300">
              <span className="text-white">Connected:</span>{" "}
              {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={disconnectWallet}
              className="text-white border-white/20 hover:bg-white/10"
            >
              Disconnect
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
