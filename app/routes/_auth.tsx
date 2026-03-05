import { redirect, type MiddlewareFunction } from "react-router";

// Server-side Authentication Middleware
const authMiddleware: MiddlewareFunction = async ({ request, context }) => {
  const isValid = request.headers.get("Cookie")?.includes("authToken=valid");
  if (!isValid) {
    throw redirect("/login");
  }
}

export const middleware: MiddlewareFunction[] = [
  authMiddleware,
];
