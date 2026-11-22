function requireEnv(name: string): string {
	const value = process.env[name]?.trim()

	if (!value) {
		throw new Error(`Не задана переменная окружения ${name}`)
	}

	return value
}

const moviesApiUrl = new URL(requireEnv('KINOPOISK_URL'))
moviesApiUrl.pathname = moviesApiUrl.pathname.replace(/\/+$/, '').replace(/\/collections$/, '')

export const env = {
	moviesApiUrl: moviesApiUrl.href,
	moviesApiKey: requireEnv('KINOPOISK_API_KEY'),
	moviesApiTimeoutMs: 8_000,
	databaseUrl: requireEnv('DATABASE_URL'),
}
