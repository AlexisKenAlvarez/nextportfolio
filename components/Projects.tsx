import { FunctionComponent, useState, useRef, useEffect } from 'react'
import { useInView, useAnimation, motion } from "framer-motion"
import { genRandom } from '../utils/UsefulFunctions'
import { projectList } from '../utils/ObjectList'
import ProjectTemplate from './Projects/ProjectTemplate'

const Projects: FunctionComponent = () => {

    const [letters, setTest] = useState(['早'])
    const projTitle = useRef(null)
    const projView = useInView(projTitle, { once: true })
    const word = "PROJECTS"
    const wordArr = ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']

    const proj2 = useRef(null)
    const proj3 = useRef(null)

    const refArr = [null, proj2, proj3]
    const view2 = useInView(proj2, { once: true })
    const view3 = useInView(proj3, { once: true })

    const self1 = useRef(null)
    const self2 = useRef(null)
    const self3 = useRef(null)
    const selfView1 = useInView(self1, { once: true })
    const selfView2 = useInView(self2, { once: true })
    const selfView3 = useInView(self3, { once: true })

    const selfRefArr = [self1, self2, self3]
    const selfViewArr = [selfView1, selfView2, selfView3]

    const viewArr = [view2, view3, false]
    
    useEffect(() => {
        if (projView) {
            var tempArray = ['']
            const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18]

            for (let x = 0; x < 28; x++) {
                setTimeout(() => {

                    arr.map((items, i) => {

                        if (x >= items) {
                            tempArray[i] = word[i]
                        } else {
                            tempArray[i] = genRandom()
                        }
                    })

                    setTest([...tempArray])
                }, 80 * (x + 1));
            }
        }
    }, [projView])


    return (

        <div className='max-w-[1600px] mx-auto mt-36 h-[150rem] flex flex-col relative'>
            <div className='w-[80%] xl:w-[72%] lg:w-[80%] mx-auto text-center'>
                <h1 className="font-quicksand text-mygreen font-semibold text-lg lg:text-left">Some projects I've made</h1>
                <div className='flex mx-auto w-fit lg:mx-0' ref={projTitle}>
                    {letters.map((letter, i) => {

                        return (

                            <h2 key={i} className="text-4xl md:text-6xl font-raleway text-darkgrey" style={wordArr.includes(letter) ? { fontWeight: '800' } : { fontWeight: 'regular' }}>{letter}</h2>
                        )
                    })}
                </div>

            </div>

            <div>
                {projectList.map((items, index) => {
                    return (
                        <ProjectTemplate key={index} num={items.num} title={items.title} desc={items.desc} img={items.img} innerRef={refArr[index]} view={viewArr[index]} selfRef={selfRefArr[index]} selfView={selfViewArr[index]}/>
                    )
                })}
            </div>


        </div>


    );
}

export default Projects;