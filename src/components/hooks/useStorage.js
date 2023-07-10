import {useState,useEffect} from 'react'
import {projectStorage} from '../googleSignIn/config'

const UseStorage = (file) => {
    const [progress, setProgress] = useState()
    const [error, setError] = useState()
    const [url, setUrl] = useState()

    useEffect(() =>{
        const storageRef = projectStorage.ref(file.name);
        //asynchronous function
        storageRef.put(file).on('state_changed',(snap)=>{ad
            //percentage of upload
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage)
        })
    },[file])
    

    return ( 
        <></>
     );
}
 
export default UseStorage;