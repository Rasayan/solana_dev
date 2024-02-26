import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config"


const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log("✅ Got keypair from env.......");