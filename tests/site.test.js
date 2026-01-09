import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { createServer } from "http";
import next from "next";
import { connectDatabase } from "../database/database.js";
import Member from "../database/schemas/Member.js";

const PORT = 3000;
process.env.PORT = PORT;

let appServer;

beforeAll(async () => {
	const app = next({ dev: true, dir: process.cwd() });
	const handle = app.getRequestHandler();
	await app.prepare();

	appServer = createServer((req, res) => handle(req, res));
	await new Promise((resolve) => appServer.listen(PORT, resolve));
});

afterAll(async () => {
	await new Promise((resolve) => appServer.close(resolve));
});

const pages = [""];

describe("Server", () => {
	describe("Database", () => {
		test("should connect without throwing an error", { timeout: 5000 }, async () => {
			await expect(connectDatabase()).resolves.not.toThrow();
		});

		test("should find the MASK user", { timeout: 10000 }, async () => {
			const member = await Member.findOne({ name: "Tadi Joshua Raj" });
			expect(member?.name).toBe("Tadi Joshua Raj");
		});
	});

	pages.forEach(page => {
		test(`should serve page (${page || "/"})`, { timeout: 5000 }, async () => {
			const response = await fetch(`http://localhost:${PORT}/${page}`);
			expect(response.ok).toBe(true);
			expect(response.status).toBe(200);
		});
	});

	describe("Errors", () => {
		test("should display 404s for pages that don't exist", async () => {
			const response = await fetch(`http://localhost:${PORT}/hashire-sori-yo`);
			expect(response.ok).toBe(false);
			expect(response.status).toBe(404);
		});
	});
});
