'use client'

import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from 'next/navigation'
import { useEffect } from 'react'

export default function useRecentlyAdded(callback?: (value: string) => void) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const last = searchParams.get('last')
    if (last && callback) {
      callback(last)
    }
  }, [searchParams])

  const setRecentlyAdded = (value: string) => {
    router.push(`${pathname}?last=${value}`)
  }

  const resetRecentlyAdded = () => {
    if (searchParams.has('last')) {
      router.replace(pathname)
    }
  }

  return { setRecentlyAdded, resetRecentlyAdded }
}
