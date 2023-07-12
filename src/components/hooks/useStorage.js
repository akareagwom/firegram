import {useState,useEffect} from 'react'
import {projectStorage} from '../googleSignIn/config'
import { ref,uploadBytesResumable, getDownloadURL} from 'firebase/storage'


const UseStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
         // const projectStorage = getStorage();
    
         const storageRef = ref(projectStorage,`images/${file.name}`);
         const uploadTask = uploadBytesResumable(storageRef, file);
 
         uploadTask.on('state_changed', 
   (snapshot) => {
     // Observe state change events such as progress, pause, and resume
     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
     // Handle successful uploads on complete
     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
     const url= await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
       console.log('File available at', downloadURL);
    //    setUrl(url)
     });
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