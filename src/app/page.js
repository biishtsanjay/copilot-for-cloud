"use client";
import FirstFrame from "@/components/FirstFrame";
import SecondFrame from "@/components/SecondFrame";
import QueryFrame from "@/components/common/QueryFrame";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  // const [isShow, setIsShow] = useState(true);
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  return (
    <div className="flex flex-col justify-between items-center w-full h-screen pb-4 pt-6 px-4">
      {showSecondScreen ? (
        <div>
          <FirstFrame showSecondStep={() => setShowSecondScreen(true)} />
          <QueryFrame />
        </div>
      ) : (
        <SecondFrame />
      )}
    </div>
  );
}
