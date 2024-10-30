import { useState } from "react"

export const Qrcode = () => {
    const [img,setImg] = useState("");
    const [loading,setLoading]=useState(false);
    const [qrData,setQrdata] = useState("https://www.linkedin.com/in/rajkaran7/")
   async function generate(){
    setLoading(true);
    try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
        setImg(url);
    }
    catch(error){
        console.error("Error Generating QR Code",error);
    }finally{
        setLoading(false);
    }
    }
    function download(){
        fetch(img)
        .then((Response)=>Response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="linkedin.png"
            document.body.appendChild(link);
            link.click();
            document.removeChild(link);
        })
        .catch((error)=>{
            console.error("error in Downloading QR Code",error)
        });
    }
    return (
    <div className="app-container">
        <h1>Link to Qr Code </h1>
        {loading && <p>Please Wait ...</p>}
        {img && <img src={img} alt=""  className="QR-image" />}
        <div className="dataInput">
            <label htmlFor="datainput"className="input-label">
                Data For QR Code :
            </label>
            <input type="text" id="dataInput" value={qrData} onChange={(e)=>setQrdata(e.target.value)}/>
            <button className="generate" disabled={loading} onClick={generate} >Generate QR Code</button>
            <button className="download" onClick={download}>Download QR Code</button>
        </div>
        <footer>
        <p>Designed by <a href="">Rkgit-1530</a></p>
        </footer>
        
    </div>
  )
}
