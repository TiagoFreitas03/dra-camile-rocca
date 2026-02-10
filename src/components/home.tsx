export function Home() {
	return (
		<div
			className="flex h-screen items-center bg-[url(/home-bg.png)] bg-no-repeat bg-center"
			id="home"
		>
			<div className="flex justify-around w-full">
				<span></span>

				<div className="flex flex-col gap-24 justify-center items-center">
					<div className="text-center">
						<h1 className="font-cinzel-decorative font-extralight text-7xl text-dark-red">
							DRa. Camile Rocca
						</h1>

						<span className="font-inter text-4xl font-light text-dark-red block mt-4">
							Cirurgiã-dentista
						</span>
					</div>

					<button
						type="button"
						className="uppercase font-cinzel text-2xl text-white bg-dark-red py-4 px-11 rounded-2xl border-0 cursor-pointer shadow-2xl"
					>
						agende sua consulta
					</button>
				</div>
			</div>
		</div>
	)
}
