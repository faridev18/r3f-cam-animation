import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useRef } from 'react'

extend({ OrbitControls: OrbitControls })


export default function Experience()
{

    const cubeRef = useRef()
    const { camera, gl } = useThree()


    useFrame((state, delta) =>
    {
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0, 0, 0)
        cubeRef.current.rotation.y += delta
    })


    return <>
    
    <orbitControls args={ [ camera, gl.domElement ] } />

    </>
}