import React , { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){
const[userWishes,setWish]=useState([]);

  function addNote(note){
  setWish(function(prevnote){
     return[...prevnote,note];
  });
  }
  function deleteNote(id){
      setWish(function(prevnotes){
        return (prevnotes.filter(function(wish,index){
          return index!==id;
        }));
      })



  }

  return( <div>
    <Header />
    <CreateArea
     onAdd={addNote}
    />
    {userWishes.map(function(wish,index){
      return<Note
      key={index}
      id={index}
      title={wish.title}
       content= {wish.content}
       onSelect={deleteNote}
       />
    })}

    <Footer />
    </div>
  );
}

export default App;
