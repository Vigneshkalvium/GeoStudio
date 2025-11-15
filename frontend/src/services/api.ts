const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function analyzeMesh(file: File) {
  const form = new FormData();
  form.append("file", file);

  const res = await fetch(`${API_URL}/api/analyze`, {
    method: "POST",
    body: form,
  });

  return res.json();
}
