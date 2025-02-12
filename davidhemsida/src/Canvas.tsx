import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {DepthOfField, EffectComposer} from "@react-three/postprocessing";
import {MyMesh} from "./Mesh.tsx";

export const MyCanvas = () => {
    return (
        <Canvas
            camera={{ fov: 45, position: [0, 0, 10] }}
            style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",  pointerEvents: "none" }}
        >
            <Scene />
        </Canvas>
    );
};

const Scene = () => {
    const { viewport } = useThree();

    return (
        <>
            <EffectComposer multisampling={0}>
                <DepthOfField target={[0, 10, 30]} focalLength={1.8} bokehScale={11} height={1000} />
            </EffectComposer>
            {Array.from({ length: 50 }, (_, i) => (
                <MyMesh key={i} index={i} z={(i / 50) * 10} viewport={viewport} />
            ))}
        </>
    );
};