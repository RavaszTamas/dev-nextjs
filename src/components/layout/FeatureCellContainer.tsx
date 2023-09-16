import FeatureCell from "@/components/layout/FeatureCell";
import React, { useMemo } from "react";

export default function FeatureCellContainer({ featureCells }: { featureCells: { title: string; text: string }[] }) {
  const content = useMemo(() => {
    return featureCells.map((item) => <FeatureCell key={item.title} title={item.title} text={item.text} />);
  }, [featureCells]);
  return <div className="grid auto-rows-fr grid-cols-1 gap-4 px-3 md:grid-cols-2">{content}</div>;
}
