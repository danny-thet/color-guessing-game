import { Box, Text } from "@chakra-ui/react";

type ColorGuessingTitleProps = {
	rgb: string;
};

export const ColorGuessingTitle = ({ rgb }: ColorGuessingTitleProps) => {
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
			<Text fontSize="6xl">{rgb}</Text>
			<Text>GUESSING GAME</Text>
		</Box>
	);
};
