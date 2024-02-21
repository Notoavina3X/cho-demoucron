import { createFileRoute } from "@tanstack/react-router";

function Index() {
	return <div className="">Index</div>;
}

export const Route = createFileRoute("/")({
	component: Index,
});
