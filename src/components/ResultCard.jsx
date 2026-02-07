import React from 'react'
import { useDispatch } from 'react-redux'
import {ddCollection, addedToast} from '../redux/features/collectionSlice'

const ResultCard = () => {

    const dispatch = useDispatch()

    const addToCollection=(item)=>{
        dispatch(addToCollection(item))
        dispatch(addedToast())
    }
  return (
    <div>
      
    </div>
  )
}

export default ResultCard
