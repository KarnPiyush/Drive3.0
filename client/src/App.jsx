import React, { useEffect, useState } from 'react';
import FileUpload from './components/FileUpload';
import Display from './components/Display';
import Modal from './components/Modal';
import Upload from "../artifacts/contracts/Upload.sol/Upload.json";  //feteching the abi
import { ethers } from 'hardhat';



const App = () => {
  const [account , setAccount] = useState("");
  const [Contract,setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen,setModalOpen] = useState(false);

  useEffect(()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async()=>{
      if(provider){
        await provider.send("eth_requestAccounts",[]);
        const signer =provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

        const contract = new ethers.Contract(
          contractAddress,Upload.abi ,signer
        );
        console.log(contract)
        setContract(contract);
        setProvider(provider);
      }else{
        console.error("Metamask is not installed.");
      }
    };
    provider && loadProvider();

  },[])


  return (
    <div>
      <h1 style={{color:white}}>Gdrive 3.0</h1>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
    </div>
  )
}

export default App