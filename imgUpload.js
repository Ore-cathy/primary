async function imgUpload(){
  const selectedImg = document.querySelector("#img-upload-form").files[0];
  const fd = new FormData();
  fd.append("img", selectedImg, selectedImg.name);
  try{
    fetch('http://localhost:3000/api/img/upload', {
      method: 'POST',
      body: fd
    }).then((res)=>{
      if(res.ok)
        alert('successful request')
        res.json().then(json => console.log(json)); 
    })
  }catch(err){
    throw(err);
  }
}
