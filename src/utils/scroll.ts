import type React from 'react'

export function scrollToBottom(e?: React.MouseEvent) {
  if (e) e.preventDefault()

  const win = window as unknown as {
    __lenis?: {
      scrollTo: (target: string | number, options?: { duration?: number }) => void
    }
  }

  if (win.__lenis) {
    win.__lenis.scrollTo('bottom', { duration: 1.5 })
  } else {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }
}
