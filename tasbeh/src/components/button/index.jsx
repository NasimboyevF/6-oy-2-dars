import "./main.css"



function Button(text){

  return(

    <>
      <button onClick={text.func} className="button">
        {text.title}
      </button>
    
    
    </>
  )



}


export default Button













