export default function makeQueue(skipError = true) {
	let run
	return cb => run = (async () => {
		try {
			await run
		} catch (e) {
			if (!skipError) throw e
		}
		await cb()
	})()
}
