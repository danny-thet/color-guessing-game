import { Box } from "@chakra-ui/react";
import { ColorSetting } from "./ColorSetting";
import { ColorGuessingTitle } from "./ColorGuessingTitle";
import { ColorGuessingBody } from "./ColorGuessingBody";
import { useEffect, useState } from "react";
import React from "react";
import { RGBTYPE } from "../types";
import {
	defaultEasyRGBs,
	defaultHardRGBs,
	RGBsContext,
} from "../context/RGBsContext";
import { generateCorrectRGB, generateRandomRGBsList } from "../utilities";

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
		const handleCorrectSelect = (rgbs: RGBTYPE[]) => {
			return rgbs.map((rgbValues) => {
				return {
					...rgbValues,
					rgb: rgbColor,
					guess: true,
				};
			});
		};

		const handleInCorrectSelect = (rgbs: RGBTYPE[]) => {
			const indexValue = rgbs.findIndex((rgb) => rgb.id === boxId);
			rgbs[indexValue] = { id: boxId, rgb: rgbColor, guess: false };
		};

		if (isHardMode) {
			if (rgbColor === correctRGB) {
				const newRGBs = handleCorrectSelect(hardRGBs);
				setHardRGBs(newRGBs);
			} else {
				handleInCorrectSelect(hardRGBs);
				setHardRGBs([...hardRGBs]);
			}
		} else {
			if (rgbColor === correctRGB) {
				const newRGBs = handleCorrectSelect(easyRGBs);
				setEasyRGBs(newRGBs);
			} else {
				handleInCorrectSelect(easyRGBs);
				setEasyRGBs([...easyRGBs]);
			}
		}
	};

	// effect
	useEffect(() => {
		handleClickNewColors();
	}, []);

	return (
		<RGBsContext.Provider
			value={{
				correctRGB,
				rgbsList,
				handleClickNewColors,
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
