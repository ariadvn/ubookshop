export default  props =>
    {

      let book = props.book

      return <f-x
       style={{width:150,minWidth:150, height:310,flex:1,position:"relative"}}>

       <div 
       className={global.styles.hover}
       style={{boxShadow:"(1 1 1 1)",height:290,width:160,backgroundColor:"rgba(208, 212, 189, 0.7)",WebkitBoxShadow:"3px 3px #ADB09D" , borderRadius:20,position:"absolute"}}> 
        <f-cc onClick={() =>{
        props.state.form = "details"
        props.state.book = book
        props.refresh()
        }} style={{marginTop:15}}>
      <img src={book.imageLink} style={{width:150 ,gap:10,minWidth:150,objectFit:"fill", height:200, borderRadius:10}} />
  
      </f-cc>
      {props.state.cart.includes(props.book.title)?<img src="https://cdn.turing.team/research/23/check.webp.png" style={{width:50,height:50,objectFit:"contain",position:"absolute",bottom:3,left:105}}/>:
      <img src="https://cdn.turing.team/research/23/cart.webp" style={{width:50,height:50,objectFit:"contain",position:"absolute",bottom:1,left:110}}/>
      }
      <f-csb>
        <f-13 style={{fontSize:12 ,position:"absolute" , left:10 , top:220}}>{props.book.title}</f-13>
        <c-csb style={{position:"absolute" , left:10 , top:250}}>
        
          <del style={{fontSize:10}}>{props.book.price}</del>
          <f-13 >
            
          {props.book.price as number - 10000} 
          </f-13>
          
        </c-csb>
      </f-csb>
      </div>
      </f-x>
     
      
    }
    