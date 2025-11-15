import { useState } from "react";
import Viewer from "./canvas/Viewer";
import FileUploader from "./components/FileUploder";

export default function App() {
  const [mesh, setMesh] = useState<any>(null);

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="p-4 bg-gray-900 text-white text-lg font-semibold">
        GeoStudio – 3D Editor Starter
      </header>

      <div className="flex flex-row w-full h-full">
        <div className="w-64 border-r p-4">
          <FileUploader onLoaded={setMesh} />
        </div>
        <div className="flex-1">
          <Viewer mesh={mesh} />
        </div>
      </div>
    </div>
  );
}
