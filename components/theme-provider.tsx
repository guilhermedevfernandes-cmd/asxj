
"use client";

import * as React from "react";
import { Toaster } from "react-hot-toast";

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#115E3E",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "#A7CE48",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#F26837",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}
