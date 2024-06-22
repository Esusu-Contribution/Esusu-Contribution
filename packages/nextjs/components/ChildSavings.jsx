import React, { useState } from "react";
import CustomInput from "../components/ui/CustomeInput"
import { toast } from "react-toastify";
import { useScaffoldWriteContract, useScaffoldReadContract  } from "../hooks/scaffold-eth";
import { useAccount } from "wagmi";
import { parseEther } from "viem";

const ChildSavings = () => {


  const { address } = useAccount()
 

  const [age, setAge] = useState('')
  const [amount, setAmount] = useState('')
  const [gurdianAddress, setGurdianAddress] = useState('')
  const isFormFilled = amount && gurdianAddress

  const { writeContractAsync, isPending } = useScaffoldWriteContract("Esusu")

  
  const handleClear = () => {
    // setAge('')
    setAmount('')
    setGurdianAddress('')
  }

  const { data: dtailapp } = useScaffoldReadContract({
    contractName: "Esusu",
    functionName: "_childSavings",
    args:[
      address
    ]
  })

  console.log(dtailapp, "child")

  const saveAmount = BigInt(Math.round(amount * 1000000))

  const formatToether = parseEther(amount.toString())

  console.log(formatToether, "target ")
  const savepromise = async (e) => {
    e.preventDefault();

    try {
      await writeContractAsync({
        functionName: "depositChildSavingsReg",
        args: [formatToether, gurdianAddress],
        // value: 
      })
      handleClear();
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>


<button className="btn bg-white text-black" onClick={()=>document.getElementById('my_modal_5').showModal()}>Child savings Initiate</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Secure your child future.</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action flex justify-center items-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        
          <div>
            <CustomInput 
            className=" w-[400px] text-black"
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            
            />
          </div>
          <div>
            <CustomInput 
            className=" w-[400px]"
              placeholder="Parent walet address"
              type="text"
              onChange={(e) => setGurdianAddress(e.target.value)}
            />
            
          </div>
          <div>
          </div>
          {/* <div className=" flex justify-center"> */}
          <button className="text-white p-4 bg-blue-500/60 rounded-lg text-lg font-bold w-[100px] mr-3" onClick={savepromise} disabled={isPending} type="submit">Save</button>
          {/* </div> */}
        <button className="text-white p-4 bg-blue-500/60 rounded-lg text-lg font-bold w-[100px] mr-3">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  );
};

export default ChildSavings;
