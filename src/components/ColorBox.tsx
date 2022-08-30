import { Box } from "@chakra-ui/react";
import { RGBTYPE } from "./ColorGuessingMain";

type ColorBoxProps = {
	rgbValues: RGBTYPE;
	onSelectColor: (boxId: string, rgbColor: string) => void;
};

export const ColorBox = ({ rgbValues, onSelectColor }: ColorBoxProps) => {
	return (
		<Box
			w="150px"
			h="150px"
			bgColor={
				!rgbValues.guess && rgbValues.guess !== null ? "" : rgbValues.rgb
			}
			transition="0.5s"
			borderRadius="40px"
			boxShadow="0px 0px 3px 3px  white"
			onClick={() => onSelectColor(rgbValues.id, rgbValues.rgb)}
		/>
	);
};
