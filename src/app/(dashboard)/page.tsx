import { redirect } from 'next/navigation'

// redirect to companies page for now
export default function Home() {
  redirect('/companies')
}
