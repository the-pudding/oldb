import books from "$data/web-all.csv";

function clean(str) {
	return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export async function load({ params }) {
	const book = books.find((d) => clean(d.id) === params.slug);

	if (!book) {
		throw new Error(404, "Book not found");
	}

	return {
		...book
	};
}

export async function entries() {
	return books.map((d) => ({ slug: clean(d.id) }));
}
