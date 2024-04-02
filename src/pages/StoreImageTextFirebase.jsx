import React, { useEffect, useState } from 'react'
import { db, storage } from '../services/firebase'
import {v4} from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection,getDocs } from 'firebase/firestore'

const StoreImageTextFirebase = () => {
    const[txt,setTxt]=useState('')
    const[img,setImg]=useState('')
const [data,setData]=useState([])
    const handleUpload =(e)=>{
        console.log(e.target.files[0])
        const imgs = ref(storage,`Imgs/${v4()}`)
        uploadBytes(imgs, e.target.files[0]).then(data=>{
          console.log(data,'imgs')
          getDownloadURL(data.ref).then(val=>{
           setImg(val)
          })
        })
    }
    
    const handleClick=async()=>{
      const valRef=collection(db,'txtData')
      await addDoc(valRef,{txtVal:txt,imgUrl:img})
      alert("added successfully")
    }
    const getData=async()=>{
      const valRef=collection(db,'txtData')
    const dataDb=await getDocs(valRef)
   const allData= dataDb.docs.map(val=>({...val.data(),id:val.id}))
   setData(allData)
    console.log(dataDb)
    }
    useEffect(()=>{getData()},[])
    console.log(data,'datadata')
  return (
    <div className='mt-[12%] ml-[30%]'> 
    <input onChange={(e)=>setTxt(e.target.value)} /><br/>
  <input type="file" onChange={(e)=>handleUpload(e)} /><br/>

<button onClick={handleClick}>nnn</button>{
  data.map(value=> <div><h1 className='text-5xl'>{value.txtVal}</h1><img src={value.imgUrl}  alt="" /></div>)
}
  </div>
    )
}

export default StoreImageTextFirebase