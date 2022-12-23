import { FunctionComponent } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import Laptop from '../components/Laptop'
import { OrbitControls } from '@react-three/drei';
import { Stats } from '@react-three/drei'
import { Vector3 } from 'three'
import { useEffect, useState } from 'react';

const Projects: FunctionComponent = () => {

    const [hover, setHover] = useState({
        x: 0,
        y: 0
    })

    function Rig() {
        const { mouse } = useThree()

        return useFrame(() => {

            setHover(current => ({...current, x: mouse.x}))
            setHover(current => ({...current, y: mouse.y}))

        })
    }

    function Rig2() {
        const { camera } = useThree()
        const vec = new Vector3()

        return useFrame(() => {
            camera.position.lerp(vec.set(-hover.x + 0.5, -hover.y + 0.5, camera.position.z), 0.05)
            camera.lookAt(0, 0, 0)
        })
    }

    return (
        <div className='w-[80%] xl:w-[72%] lg:w-[80%] mx-auto mt-36 h-[40rem] flex flex-col relative justify-center items-center'>
            <div className='border-2 lg:w-1/2 h-[25rem] w-full'>
                <Canvas camera={{ fov: 30, near: 0.5, far: 1000, position: [0, 0, 15] }}>
                
                    <pointLight position={[10, 5, 10]} />
                    <Laptop position={[0, -2.6, -2]} scale={1} />
                    <Rig2 />
                </Canvas>
            </div>

            <div className='w-full left-0 right-0 h-screen absolute top-0'>
                <Canvas>
                    <Rig />
                </Canvas>
            </div>



        </div>
    );
}

export default Projects;