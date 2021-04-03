import React from "react";


class Person extends React.Component {

  state ={  
   Person : { 
       fullName : 'ismail',
       bio : 'student',
       pro : 'sfbdb', 
   },
   show:true,
   date:""
    }
    componentDidMount(){
        setInterval(()=>{
      let newdate= new Date()
      newdate=newdate.getHours()+ ':' + newdate.getMinutes()
          this.setState({date:newdate})
      },1000)
  }
  
 
  handleClick=()=>{this.setState({name: "ismail"  })}
  render(){

    return(
      <>


      </>
    )
  }

  }

  export default Person