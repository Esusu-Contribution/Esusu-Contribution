# Esusu

We build a project where people can achieve their goals through their financial aid. Users save stablecoins on our platform for a certain purpose which they will put for a certain number of days or a certain number of amounts  once they reach their target for their savings they can withdraw from the website. This Dapp is built to annex the power of contributions or savings. We have the main system implemented which is the child savings and the target savings. The child savings allows parents to initiate deposits for their children, which children can only withdraw. The other type of saving is a target saving where users set a target for certain purposes maybe to pay their school fees, get a new laptop or pay rent. Users set a target when they reach the target they can withdraw their stablecoin from the dapp.


### The problem it solves
Empowering Users: By allowing users to save stablecoins for specific purposes, the Dapp empowers individuals to take control of their financial goals and actively work towards achieving them. This autonomy can lead to a greater sense of financial responsibility and accomplishment.
Encouraging Saving Habits: The platform encourages users to develop saving habits by providing a structured system for setting saving targets.
Secure and Transparent Platform: The Dapp ensures security and transparency in financial transactions by leveraging blockchain technology. Users can trust that their savings are secure and that the process of reaching their goals is transparent and verifiable.
Child Savings: By offering a feature for parents to initiate deposits for their children, the Dapp encourages early financial education and savings habits in children. It also provides a secure platform for parents to save money for their children's future needs, fostering financial security and responsibility from a young age.


Technologies I used
Next js
Wagmi
Solidity

### Milestone: Launch of MVP (Minimum Viable Product)

Objective: The primary aim of this milestone is to launch the Minimum Viable Product (MVP) of the Dapp, providing users with core functionalities to start saving towards their financial goals.

### Key Deliverables:

Wallet Integration: Integrate wallets to allow users to deposit stablecoins into their accounts on the platform.
Target Savings Feature: Develop the feature that enables users to set specific financial goals (e.g., saving for education, purchasing a laptop) and track their progress towards these goals. 
Child Savings Feature: Implement the functionality for parents to initiate deposits for their children's addresses, with parent-restricted withdrawal permissions. 
Withdrawal System: Build a secure withdrawal system that allows users to withdraw their savings once they reach their target goals or when needed. 
User Interface (UI) Design: Design an intuitive and user-friendly interface that facilitates easy navigation and interaction with the platform. 
Security Measures: Implement robust security measures to protect user data and ensure the safety of financial transactions, leveraging blockchain technology where applicable.
Testing and Bug Fixing: Conduct thorough platform testing to identify and resolve any bugs or issues, ensuring a smooth user experience.



## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Esusu, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```


## This project does not start here, we had to move it to an organization, to kick-start our project journey. 

