import React from "react";
import { RGBTYPE } from "../types";

const hardCount = 6;
const easyCount = 3;

const generateDefaultRGBs = (count: number) => {
	const colorsArray = Array.from(Array(count).keys());
	const rgbsArray: RGBTYPE[] = colorsArray.map((x) => {
		return {
			id: x.toString(),
			rgb: "",
			guess: null,
		};
	});
	return rgbsArray;
};

export const defaultHardRGBs: RGBTYPE[] = generateDefaultRGBs(hardCount);

export const defaultEasyRGBs: RGBTYPE[] = generateDefaultRGBs(easyCount);

export const RGBsContext = React.createContext({
	correctRGB: "",
	rgbsList: defaultHardRGBs,
	handleClickNewColors: () => {},
	handleClickEasyMode: () => {},
	handleClickHardMode: () => {},
	handleSelectColor: (boxId: string, rgbColor: string) => {},
});
