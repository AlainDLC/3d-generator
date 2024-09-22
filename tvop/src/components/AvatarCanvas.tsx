import {
  Html,
  OrbitControls,
  useAnimations,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Avatar = () => {
  const [index, setIndex] = useState(1);
  const avatar = useGLTF("/mc.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      actions[names[index]]?.reset().fadeIn(0.5).play();
    } else {
      actions[names[index]]?.fadeOut(0.5);
    }

    return () => {
      actions[names[index]]?.fadeOut(0.5);
    };
  }, [index, actions, names, isClicked]);

  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={1}
        position-y={-1}
        rotation-x={-0.4}
        rotation-y={-2}
        position-x={0}
      />

      <Html position={[-2.7, 0.3, 0]}>
        <button
          className="text-slate-100 w-[100px] rounded-lg text-xs sm:text-lg sm:w-[200px] duration-500 ml-0"
          onClick={() => {
            setIndex((index + 1) % names.length);
            setIsClicked(!isClicked);
          }}
        >
          {isClicked ? "Stop my moves" : "Click IT my moves"}
        </button>
      </Html>
    </group>
  );
};

export default function AvatarCanvas() {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={2} />

        <Avatar />
      </Canvas>
    </div>
  );
}
