import { useMoralis } from "react-moralis"

export function ChangeUsername() {
  const {setUserData, isUserUpdating, userError, user} = useMoralis();
  const setUserName = () =>{
    const userName = prompt(`Enter your new username {current: ${user?.getUsername()}}`);
    if(!userName) return;
    setUserData({userName});
    console.log(userName);
  }
  return (
    <div>
      <button 
      onClick={setUserName}
      disabled={isUserUpdating}
      className=" hover:underline border-5 rounded-md border-white p-3 text-white">
        Change Username
      </button>
    </div>
  )
}

export default ChangeUsername
