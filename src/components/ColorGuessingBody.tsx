import { Box, Flex } from "@chakra-ui/react";
import { ColorBox } from "./ColorBox";
import { RGBTYPE } from "./ColorGuessingMain";

type ColorGuessingBodyProps = {
	rgbsList: RGBTYPE[];
	onSelectColor: (rgbColor: string) => void;
};

export const ColorGuessingBody = ({
	rgbsList,
	onSelectColor,
}: ColorGuessingBodyProps) => {
	return (
		<Box mt="50px" h="100%" maxW="100%" textAlign="center">
			<Flex
				mx="auto"
				maxW="500px"
				gap="20px"
				flexWrap="wrap"
				justifyContent="center"
			>
				{rgbsList?.map((box) => {
					return (
						<ColorBox
							key={box.id}
							rgbColor={box?.rgb}
							onSelectColor={onSelectColor}
						/>
					);
				})}
			</Flex>
		</Box>
	);
};
