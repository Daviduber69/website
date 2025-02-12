import { useFrame, useThree} from "@react-three/fiber";
import {useRef, useState} from "react";
import * as THREE from "three";


interface MeshProps{
    index: number,
    z: number,
    viewport: { width: number; height: number };
}
export const MyMesh = ({index, z} : MeshProps) => {
    const { viewport } = useThree();
    const { width, height } = viewport;
    useFrame((_, dt) => {
        if (dt < 0.1)
            ref.current.position.set(
                index === 0 ? 0 : data.x * width * 0.5,
                (data.y += dt * 0.75),
                -z + Math.sin((data.z -= 0.01))
            );

        if (data.y > height * (index === 0 ? 4 : 1) + 5)
            data.y = -(height * (index === 0 ? 4 : 1) + 5);
    });
    const ref = useRef<THREE.Mesh>(null!);
    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(height) * 2,
        z: -z,
        rotationX: Math.random() * Math.PI,
        rotationZ: Math.random() * Math.PI,
        spinSpeed: THREE.MathUtils.randFloat(8, 12),
    });
    return (
        <mesh ref={ref} scale={[0.1, 0.1, 0.1]}>
            <planeGeometry/>
            <meshBasicMaterial color="gray"/>
        </mesh>
    )
}