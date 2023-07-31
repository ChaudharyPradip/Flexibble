import NextAuth from "next-auth/next";

import { authOptions } from "@/lib/session";

// Separating auth options logic to another file
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
