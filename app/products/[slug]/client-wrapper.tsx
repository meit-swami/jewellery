"use client";

import { useSearchParams } from "next/navigation";
import ARAutoOpen from "@/components/ARAutoOpen";

interface ClientWrapperProps {
  productId: string;
  productName: string;
  productCategory: string;
  threeDModel?: string | null;
}

export default function ClientWrapper({
  productId,
  productName,
  productCategory,
  threeDModel,
}: ClientWrapperProps) {
  const searchParams = useSearchParams();
  const ar = searchParams.get("ar");
  const shouldOpenAR = ar === "true";

  if (!shouldOpenAR) return null;

  return (
    <ARAutoOpen
      productId={productId}
      productName={productName}
      productCategory={productCategory}
      threeDModel={threeDModel}
      shouldOpen={shouldOpenAR}
    />
  );
}
