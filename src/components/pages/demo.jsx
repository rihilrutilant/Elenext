import React,{useState} from 'react'

const Demo = () => {

  const [imgs, setimgs] = useState({file:[null]})

  const fileObj = [];
  const fileArray = [];

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files)
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    setimgs({ file: fileArray })
  }

  // const uploadFiles = (e) => {
  //   e.preventDefault()
  //   console.log(imgs.file)
  // }
  return (
    <>
      <form>
        <div className="form-group multi-preview">
          {(fileArray || []).map(url => (
            <img src={url} alt="..." />
          ))}
        </div>

        <div className="form-group">
          <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple />
        </div>
        {/* <button type="button" className="btn btn-danger btn-block" onClick={uploadFiles}>Upload</button> */}
        {
          imgs.file.map((images)=>{
            return <img  key={images} src={images} alt="..." />
          })
        }
      </form >
    </>
  )
}

export default Demo