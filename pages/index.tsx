import Nav from "../components/Nav";


const Index = () => {

	return (
		<>
			<div className="h-screen w-full bg-topog relative overflow-x-hidden">
				<Nav />

				<div className="h-[80%] w-full flex justify-center items-center">
					<div className="w-fit h-fit flex justify-center items-center gap-x-7">
						<div className="border-2 border-black w-36 h-40 shadow-forBox"></div>
						<div className="flex flex-col gap-y-7">
							<div className="border-2 border-black w-36 h-40 shadow-forBox"></div>
							<div className="border-2 border-black w-36 h-40 shadow-forBox"></div>
						</div>
						<div className="flex flex-col gap-y-7">
							<div className="border-2 border-black w-36 h-40 shadow-forBox"></div>
							<div className="border-2 border-black w-36 h-40 shadow-forBox"></div>
							<div className="border-2 border-black w-36 h-40 shadow-forBox"></div>

						</div>
					</div>
				</div>
			</div>
		</>

	);
}

export default Index;