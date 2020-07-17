export default (skipError = true) => {
	let run: Promise<any>
	return (cb: () => any) => run = (async () => {
		try {
			await run
		} catch (e) {
			if (!skipError) throw e
		}
		await cb()
	})()
}
