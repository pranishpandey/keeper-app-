import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const[inputText,inputAdd]=useState({
    title:"",
    content:""
  });
  function Add(event){
    const {name,value}=event.target;

    inputAdd(function(prevalue){
      return{
        ...prevalue,
        [name]:value
      }
    })

  }
  function submit(event){
    event.preventDefault()
    props.onAdd(inputText);
    inputAdd({
      title:"",
      content:""
    });
  }
  return (
    <div >
    <Zoom in={true}>
      <form className="create-note" >
        <input onChange={Add} name="title" autoComplete="off" placeholder="Title"  value={inputText.title}/>
        <textarea  onChange={Add} name="content" autoComplete="off" placeholder="Take a note..." rows="3" value={inputText.content} />
         <Fab onClick={submit}><AddIcon /></Fab >
      </form>
     </Zoom>
    </div>
  );
}

export default CreateArea;
