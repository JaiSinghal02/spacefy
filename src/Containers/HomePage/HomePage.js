import React,{useState,useEffect} from "react";
import './HomePage.css'
import axios from 'axios'

import Header from "../../Components/Header/Header";
import TagBar from "../../Components/TagBar/TagBar";
import PhotoCards from "../../Components/PhotoCards/PhotoCards";
import Loader from "../../Components/UI/Loader/Loader";

export default function HomePage(){
    const [photoData,setPhotoData] = useState([
        {topic:'current-events',photo:[]},
        {topic:'film',photo:[]},
        {topic:'travel',photo:[]},
        {topic:'arts-culture',photo:[]},
        {topic:'spirituality',photo:[]},
        {topic:'history',photo:[]},
        {topic:'animals',photo:[]}])
    const [tagArray,setTagArray] = useState([1,0,0,0,0,0,0])
    const [showLoader,setShowLoader] = useState(true)
    function tagClickHandler(index){
        if(tagArray[index]===1) return
        const newArr = Array(tagArray.length).fill(0)
        newArr[index]=1
        setTagArray(newArr)
    }
    useEffect(()=>{
        const newPhotoData = [...photoData]
        const randomPageNumber = (Math.random()*100+1)
        photoData.forEach((data,ind)=>{
            axios.get(`/search/photos?query=${data.topic}&page=${randomPageNumber}&per_page=9&client_id=6i28vOOVNPkkUw_Qkccq1I3qxbBNMvxdEDjTVhWSC6g`)
            .then((responses)=>{
                const responseData = responses.data.results
                responseData.forEach((response)=>{
                    const url = response.urls.small
                    const id = response.user.id
                    const username = response.user.username
                    const description = response.description
                    const index = newPhotoData.findIndex(el=> {
                        return(el.topic===data.topic)
                    })
                    const topicPhotoData = {url,author:{id,username},description}
                    newPhotoData[index].photo.push(topicPhotoData)
                })
                setPhotoData(newPhotoData)
                if(ind===6) {
                    setShowLoader(false)
                }
            })
            .catch((error)=>{
                console.log(error.response.data)
                setShowLoader(false)
            })
        })
        
    },[])
    return(
        <div className="homepage-container">
            <Header/>
            {!showLoader?<>
            <TagBar clickHandler={tagClickHandler} tagArray={tagArray}/>
            {photoData[6].photo.length?<PhotoCards photoData={photoData} index={tagArray.findIndex(el=>{return el===1})}/>:null}
            </>:
            <Loader/>}
        </div>
    )
}