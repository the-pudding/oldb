const books = [{ id: "a" }, { id: "b" }];

function clean(str) {
	return str.toLowerCase().replace(/\s/g, "");
}

export async function load({ params }) {
	const book = books.find((d) => clean(d.id) === params.slug);

	if (!book) {
		throw error(404, "Book not found");
	}

	return {
		book
	};
}

export async function entries() {
	return books.map((d) => ({ slug: clean(d.id) }));
}
