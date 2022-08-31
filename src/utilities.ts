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
	const newRGBsList = rgbsList.map((rgbColor) => {
		const randomRGB = generateRGBNumber();
		return {
			...rgbColor,
			rgb: randomRGB,
		};
	});
	return newRGBsList;
};

export const generateCorrectRGB = (rgbsList: RGBTYPE[]) => {
	return rgbsList[Math.floor(Math.random() * rgbsList.length)];
};
