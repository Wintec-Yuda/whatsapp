"use client";

import { RootState } from "@/store";
import { useSelector } from "react-redux";


export default function WrapperMode({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <main className={mode}>
      {children}
    </main>
  );
}
