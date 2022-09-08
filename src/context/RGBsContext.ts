import React from "react";
import { RGBTYPE } from "../types";

const defaultRGBsList: RGBTYPE[] = [];

export const RGBsContext = React.createContext({
	correctRGB: "",
	rgbsList: defaultRGBsList,
	handleClickNewColors: () => {},
	handleClickEasyMode: () => {},
	handleClickHardMode: () => {},
	handleSelectColor: (boxId: string, rgbColor: string) => {},
});
