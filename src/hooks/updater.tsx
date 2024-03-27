import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { solaUtils } from "../services/blockchain";
import { SET_LATEST_BLOCK_NUMBER } from "../redux/types/application";
import useDebounce from "./useDebounce";


const delayTime = 15; //seconds

export default function AppUpdater() {
    const setTimeOut = (time: number)=>{
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(true);
            }, time);
        });

   }

    const dispatch = useDispatch();
    const provider = solaUtils.getConnectionProvider()

    
    const [state, setState] = useState({ blockNumber: 0})


    const blockNumberCallback = useCallback((blockNumber: number) => {

        
      
            console.log("BlockNumber:", blockNumber);
            setState((s) => {
            
                if(typeof s.blockNumber !== 'number') return {  blockNumber: Math.max(blockNumber, s.blockNumber) }
                return s
            })
    
       
    },[setState])

    useEffect(() => {
       
        if (!provider) return undefined
        // setState({ blockNumber: 0 })
       
        provider.getSlot().then(blockNumberCallback).catch((error) => console.error('Failed to get block number', error))
        const subId = provider.onSlotUpdate((data)=>{    
         if(data.type !== "completed") return;
            blockNumberCallback(data.slot)
        })

        return () => {
            console.log("Unsubscribing from block number update", subId);
            
            provider.removeSlotUpdateListener(subId)
        } 
      
       
    }, [dispatch, blockNumberCallback, state.blockNumber, provider])

    const debouncedState = useDebounce(state, 1000)


    useEffect(() => {
        if (debouncedState.blockNumber === 0) return;
        console.log("BlockNumber latest:", debouncedState.blockNumber);
        dispatch({ type: SET_LATEST_BLOCK_NUMBER, data:debouncedState.blockNumber })
        
        // dispatch(setLastBlockNumber(debouncedState.blockNumber))
    }, [provider, dispatch, debouncedState.blockNumber])




    return null
}
