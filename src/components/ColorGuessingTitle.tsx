import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { RGBsContext } from "../context/RGBsContext";

export const ColorGuessingTitle = () => {
	const rgb = useContext(RGBsContext);
	const isCorrectGuess = rgb.rgbsList.some((rgb) => rgb.guess);
	const bgColor = isCorrectGuess ? rgb.correctRGB : "#cc00ff";

	return (
		<Box
			p="30"
			textAlign="center"
			color="white"
			bgColor={bgColor}
			fontSize="large"
			fontWeight="bold"
			fontFamily="monospace"
			textTransform="uppercase"
		>
			<Text>THE GREAT RGB COLOR</Text>
			<Text fontSize="6xl">{rgb.correctRGB}</Text>
			<Text>GUESSING GAME</Text>
		</Box>
	);
};
