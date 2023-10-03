/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function Avatar(props) {
  const { animation } = props;

  // WE ACTUALLY NAMED EVERY BIT OF THE CONTROLS SO IT ISN'T LIKE IMPORTED AS DEFAULT THEN WE SET A STATE IN FROM OF CONTROLS ALL FROM LEVA LIBRARY
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("models/avatar.glb");

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
  const { animations: standingAnimation } = useFBX(
    "animations/Standing Idle.fbx"
  );
  const { animations: fallingAnimation } = useFBX(
    "animations/Falling Idle.fbx"
  );
  const { animations: dancingAnimation } = useFBX(
    "animations/Dancing Twerk.fbx"
  );
  const { animations: sleepingAnimation } = useFBX(
    "animations/Sleeping Idle.fbx"
  );

  // WE ARE NAMING OUR ANIMATION AS WELL SO WE DON'T GET "MIXAMO" (BASICALLY IN THE CONSOLE)
  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";
  dancingAnimation[0].name = "Dancing";
  sleepingAnimation[0].name = "Sleeping";

  // USE ANIMATION TAKES TWO PROPERTIES, ONE IS AN ARRAY OF ANIMATIONS THEN ANOTHER WHICH IS THE 'GROUP'
  const { actions } = useAnimations(
    [typingAnimation[0], standingAnimation[0], fallingAnimation[0], dancingAnimation[0], sleepingAnimation[0]],
    group
  );




// This code uses the `useFrame` function from react-three-fiber to update the 3D scene in every frame.

useFrame((state) => {
  // Check if the 'headFollow' variable is true
  if (headFollow) {
    // If 'headFollow' is true, make the 3D object with the name "Head" in the 'group' element
    // look at the position of the camera, making it follow the camera's position.
    group.current.getObjectByName("Head").lookAt(state.camera.position);
  }

  // Check if the 'cursorFollow' variable is true
  if (cursorFollow) {
    // If 'cursorFollow' is true, create a 3D target at the mouse's position (x, y, 1)
    const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
    
    // Make the 3D object with the name "Spine2" in the 'group' element look at the target position.
    // This can create an effect where the object follows the mouse cursor in 3D space.
    group.current.getObjectByName("Spine2").lookAt(target);
  }
});


// When the 'animation' variable changes, this code runs.
  useEffect(() => {
      // Reset, fade in, and play the specified animation with a duration of 0.5 seconds.
    actions[animation].reset().fadeIn(0.5).play();

      // Return a cleanup function that will reset and fade out the animation when it's unmounted or when 'animation' changes.
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe]);

  const sleepingPosition = animation === "Sleeping" ? [0, 0.52, 0] : [0, 0, 0];


  return (
    <group {...props} ref={group} position={sleepingPosition} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/avatar.glb");
