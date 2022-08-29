import { Box, Flex } from "@chakra-ui/react";
import { ColorBox } from "./ColorBox";
import { RGBTYPE } from "./ColorGuessingMain";

const boxesHard = ["box1", "box2", "box3", "box4", "box5", "box6"];

type ColorGuessingBodyProps = {
	hardRGBs: RGBTYPE[];
};

export const ColorGuessingBody = ({ hardRGBs }: ColorGuessingBodyProps) => {
	return (
		<Box mt="50px" h="100%" maxW="100%" bgColor="#f5ccff" textAlign="center">
			<Flex
				mx="auto"
				maxW="500px"
				gap="20px"
				flexWrap="wrap"
				justifyContent="center"
			>
				{hardRGBs.map((box) => {
					return <ColorBox key={box.id} rgbColor={box?.rgb} />;
				})}
			</Flex>
		</Box>
	);
};
