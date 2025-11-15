import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three-stdlib";
import { OBJLoader } from "three-stdlib";

export default function Viewer({ mesh }: any) {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
      <OrbitControls />

      {mesh && <Model mesh={mesh} />}
    </Canvas>
  );
}

function Model({ mesh }: any) {
  const { file, buffer } = mesh;

  let geometry: any = null;
  let model: any = null;

  if (file.name.endsWith(".stl")) {
    geometry = useLoader(STLLoader, buffer);
  } else if (file.name.endsWith(".obj")) {
    model = useLoader(OBJLoader, buffer);
  }

  return (
    <>
      {geometry && (
        <mesh geometry={geometry}>
          <meshStandardMaterial color={"#5183f5"} />
        </mesh>
      )}

      {model && <primitive object={model} />}
    </>
  );
}
