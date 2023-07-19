'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function useRecentlyAdded(callback?: (value: string) => void) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const recentlyAdded = searchParams.get('recentlyAdded')
    if (recentlyAdded && callback) {
      callback(recentlyAdded)
    }
  }, [searchParams, callback])

  const setRecentlyAdded = (value: string) => {
    router.push(`${pathname}?recentlyAdded=${value}`)
  }

  return { setRecentlyAdded }
}
