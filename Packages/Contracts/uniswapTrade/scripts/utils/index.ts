import { writeFileSync, readFileSync, existsSync } from "fs";
import { run, network } from "hardhat";

export const verify = async (contractAddress: string) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
    });
  } catch (e) {
    console.log(`Error while verifying: ${e}`);
  }
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const storeContractAddress = (name: string, address: string) => {
  const chainId: string = network.config.chainId!.toString();
  let contracts: any;

  const path = "./deploymentAddresses.json";

  if (existsSync(path)) {
    contracts = JSON.parse(readFileSync(path, "utf8"));
    if (!contracts.hasOwnProperty(chainId)) contracts[chainId] = {};
  } else {
    contracts = {};
    contracts[chainId] = {};
  }
  contracts[chainId][name] = address;
  writeFileSync(path, JSON.stringify(contracts), "utf8");
};
