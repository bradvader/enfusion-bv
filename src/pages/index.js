import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ENFUSION | BRAD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center">

        <h1 className="mx-auto text-4xl font-bold">
          Welcome!!
        </h1>
      </main>

    </div>
  )
}
