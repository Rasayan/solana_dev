import { Keypair } from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = Keypair.generate();

console.log(`Public key  --  ${keypair.publicKey.toBase58()}`);
console.log(`Secret key  --  ${keypair.secretKey}`);