import {useState,useEffect} from 'react'
import {projectStorage} from '../googleSignIn/config'

const UseStorage = (file) => {
    const [progress, setProgress] = useState()
    const [error, setError] = useState()
    const [url, setUrl] = useState()

    useEffect(() =>{
        const storageRef = projectStorage.ref(file.name);
        //asynchronous function
        storageRef.put(file).on('state_changed',(snap)=>{
            //percentage of upload
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage)
        }, (err) =>{
            setError(err);
        }, async()=>{
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    },[file])
    
    return {progress,error,url}

}
 
export default UseStorage;