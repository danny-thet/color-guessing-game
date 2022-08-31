import { RGBTYPE } from "./types";

const generateNumber = () => {
	return Math.floor(Math.random() * 225 + 1);
};

export const generateRGBNumber = () => {
	const red = generateNumber();
	const blue = generateNumber();
	const green = generateNumber();
	const rgb = `rgb(${red.toString()},${blue.toString()},${green.toString()})`;

	return rgb;
};

export const generateRandomRGBsList = (count: number) => {
	const colorsCountArray = Array.from(Array(count).keys());
	const rgbsList: RGBTYPE[] = colorsCountArray.map((count) => {
		const randomRGB = generateRGBNumber();
		return {
			id: count.toString(),
			rgb: randomRGB,
			guess: null,
		};
	});

	return rgbsList;
};

export const generateCorrectRGB = (rgbsList: RGBTYPE[]) => {
	return rgbsList[Math.floor(Math.random() * rgbsList.length)];
};
