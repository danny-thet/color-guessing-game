import { Box } from "@chakra-ui/react";
import { ColorSetting } from "./ColorSetting";
import { ColorGuessingTitle } from "./ColorGuessingTitle";
import { ColorGuessingBody } from "./ColorGuessingBody";

export const ColorGuessingMain = () => {
	return (
		<Box>
			<ColorGuessingTitle />
			<ColorSetting />
			<ColorGuessingBody />
		</Box>
	);
};
