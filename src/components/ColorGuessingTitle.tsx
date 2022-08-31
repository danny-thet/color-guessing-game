import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { RGBsContext } from "../context/RGBsContext";

export const ColorGuessingTitle = () => {
	const rgb = useContext(RGBsContext);

	return (
		<Box
			p="30"
			textAlign="center"
			color="white"
			bgColor="#cc00ff"
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
