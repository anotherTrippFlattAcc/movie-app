import { ERROR_CODES } from '../constants/errors'
import { AppError } from '../errors/AppError'

export function parsePage(value: unknown): number {
	if (value === undefined) {
		return 1
	}

	if (typeof value !== 'string') {
		throw new AppError(400, ERROR_CODES.INVALID_PAGE)
	}

	const page = Number(value)

	if (!Number.isInteger(page)) {
		throw new AppError(400, ERROR_CODES.INVALID_PAGE)
	}

	return page
}
