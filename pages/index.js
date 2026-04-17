import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { locale, basePath } = router
  return (
    <div>
      <h1>Home Page</h1>
      <p>Locale: {locale}</p>
      <p>Base Path: {basePath}</p>
    </div>
  )
}
