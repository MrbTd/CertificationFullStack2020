import React, { useState } from 'react'
import axios from "axios";

const urlBase='/api/persons'

const getAll=()=>{
    const promis=axios.get(urlBase)
    return promis.then(result=> result.data)
}


const postAll=newObject=>{
    const request = axios.post(urlBase, newObject)
    return request.then(response => response.data)
}



const putAlone=(id,myObj)=>{
    const promis=axios.put(urlBase+'/'+id,myObj)
    return promis.then(result=>result.data)
}

const deleteAlone=(id)=>{
    const promis=axios.delete(urlBase+'/'+id)
    return promis.then(result=>result.data)
}


export default {
    getAll,
    postAll,
    putAlone,
    deleteAlone
}