import RelativeButton from "./RelativeButton";
import { useAuth0 } from "@auth0/auth0-react";

const RoleSelection = () => {

    const {loginWithRedirect} = useAuth0();
    return ( 
        <div>
            <div className="App">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-2xl text-white">Welcome to the Healthcare System</h1>
          <h1 className="text-2xl text-white">Select your role:</h1>
          <br />
        </div>


        <div className="flex flex-row justify-center">
          <div className="flex flex-col gap-y-4">
          <RelativeButton label="Patient" onClick={() => {
            loginWithRedirect()
          }}  large />
            <RelativeButton label="Doctor" onClick={() => {}} large disabled secondary />

            <RelativeButton label="Relative" onClick={() => {}}  large disabled secondary/>
            
          </div>
        </div>
      </div>
    </div>
        </div>
     );
}
 
export default RoleSelection;