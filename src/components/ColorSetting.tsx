import { Box, Button, Flex } from "@chakra-ui/react";

type ColorSettingProps = {
	onClickNewColors: () => void;
	onClickEasyMode?: () => void;
	onClickHardMode?: () => void;
};

export const ColorSetting = ({
	onClickNewColors,
	onClickEasyMode,
	onClickHardMode,
}: ColorSettingProps) => {
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
				<Button __css={theme} onClick={onClickNewColors}>
					NEW COLORS
				</Button>
				<Flex>
					<Button __css={theme} onClick={onClickEasyMode}>
						EASY
					</Button>
					<Button __css={theme} onClick={onClickHardMode}>
						HARD
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};
