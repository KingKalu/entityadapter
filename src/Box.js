


function Box(props) {
  return (
    <div onClick={()=>props.toggle(props.id)} key={props.id} style={{
        backgroundColor: props.on?'white':'black'
       }}></div>
  )
}

export default Box