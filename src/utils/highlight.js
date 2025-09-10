export default function highlight({ text, highlights }) {
	// If there are no highlights, return the original text.
	if (!highlights || highlights.length === 0) {
		return text;
	}

	// Sort highlights by offset to process them in order.
	// This is crucial to avoid messing up indices as we modify the string.
	const sortedHighlights = [...highlights].sort((a, b) => {
		const aS = Number(a.offset.split("|")[0]);
		const bS = Number(b.offset.split("|")[0]);
		return aS - bS;
	});

	let result = "";
	let currentIndex = 0;

	for (const h of sortedHighlights) {
		const [start, len] = h.offset.split("|").map(Number);

		result += text.slice(currentIndex, start);

		const className = h.type ? ` class="${h.type}"` : "";

		result += `<mark${className}>${h.raw}</mark>`;

		currentIndex = start + len;
	}

	result += text.slice(currentIndex);

	return result;
}
