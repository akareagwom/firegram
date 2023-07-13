import {useState,useEffect} from 'react'
import {projectStorage,projectFirestore} from '../googleSignIn/config'
import { ref,uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { collection } from 'firebase/firestore';


const UseStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
         // const projectStorage = getStorage();
    
         const storageRef = ref(projectStorage,`images/${file.name}`);
         const collectionRef = collection(projectFirestore, 'images')
         const uploadTask = uploadBytesResumable(storageRef, file);
 
         uploadTask.on('state_changed', 
   (snapshot) => {
     const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     setProgress(percentage)
     console.log('Upload is ' + percentage + '% done');
     switch (snapshot.state) {
       case 'paused':
         console.log('Upload is paused');
         break;
       case 'running':
         console.log('Upload is running');
         break;
     }
   }, 
   (err) => {
     setError(err);
     // Handle unsuccessful uploads
   }, 
   async() => {
    const url = await getDownloadURL(uploadTask.snapshot);
    collectionRef({url});
    setUrl(url);
   }
 );
 
    },[file])

   

        // asynchronous function
        // storageRef.put(file).on('state_changed',(snap)=>{
            // percentage of upload
        //     let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
        //     setProgress(percentage)
        // }, (err) =>{
        //     setError(err);
        // }, async()=>{
        //     const url = await storageRef.getDownloadURL();
        //     setUrl(url);
        // })
    
    
    return {progress,error,url}

}
 
export default UseStorage;