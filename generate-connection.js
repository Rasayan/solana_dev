import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl('mainnet-beta'));
// const publicKey = new PublicKey("3E2ZGcaNZvB4vjbVBJQ1Udt4gDjuwqKy5scwC8LULHb6")

const supliedPublicKey = process.argv[2];

if(!supliedPublicKey) {
    throw new Error("Provide a public key");
}

const publicKey = new PublicKey(supliedPublicKey)

const getBalance = await connection.getBalance(publicKey);

console.log(`Account balance(💸)  --  ${getBalance/LAMPORTS_PER_SOL}`);