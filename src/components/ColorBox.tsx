import { Box } from "@chakra-ui/react";

type ColorBoxProps = {
	rgbColor: string;
	onSelectColor: (rgbColor: string) => void;
};

export const ColorBox = ({ rgbColor, onSelectColor }: ColorBoxProps) => {
	return (
		<Box
			w="150px"
			h="150px"
			bgColor={rgbColor}
			transition="0.5s"
			borderRadius="40px"
			boxShadow="0px 0px 3px 3px  lightgray"
			onClick={() => onSelectColor(rgbColor)}
		/>
	);
};
