import { Suspense } from 'react'

export const revalidate = 0

export default function Home() {
  return (
    <div>
      <p>Here is a joke for you:</p>
      <Suspense fallback={<em>Loading…</em>}>
        {/* @ts-expect-error */}
        <Joke />
      </Suspense>
    </div>
  )
}

async function Joke() {
  const joke = await fetchJoke()
  return <p>{joke}</p>
}

async function fetchJoke(): Promise<string> {
  await new Promise((r) => setTimeout(r, 2000))
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: { Accept: 'text/plain' },
  })
  return res.text()
}
