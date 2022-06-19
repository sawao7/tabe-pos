import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Post } from "./Post";
import { TopPage } from "./TopPage";
import SampleImage from "../images/sample_1.jpeg";

export const Routers = () => {
	const [feeds, setFeed] = React.useState([
		{ title: "test", image: SampleImage, text: "美味しかったよ" },
		{ title: "test", image: SampleImage, text: "美味しかったよ" },
		{ title: "test", image: SampleImage, text: "美味しかったよ" },
		{ title: "test", image: SampleImage, text: "美味しかったよ" },
		{ title: "test", image: SampleImage, text: "美味しかったよ" },
		{ title: "test", image: SampleImage, text: "美味しかったよ" },
		{ title: "test", image: SampleImage, text: "美味しかったよ" },
		{ title: "test", image: SampleImage, text: "美味しかったよ" },
	]);
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<TopPage feeds={feeds} func={setFeed} />} />
					<Route path="/post" element={<Post feeds={feeds} func={setFeed} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
