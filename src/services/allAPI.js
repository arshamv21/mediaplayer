

import { serverURL } from "./serverURL"
import {commonAPI} from"./commonAPI"


// api to upload video 

export const uploadAllvideo = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}


// api to get all video

export const getAllVideos = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,)
}

// api to create a videos

export const deleteVideos = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

// add watch history
export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

export const getAllHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

// api to delete history
export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


// api to add category

export const addToCategory = async(body)=>{
    return await commonAPI('POST',`${serverURL}/category`,body)
}

// api to get all category

export const getAllCategory = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")     
}



