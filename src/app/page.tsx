import Form from "@/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1 className="font-bold text-4xl">Libre URL Shortener</h1>
      <p className="text-lg font-light">Acorta tus URLs aqui</p>
      <Form />
    </main>
  );
}
