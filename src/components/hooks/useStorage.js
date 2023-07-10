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
            let percentage = (snap.bytesTransferred)
        })
    },[file])
    

    return ( 
        <></>
     );
}
 
export default UseStorage;