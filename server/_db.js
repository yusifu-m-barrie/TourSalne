import mongoose from "mongoose";

let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

function ensureDbName(uri) {
  if (!uri) return uri;
  // If the URI ends with mongodb.net/ (no db) or has ...mongodb.net? (no slash before ?), append /hospitality
  const hasQuestion = uri.includes("?");
  const [base, query] = hasQuestion ? [uri.split("?")[0], "?" + uri.split("?").slice(1).join("?")] : [uri, ""];
  // base like ...mongodb.net or ...mongodb.net/
  const endsWithSlash = base.endsWith("/");
  const hasDbSegment = !base.endsWith(".net") && !base.endsWith(".net/");
  if (!hasDbSegment) {
    const fixedBase = endsWithSlash ? base + "hospitality" : base + "/hospitality";
    return fixedBase + query;
  }
  return uri;
}

export async function connectDB() {
  if (cached.conn) return cached.conn;
  let uri = process.env.MONGO;
  if (!uri) throw new Error("Missing MONGO env var");

  uri = ensureDbName(uri);

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
