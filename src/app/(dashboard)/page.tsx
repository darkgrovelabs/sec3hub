import { redirect } from 'next/navigation'

// redirect to auditors page for now
export default function Home() {
  redirect('/auditors')
}
