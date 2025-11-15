import { useRef } from "react";

export default function FileUploader({ onLoaded }: any) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    onLoaded({ file, buffer: arrayBuffer });
  };

  return (
    <div>
      <h2 className="font-semibold mb-2">Upload STL/OBJ</h2>

      <input
        type="file"
        accept=".stl,.obj"
        ref={inputRef}
        onChange={handleFile}
      />

      <p className="text-sm text-gray-500 mt-2">
        Supports: .stl, .obj files
      </p>
    </div>
  );
}
