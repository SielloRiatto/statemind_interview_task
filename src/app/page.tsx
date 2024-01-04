import dynamic from "next/dynamic"
import Header from "@/components/Header"
import Loader from "@/components/Loader"

const ClientsList = dynamic(
  () => import('@/components/ClientsList'),
  {
    ssr: false,
    loading: Loader
  }
)

export default function Clients() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header pageName={"Clients"} />
      <ClientsList />
    </main>
  )
}
