"use client";
import { useState } from "react";
import FirstFrame from "@/components/FirstFrame";
import SecondFrame from "@/components/SecondFrame";
import QueryFrame from "@/components/common/QueryFrame";
import Image from "next/image";
import { LiaThumbsUp, LiaThumbsDown } from "react-icons/lia";

export default function Home() {
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  return (
    <div className="flex flex-col justify-between items-center w-full h-screen pb-4 pt-6 px-4">
      {showSecondScreen ? (
        <div className="mt-auto mb-[5rem]">
          <FirstFrame showSecondStep={() => setShowSecondScreen(true)} />
        </div>
      ) : (
        <SecondFrame />
      )}
      <div className="w-full fixed bottom-6">
        <QueryFrame />
      </div>
    </div>
  );
}
