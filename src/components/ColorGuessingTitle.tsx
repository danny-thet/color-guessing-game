import { Box, Text } from "@chakra-ui/react";

export const ColorGuessingTitle = () => {
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
			<Text fontSize="6xl">RGB(116,11,255)</Text>
			<Text>GUESSING GAME</Text>
		</Box>
	);
};
