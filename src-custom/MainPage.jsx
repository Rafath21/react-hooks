import React from 'react';
class MainPage extends React.Component{
    state={
        userData=[]
    }
    componentDidMount(){
        fetch("./users.json").then((res)=>{
            return res.json();
        }).then((json)=>{
            this.setState({userData:json})
        })
    }
    render(){
        return(
        <ul>
        {this.state.userData.map((el)=>{
            return <li>{el.name}</li>
        })}
        </ul>
        )
    }
}
export default MainPage;