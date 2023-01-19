const FILM_LIST_LENGTH = 'FILM_LIST_LENGTH';

function setTotalPages(payload: number) {
	return {
		type: FILM_LIST_LENGTH,
		payload,
	}
}

export {setTotalPages, FILM_LIST_LENGTH}
