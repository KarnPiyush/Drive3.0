# Access-Controlled Data Upload Smart Contract

This Solidity smart contract, named "Upload," is designed to facilitate the upload and access control of data for Ethereum addresses. It allows users to upload data URLs and specify who has access to view their data. The contract includes the following features:

## Contract Overview

### Data Upload and Storage

- Users can upload data URLs to the contract using the `add` function, associating the data with their Ethereum address.
- Data URLs are stored in a mapping, allowing users to retrieve their uploaded data.

### Access Control

- The contract provides access control functionality, allowing users to grant or revoke access to their data.
- Users can grant access to other Ethereum addresses using the `allow` function.
- Access can be revoked using the `disAllow` function.
- Access control is managed through various mappings, ensuring secure and controlled data sharing.

### Data Retrieval

- Users can retrieve their own data using the `display` function, which returns the data URLs associated with their address.
- Access to another user's data is subject to access control. To access another user's data, the requesting user must have been granted access by the data owner. This is enforced in the `display` function.

### Access List

- Users can check their access list to see who has been granted access to their data. The `shareAccess` function returns a list of addresses with their corresponding access status.

## Getting Started

1. Deploy the "Upload" contract to the Ethereum blockchain.

2. Users can interact with the contract using their Ethereum addresses.

3. To upload data, use the `add` function, providing the data URL as an argument.

4. Grant or revoke access to other Ethereum addresses using the `allow` and `disAllow` functions.

5. Retrieve your own data using the `display` function. To access another user's data, ensure that the data owner has granted you access.

6. Check your access list using the `shareAccess` function to view who has access to your data.

## Access Control

Access control is a critical aspect of this contract. Users must be cautious when granting access to their data, as it cannot be accessed without permission. Ensure that you only grant access to trusted addresses.

## Note

- This contract is a basic example and should be further customized and secured for production use.
- Gas costs for transactions may apply when interacting with the contract on the Ethereum network.

Feel free to modify and expand upon this contract to meet your specific data sharing and access control needs.
