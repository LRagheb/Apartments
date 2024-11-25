import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Apartments List</title>
        <meta name="description" content="Apartments listing app" />
      </Head>
      {children}
    </>
  );
}
