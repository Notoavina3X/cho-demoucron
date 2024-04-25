import Flow from "@/components/flow";
import Sidebar from "@/components/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ReactFlowProvider } from "reactflow";

export const Route = createRootRoute({
	component: () => (
		<ReactFlowProvider>
			<main className="min-h-screen">
				<div className="grid grid-cols-[250px_1fr_1fr] gap-4">
					<Sidebar />
					<Flow />
					<Outlet />
				</div>
			</main>
		</ReactFlowProvider>
	),
});
