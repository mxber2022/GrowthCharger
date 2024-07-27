import "./Fetch.css";
import { useAccount, useConnect, useEnsName } from 'wagmi';

function Fetch () {
    const { address, isConnected } = useAccount();
    const { provider } = useConnect();

    return(
        <>
           
        </> 
    );
}

export default Fetch;