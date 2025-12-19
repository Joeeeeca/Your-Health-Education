"use client"

import type React from "react"

import { useCart } from "@/lib/cart-context"

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const { isDrawerOpen } = useCart()



return (
    <div
      className={`transition-transform duration-300 ease-in-out origin-center ${
        isDrawerOpen ? "scale-[0.82] -translate-x-48" : "scale-100 translate-x-0"
      }`}
      aria-hidden={isDrawerOpen ? "true" : "false"}
    >
      {children}
    </div>
  )
}