import Image from 'next/image';
import Box from './Box';

const BoxGroup  = () => {
    const Box2 = [
        {
            id: '1',
            item: <Image alt="node" src="/techs/node.webp" width="79" height="79" id="node"/>,
        },
        {
            id: '2',
            item: <Image alt="react" src="/techs/react.webp" width="79" height="79" id="react" />
        },
	]

	const Box3 = [
        {
            id: '1',
            item: <Image alt="ts" src="/techs/ts.webp" width="75" height="75" id="js" />,
        },
        {
            id: '2',
            item: <Image alt="js" src="/techs/js.webp" width="75" height="75" id="js" />,
        },
        {
            id: '3',
            item: <Image alt="tailwind" src="/techs/tailwind.webp" width="79" height="79" id="tailwind" />
        },
	]
    return (
        <div className={`w-fit h-fit flex justify-center items-center gap-x-7`}>
            <Box>
                <Image alt="nextjs" src="/techs/next.webp" width="79" height="79" />
            </Box>
            <div className="flex flex-col gap-y-7">
                {Box2.map(items => {
                    return (
                        <Box key={items.id}>
                            {items.item}
                        </Box>
                    )
                })}
            </div>
            <div className="flex flex-col gap-y-7">
                {Box3.map(items => {
                    return (
                        <Box key={items.id}>
                            {items.item}
                        </Box>
                    )
                })}
            </div>
        </div>
    );
}

export default BoxGroup;