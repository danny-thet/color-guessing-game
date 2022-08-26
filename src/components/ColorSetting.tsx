import { Box, Button, Flex } from "@chakra-ui/react";

export const ColorSetting = () => {
	const theme = {
		p: "3",
		borderRadius: "none",
		color: "#cc00ff",
		bg: "white",
		_hover: { bg: "#cc00ff", color: "white" },
		fontSize: "xl",
		fontWeight: "bold",
		fontFamily: "monospace",
		transition: "0.5s",
	};

	return (
		<Box
			textAlign="center"
			bgColor="white"
			borderColor="lightgray"
			borderBottomWidth="1px"
		>
			<Flex justifyContent="space-evenly">
				<Button __css={theme}>NEW COLORS</Button>
				<Flex>
					<Button __css={theme}>EASY</Button>
					<Button __css={theme}>HARD</Button>
				</Flex>
			</Flex>
		</Box>
	);
};
