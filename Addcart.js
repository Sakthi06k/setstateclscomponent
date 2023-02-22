import React from "react";
// import './card.css';
class Addcart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            price:0
        };
    }
    changeAdd=(val)=>{
        //alert(val)
        this.setState({price:this.state.price+val});
    }
    changeDel=(val)=>{
        if(this.state.price==0){
            alert("no");
            return false
        }
        this.setState({price:this.state.price-val});
    }
    render(){
        return(
            <>
            <div class="card">
                <h1>Dirymilk Rs.80, Kitkat Rs.120, Galaxcy Rs.60</h1>
                <img src="https://www.bigbasket.com/media/uploads/p/l/40172777-2_4-cadbury-dairy-milk-silk-oreo-red-velvet.jpg" height={"200px"} width={"200px"}/>
                <button onClick={()=>{this.changeAdd(80)}} class="but1">Add to cart</button>
            <button onClick={()=>{this.changeDel(80)}} class="but2">Delete from cart</button>
            <img src="https://th.bing.com/th/id/OIP.-y3J9MO2Jtj8lLO9MJG-BgHaFj?pid=ImgDet&rs=1" height={"200px"} width={"200px"}/>
                <button onClick={()=>{this.changeAdd(120)}} class="but1">Add to cart</button>
            <button onClick={()=>{this.changeDel(120)}} class="but2">Delete from cart</button>
            <img src="https://assets.iceland.co.uk/i/iceland/galaxy_smooth_milk_chocolate_bar_110g_53492_T5.jpg?$pdpzoom$" height={"200px"} width={"200px"}/>
                <button onClick={()=>{this.changeAdd(60)}} class="but1">Add to cart</button>
            <button onClick={()=>{this.changeDel(60)}} class="but2">Delete from cart</button>
            <h1>${this.state.price}</h1>

            </div>
        </>
        );
    }
}
export default Addcart;