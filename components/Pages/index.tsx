import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import css from "./css.module.css"
import WindowFloat from '../Libs/WindowFloat';
import Test from "./Test"
import { cardClasses } from '@mui/material';





export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "Books Section"
  let totalprice = 0;
  
  state.cart = Array.from(new Set(state.cart))
  for(let cart of state.cart) 
    { let book = props.books.find(b=> b.title == cart);
       if(book)
         { totalprice += book.price} 
      
      }
      

  return (
    
    <div style={{ direction: "ltr",gap:10, minHeight: "11vh", }}>
      <br-x />
 
      {state.form == "details"?<WindowFloat onclose={()=>{
        delete state.form
        refresh()
       
      }}>
        <br-x/><br-x/>
      <f-13 style={{fontSize:18}}>Title : {state.book.title}</f-13>
      <br-x/>
      <f-13 style={{fontSize:18}}>Author : {state.book.author}</f-13>
      <br-x/>
      <f-13 style={{fontSize:18}}>Language : {state.book.language}</f-13>
      <br-x/>
      <f-13 style={{fontSize:18}}>Country : {state.book.country}</f-13>
      <br-x/>
      <f-13 style={{fontSize:18}}>Year : {state.book.year}</f-13>
      <br-x/>
      <f-13 style={{fontSize:18}}>Pages : {state.book.pages}</f-13>
      <br-x/>
      {state.cart.includes(state.book.title)?<g-b style={{ backgroundColor:"rgba(208, 212, 189)",borderRadius:30}} onClick={()=>{state.cart.splice(state.book.title , 1)
         refresh()
         state.form = null
         }}>
      Remove This Item</g-b>:<g-b style={{ backgroundColor:"rgba(208, 212, 189)",borderRadius:30}} onClick={()=>{

        state.cart.push(state.book.title)
        refresh()
        state.form = null
       }}>

       Add To Cart
       <img src="https://cdn.turing.team/research/23/cart.webp" style={{width:30,height:30,objectFit:"contain"}}/>
      </g-b>}
      

      
      </WindowFloat>:null}
      <Window title="Shopping Cart" style={{ height: 150, margin: 10, width: "calc(100% - 10px)",backgroundImage:'url(https://cdn.turing.team/research/23/bookpattern.webp)' }}>
    
       <f-cse style={{marginTop:35}}>
       
        <f-cc style={{borderRadius: 20,width:200 , height:50 ,backgroundColor:"rgba(208, 212, 189, 0.7)",WebkitBoxShadow:"3px 3px #ADB09D"}}>
        <img src="https://cdn.turing.team/research/23/dollar.webp" style={{width:50,height:50,bottom:5,left:110}}/>Total Price : "{totalprice}"
          
        </f-cc>
       <f-cc style={{borderRadius: 20,width:200 , height:50 ,backgroundColor:"rgba(208, 212, 189, 0.7)",WebkitBoxShadow:"3px 3px #ADB09D"}}>
        <img src="https://cdn.turing.team/research/23/books.webp" style={{width:50,height:50,bottom:5,left:110}}/>
        "{state.cart.length}" Books are in your cart
       </f-cc>
       </f-cse>
      </Window>
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(100% - 10px)" }}>
        <w-cse style={{gap:10  , backgroundImage:'url(https://cdn.turing.team/research/23/bookpattern.webp)'}}>
        
          {props.books.map(book=>{
            return <Test 
            book ={book}
            state = {state}
            refresh={refresh}
            
          />})}
             
            
            


        
        </w-cse>
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let books = await global.db.collection("books").find({}).toArray()
  for(let book of books)
    {
      book.imageLink = "https://cdn.turing.team/research/ex/books/"+ book.imageLink
    }
    console.log(books)
    
  return {
    props: {
      data: global.QSON.stringify({
        session,
        books
        // nlangs,
      })
    },
  }
}