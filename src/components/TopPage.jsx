import React from "react";
import { Feed } from "./Feed";
import SampleImage from "../images/sample_1.jpeg";

export const TopPage = (props) => {
	// const [feeds, setFeed] = React.useState([
	// 	{ title: "test", image: SampleImage, text: "美味しかったよ" },
	// 	{ title: "test", image: SampleImage, text: "美味しかったよ" },
	// 	{ title: "test", image: SampleImage, text: "美味しかったよ" },
	// 	{ title: "test", image: SampleImage, text: "美味しかったよ" },
	// 	{ title: "test", image: SampleImage, text: "美味しかったよ" },
	// 	{ title: "test", image: SampleImage, text: "美味しかったよ" },
	// 	{ title: "test", image: SampleImage, text: "美味しかったよ" },
	// { title: "test", image: SampleImage, text: "美味しかったよ" },
	// ]);
	const feeds = props.feeds;
	const setFeed = props.func;
	// setFeed([...feeds, { title: "test", image: SampleImage, text: "美味しかったよ" }]);

	return (
		<div>
			<div className="flex flex-wrap justify-around px-16">
				{feeds ? (
					feeds.map((feed) => {
						return (
							<div className="mt-10">
								<Feed title={feed.title} image={feed.image} text={feed.text} />
							</div>
						);
					})
				) : (
					<div>投稿はありません</div>
				)}
			</div>
		</div>
	);
};
