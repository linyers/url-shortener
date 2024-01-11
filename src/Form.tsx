"use client";

import { useState } from "react";
import { createShortURL } from "@/lib/data";

export default function Form() {
  const [shortedURL, setShortedURL] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const url = formData.get("url");
    if (url === "") return;
    const { result, error } = await createShortURL(url as string);

    if (result) {
      setShortedURL(result);
      setError("");
    } else {
      setError(error);
      setShortedURL("");
    }
  };

  return (
    <>
      <form className="flex flex-col p-5" action={handleSubmit}>
        <input type="text" name="url" placeholder="URL" />
        <button>Acortar</button>
        {shortedURL !== "" && <p>{shortedURL}</p>}
        {error !== "" && <p className="text-red-400">{error}</p>}
      </form>
    </>
  );
}
