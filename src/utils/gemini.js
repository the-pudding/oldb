import { GoogleGenAI } from "@google/genai";

let ai;

async function test() {
	try {
		const response = await ai.models.generateContent({
			model: "gemini-2.5-flash",
			contents: "Respond with 'Hi'"
		});
	} catch (err) {
		throw err;
	}
}

export async function setup(apiKey) {
	try {
		if (!apiKey) throw new Error("API key is required for Gemini AI.");
		ai = new GoogleGenAI({ apiKey });
		await test();
	} catch (err) {
		const e = JSON.parse(err?.message);
		throw new Error(e?.error?.message);
	}
}

export async function query({ contents, temperature = 0.5 }) {
	if (!apiKey) throw new Error("API key is required for Gemini AI.");

	try {
		const config = {
			temperature,
			thinkingConfig: { thinkingBudget: 0 },
			responseMimeType: "application/json",
			responseSchema: {
				type: "array",
				items: {
					type: "object",
					properties: {
						md5: {
							type: "string",
							description: "The MD5 hash of the data."
						},
						value: {
							type: "string",
							description: "The associated value."
						}
					},
					required: ["md5", "value"]
				}
			}
		};
		const model = "gemini-2.5-flash-preview-05-20";
		const response = await ai.models.generateContent({
			model,
			config,
			contents
		});

		return response.candidates[0].content.parts[0].text;
	} catch (err) {
		throw new Error(`Gemini AI error: ${err.message}`);
	}
}
