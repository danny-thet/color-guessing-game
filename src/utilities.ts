import { RGBTYPE } from "./types";

const generateNumber = () => {
	const randomNumber = Math.floor(Math.random() * 225 + 1);

	return randomNumber;
};

export const generateRGBNumber = () => {
	const red = generateNumber();
	const blue = generateNumber();
	const green = generateNumber();
	const rgb = `rgb(${red.toString()},${blue.toString()},${green.toString()})`;

	return rgb;
};

export const generateRandomRGBsList = (rgbsList: RGBTYPE[]) => {
	const newRGBsList = rgbsList.map((rgb) => {
		const randomRGB = generateRGBNumber();
		return {
			id: rgb.id,
			rgb: randomRGB,
			guess: null,
		};
	});
	return newRGBsList;
};

export const generateCorrectRGB = (rgbsList: RGBTYPE[]) => {
	return rgbsList[Math.floor(Math.random() * rgbsList.length)];
};
