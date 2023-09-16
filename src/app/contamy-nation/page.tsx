import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { type Metadata } from "next";
const DynamicMain = dynamic(() => import("../../components/contamy_nation/main"), {
  suspense: true,
  ssr: false,
});

export const metadata: Metadata = {
  title: "Contamy Nation",
};

const ContamyNation = ({}) => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicMain />
    </Suspense>
  );
};

export default ContamyNation;
