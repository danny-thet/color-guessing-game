import { Box } from "@chakra-ui/react";
import { ColorSetting } from "./ColorSetting";
import { ColorGuessingTitle } from "./ColorGuessingTitle";
import { ColorGuessingBody } from "./ColorGuessingBody";
import { useEffect, useState } from "react";
import React from "react";
import { RGBTYPE } from "../types";
import { RGBsContext } from "../context/RGBsContext";
import { generateCorrectRGB, generateRandomRGBsList } from "../utilities";

export const ColorGuessingMain = () => {
	// states
	const [isHardMode, setIsHardMode] = useState<boolean>(true);
	const [correctRGB, setCorrectRGB] = useState<string>("");
	const [rgbsList, setRGBsList] = useState<RGBTYPE[]>([]);

	// events
	const createRGBsList = (count: number) => {
		const newRGBs = generateRandomRGBsList(count);
		setRGBsList(newRGBs);

		const newCorrectRGB = generateCorrectRGB(newRGBs);
		setCorrectRGB(newCorrectRGB.rgb);
	};

	const handleCreateNewColors = () => {
		if (isHardMode) {
			createRGBsList(6);
		} else {
			createRGBsList(3);
		}
	};

	const handleClickEasyMode = () => {
		setIsHardMode(false);
		createRGBsList(3);
	};

	const handleClickHardMode = () => {
		setIsHardMode(true);
		createRGBsList(6);
	};

	const handleSelectColor = (boxId: string, rgbColor: string) => {
		if (rgbColor === correctRGB) {
			const newRGBs = rgbsList.map((rgbValues) => {
				return {
					...rgbValues,
					rgb: rgbColor,
					guess: true,
				};
			});
			setRGBsList(newRGBs);
		} else {
			const indexValue = rgbsList.findIndex((rgb) => rgb.id === boxId);
			rgbsList[indexValue] = { id: boxId, rgb: rgbColor, guess: false };
			setRGBsList([...rgbsList]);
		}
	};

	// effect
	useEffect(() => {
		handleCreateNewColors();
	}, []);

	return (
		<RGBsContext.Provider
			value={{
				correctRGB,
				rgbsList,
				handleClickNewColors: handleCreateNewColors,
				handleClickEasyMode,
				handleClickHardMode,
				handleSelectColor,
			}}
		>
			<Box>
				<ColorGuessingTitle />
				<ColorSetting />
				<ColorGuessingBody />
			</Box>
		</RGBsContext.Provider>
	);
};
