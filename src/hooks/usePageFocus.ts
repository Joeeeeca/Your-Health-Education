import { useEffect } from "react"

export function usePageFocus() {
  useEffect(() => {
    const mainHeading = document.querySelector("h1")

    if (mainHeading instanceof HTMLElement) {
      mainHeading.setAttribute("tabindex", "-1")
      mainHeading.focus()
    }
  }, [])
}