import Image from 'next/image';
import Box from './Box';
import { FunctionComponent } from 'react'

interface BoxProp {
    className: string
}

const BoxGroup: FunctionComponent<BoxProp>  = (props) => {
    const { className } = props
    const Box2 = [
		<Image alt="node" src="/techs/node.webp" width="79" height="79" id="node"/>,
		<Image alt="react" src="/techs/react.webp" width="79" height="79" id="react" />
	]

	const Box3 = [
		<Image alt="ts" src="/techs/ts.webp" width="75" height="75" id="js" />,
		<Image alt="js" src="/techs/js.webp" width="75" height="75" id="js" />,
		<Image alt="tailwind" src="/techs/tailwind.webp" width="79" height="79" id="tailwind" />
	]
    return (
        <div className={`w-fit h-fit flex justify-center items-center gap-x-7 ${className}`}>
            <Box>
                <Image alt="nextjs" src="/techs/next.webp" width="79" height="79" />
            </Box>
            <div className="flex flex-col gap-y-7">
                {Box2.map(items => {
                    return (
                        <Box key={items.key}>
                            {items}
                        </Box>
                    )
                })}
            </div>
            <div className="flex flex-col gap-y-7">
                {Box3.map(items => {
                    return (
                        <Box key={items.key}>
                            {items}
                        </Box>
                    )
                })}
            </div>
        </div>
    );
}

export default BoxGroup;