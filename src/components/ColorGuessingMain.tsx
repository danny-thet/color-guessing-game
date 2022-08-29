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
	console.log(
		"🚀 ~ file: ColorGuessingMain.tsx ~ line 35 ~ generateRGBNumber ~ red",
		red
	);
	const blue = generateNumber();
	const green = generateNumber();
	const rgb = `rgb(${red.toString()}, ${blue.toString()}, ${green.toString()})`;

	return rgb;
};

export const ColorGuessingMain = () => {
	const [isHardMode, setIsHardMode] = useState<boolean>(true);
	const [hardRGBs, setHardRGBs] = useState<RGBTYPE[]>(defaultHardRGBs);
	const [easyRGBs, setEasyRGBs] = useState<RGBTYPE[]>(defaultEasyRGBs);

	useEffect(() => {
		const newHardRGBs = hardRGBs.map((rgb) => {
			const randomRGB = generateRGBNumber();
			return {
				id: rgb.id,
				rgb: randomRGB,
			};
		});
		setHardRGBs(newHardRGBs);
	}, []);
	return (
		<Box>
			<ColorGuessingTitle />
			<ColorSetting />
			<ColorGuessingBody hardRGBs={hardRGBs} />
		</Box>
	);
};
