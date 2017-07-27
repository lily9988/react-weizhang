import React, { Component } from 'react';


class Addcar extends Component{
	render(){
		return(
			<div className="addcar" onClick={this.toaddcar}>+ 添加爱车</div>
		);
	}
	toaddcar(){
		window.location.href="https://sale.qccr.com/appstatic/carillegal/brand.shtml";
	}
}
export default Addcar;