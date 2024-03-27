import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { solaUtils } from "../services/blockchain";
import { SET_LATEST_BLOCK_NUMBER } from "../redux/types/application";
import useDebounce from "./useDebounce";


const delayTime = 15; //seconds

export default function AppUpdater() {

    const dispatch = useDispatch();
    const provider = solaUtils.getProvider()

    
    const [state, setState] = useState({ blockNumber: 0})

    const blockNumberCallback = useCallback((blockNumber: number) => {
        setState({ blockNumber })
    },[ setState])

    useEffect(() => {
        if (!provider) return undefined

        setState({ blockNumber: 0 })
        provider.connection.getSlot().then(blockNumberCallback).catch((error) => console.error('Failed to get block number', error))
        provider.connection.onSlotUpdate((data)=>{
            blockNumberCallback(data.slot)
        })
    }, [dispatch, blockNumberCallback])

    const debouncedState = useDebounce(state, delayTime*1000)

    useEffect(() => {
        if (!debouncedState.blockNumber) return
        console.log("BlockNumber latest:", debouncedState.blockNumber);
        dispatch({ type: SET_LATEST_BLOCK_NUMBER, data:debouncedState.blockNumber })
        // dispatch(setLastBlockNumber(debouncedState.blockNumber))
    }, [provider, dispatch, debouncedState.blockNumber])




    return null
}
