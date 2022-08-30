import { Box } from "@chakra-ui/react";
import { ColorSetting } from "./ColorSetting";
import { ColorGuessingTitle } from "./ColorGuessingTitle";
import { ColorGuessingBody } from "./ColorGuessingBody";
import { useEffect, useState } from "react";

export type RGBTYPE = {
	id: string;
	rgb: string;
};

const defaultHardRGBs: RGBTYPE[] = [
	{ id: "hardBox1", rgb: "" },
	{ id: "hardBox2", rgb: "" },
	{ id: "hardBox3", rgb: "" },
	{ id: "hardBox4", rgb: "" },
	{ id: "hardBox5", rgb: "" },
	{ id: "hardBox6", rgb: "" },
];

const defaultEasyRGBs: RGBTYPE[] = [
	{ id: "easyBox1", rgb: "" },
	{ id: "easyBox2", rgb: "" },
	{ id: "easyBox3", rgb: "" },
];

const generateNumber = () => {
	const randomNumber = Math.floor(Math.random() * 225 + 1);

	return randomNumber;
};

const generateRGBNumber = () => {
	const red = generateNumber();
	const blue = generateNumber();
	const green = generateNumber();
	const rgb = `rgb(${red.toString()},${blue.toString()},${green.toString()})`;

	return rgb;
};

const generateRandomRGBsList = (rgbsList: RGBTYPE[]) => {
	const newRGBsList = rgbsList.map((rgb) => {
		const randomRGB = generateRGBNumber();
		return {
			id: rgb.id,
			rgb: randomRGB,
		};
	});
	return newRGBsList;
};

const generateCorrectRGB = (rgbsList: RGBTYPE[]) => {
	return rgbsList[Math.floor(Math.random() * rgbsList.length)];
};

export const ColorGuessingMain = () => {
	// states
	const [isHardMode, setIsHardMode] = useState<boolean>(true);
	const [hardRGBs, setHardRGBs] = useState<RGBTYPE[]>(defaultHardRGBs);
	const [easyRGBs, setEasyRGBs] = useState<RGBTYPE[]>(defaultEasyRGBs);
	const [correctRGB, setCorrectRGB] = useState<string>("");
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const rgbsList = isHardMode ? hardRGBs : easyRGBs;

	// events
	const createHardRGBs = () => {
		const newHardRGBs = generateRandomRGBsList(hardRGBs);
		setHardRGBs(newHardRGBs);

		const newCorrectRGB = generateCorrectRGB(newHardRGBs);
		setCorrectRGB(newCorrectRGB.rgb);

		setIsCorrect(null);
	};

	const createEasyRGBs = () => {
		const newEasyRGBs = generateRandomRGBsList(easyRGBs);
		setEasyRGBs(newEasyRGBs);

		const newCorrectRGB = generateCorrectRGB(newEasyRGBs);
		setCorrectRGB(newCorrectRGB.rgb);

		setIsCorrect(null);
	};

	const handleClickNewColors = () => {
		if (isHardMode) {
			createHardRGBs();
		} else {
			createEasyRGBs();
		}
	};

	const handleClickEasyMode = () => {
		setIsHardMode(false);
		createEasyRGBs();
	};

	const handleClickHardMode = () => {
		setIsHardMode(true);
		createHardRGBs();
	};

	const handleSelectColor = (rgbColor: string) => {
		if (rgbColor === correctRGB) {
			setIsCorrect(true);
		} else {
			setIsCorrect(false);
		}
	};

	// effect
	useEffect(() => {
		handleClickNewColors();
	}, []);

	return (
		<Box>
			<ColorGuessingTitle rgb={correctRGB} />
			<ColorSetting
				onClickNewColors={handleClickNewColors}
				onClickEasyMode={handleClickEasyMode}
				onClickHardMode={handleClickHardMode}
			/>
			<ColorGuessingBody
				rgbsList={rgbsList}
				onSelectColor={handleSelectColor}
			/>
		</Box>
	);
};
