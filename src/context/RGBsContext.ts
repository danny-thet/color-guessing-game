import React from "react";
import { RGBTYPE } from "../types";

export const defaultHardRGBs: RGBTYPE[] = [
	{ id: "hardBox1", rgb: "", guess: null },
	{ id: "hardBox2", rgb: "", guess: null },
	{ id: "hardBox3", rgb: "", guess: null },
	{ id: "hardBox4", rgb: "", guess: null },
	{ id: "hardBox5", rgb: "", guess: null },
	{ id: "hardBox6", rgb: "", guess: null },
];

export const defaultEasyRGBs: RGBTYPE[] = [
	{ id: "easyBox1", rgb: "", guess: null },
	{ id: "easyBox2", rgb: "", guess: null },
	{ id: "easyBox3", rgb: "", guess: null },
];

export const RGBsContext = React.createContext({
	correctRGB: "",
	rgbsList: defaultHardRGBs,
	handleClickNewColors: () => {},
	handleClickEasyMode: () => {},
	handleClickHardMode: () => {},
	handleSelectColor: (boxId: string, rgbColor: string) => {},
});
