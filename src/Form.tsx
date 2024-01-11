"use client";

import { useState } from "react";
import { createShortURL } from "@/lib/data";

export default function Form() {
  const [shortedURL, setShortedURL] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const url = formData.get("url");
    if (url === "") return;
    const shortURL = await createShortURL(url as string);
    setShortedURL(shortURL);
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" name="url" placeholder="URL" />
        <button>Acortar</button>

        {shortedURL !== "" && <p>{shortedURL}</p>}
      </form>
    </div>
  );
}
