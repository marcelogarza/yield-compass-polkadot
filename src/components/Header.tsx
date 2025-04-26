
import React from "react";
import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";

export function Header() {
  const { walletConnected, walletAddress, disconnectWallet } = useWallet();

  return (
    <header className="border-b border-gray-100 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-polkadot-primary"></div>
          <h1 className="text-xl font-bold text-polkadot-dark">Polkadot Yield Compass</h1>
        </div>
        
        {walletConnected && walletAddress && (
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium text-polkadot-dark">Connected:</span>{" "}
              {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={disconnectWallet}
              className="text-polkadot-primary border-polkadot-primary hover:bg-polkadot-light"
            >
              Disconnect
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
