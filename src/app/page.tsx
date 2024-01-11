import Form from "@/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>URL Shortener</h1>
      <p>Acorta tus URLs aqui</p>
      <Form />
    </main>
  );
}
