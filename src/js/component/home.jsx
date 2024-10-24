import React, { useState } from "react";

export function Home() {
	const [selectedColor, setselectedColor] = useState("red");
	return (
		<div className="traffic-light mx-auto">
			<div
				onClick={() => setselectedColor("red")}
				className={
					"light red " + (selectedColor === "red" ? "glow" : "")
				}></div>

			<div
				onClick={() => setselectedColor("yellow")}
				className={
					"light yellow " + (selectedColor === "yellow" ? "glow" : "")
				}></div>

			<div
				onClick={() => setselectedColor("green")}
				className={
					"light green " + (selectedColor === "green" ? "glow" : "")
				}></div>

		</div>
	);
};


