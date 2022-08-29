import { Box } from "@chakra-ui/react";

type ColorBoxProps = {
	rgbColor: string;
};

export const ColorBox = ({ rgbColor }: ColorBoxProps) => {
	return (
		<Box w="150px" h="150px" bgColor={rgbColor} borderRadius="40px">
			Box
		</Box>
	);
};
