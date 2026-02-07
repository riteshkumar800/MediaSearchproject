import React from 'react'
import { useDispatch } from 'react-redux'
import {removeCollection, removeToast} from '../redux/features/collectionSlice';

const collectionCaed = () => {

    const dispatch=useDispatch()
    const removeFromCollection=(item)=>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
  return (
    <div>
      
    </div>
  )
}

export default collectionCaed
