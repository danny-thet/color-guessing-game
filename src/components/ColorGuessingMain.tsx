import { Box } from "@chakra-ui/react";
import { ColorSetting } from "./ColorSetting";
import { ColorGuessingTitle } from "./ColorGuessingTitle";
import { ColorGuessingBody } from "./ColorGuessingBody";
import { useEffect, useState } from "react";

export type RGBTYPE = {
	id: string;
	rgb: string;
	guess: boolean | null;
};

const defaultHardRGBs: RGBTYPE[] = [
	{ id: "hardBox1", rgb: "", guess: null },
	{ id: "hardBox2", rgb: "", guess: null },
	{ id: "hardBox3", rgb: "", guess: null },
	{ id: "hardBox4", rgb: "", guess: null },
	{ id: "hardBox5", rgb: "", guess: null },
	{ id: "hardBox6", rgb: "", guess: null },
];

const defaultEasyRGBs: RGBTYPE[] = [
	{ id: "easyBox1", rgb: "", guess: null },
	{ id: "easyBox2", rgb: "", guess: null },
	{ id: "easyBox3", rgb: "", guess: null },
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
			guess: null,
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
	const rgbsList = isHardMode ? hardRGBs : easyRGBs;

	// events
	const createHardRGBs = () => {
		const newHardRGBs = generateRandomRGBsList(hardRGBs);
		setHardRGBs(newHardRGBs);

		const newCorrectRGB = generateCorrectRGB(newHardRGBs);
		setCorrectRGB(newCorrectRGB.rgb);
	};

	const createEasyRGBs = () => {
		const newEasyRGBs = generateRandomRGBsList(easyRGBs);
		setEasyRGBs(newEasyRGBs);

		const newCorrectRGB = generateCorrectRGB(newEasyRGBs);
		setCorrectRGB(newCorrectRGB.rgb);
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

	const handleSelectColor = (boxId: string, rgbColor: string) => {
		if (isHardMode) {
			if (rgbColor === correctRGB) {
				const newRGBs = hardRGBs.map((rgbValues) => {
					return {
						...rgbValues,
						rgb: rgbColor,
						guess: true,
					};
				});
				setHardRGBs(newRGBs);
			} else {
				const indexValue = hardRGBs.findIndex((x) => x.id === boxId);
				hardRGBs[indexValue] = { id: boxId, rgb: rgbColor, guess: false };
				setHardRGBs([...hardRGBs]);
			}
		} else {
			if (rgbColor === correctRGB) {
				const newRGBs = easyRGBs.map((rgbValues) => {
					return {
						...rgbValues,
						rgb: rgbColor,
						guess: true,
					};
				});
				setEasyRGBs(newRGBs);
			} else {
				const indexValue = easyRGBs.findIndex((x) => x.id === boxId);
				easyRGBs[indexValue] = { id: boxId, rgb: rgbColor, guess: false };
				setEasyRGBs([...easyRGBs]);
			}
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
