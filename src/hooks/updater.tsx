import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { solaUtils } from "../services/blockchain";
import { SET_LATEST_BLOCK_NUMBER } from "../redux/types/application";
import useDebounce from "./useDebounce";


const delayTime = 15; //seconds

export default function AppUpdater() {
    
    const dispatch = useDispatch();
    const provider = solaUtils.getConnectionProvider()

    const [state, setState] = useState({ blockNumber: 0})

    const blockNumberCallback = useCallback((blockNumber: number) => {

        setState((s) => {
            console.log("BlockNumber:", Math.max(blockNumber, s.blockNumber));
             return {  blockNumber: Math.max(blockNumber, s.blockNumber) }
        })

    },[setState])


    const debouncedState = useDebounce(state, delayTime*1000)

    useEffect(() => {
       
        if (!provider) return undefined
       
        provider.getSlot().then(blockNumberCallback).catch((error) => console.error('Failed to get block number', error))
       
        // const subId = provider.onSlotUpdate((data)=>{    
        //  if(data.type !== "completed") return;
        //     blockNumberCallback(data.slot)
        // })  
        // provider.removeSlotUpdateListener(subId)
       
    }, [dispatch, blockNumberCallback, provider, debouncedState])

  


    useEffect(() => {
        if (debouncedState.blockNumber === 0) return;
        console.log("BlockNumber latest:", debouncedState.blockNumber);
        dispatch({ type: SET_LATEST_BLOCK_NUMBER, data:debouncedState.blockNumber })
        
        // dispatch(setLastBlockNumber(debouncedState.blockNumber))
    }, [provider, dispatch, debouncedState.blockNumber])




    return null
}
