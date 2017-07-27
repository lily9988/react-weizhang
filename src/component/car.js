import React, { Component } from 'react';
import './common.css';
import './car.css';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
import reqwest from 'reqwest';
class Car extends Component{
	
   //初始化
  	constructor(props){
  		var info = [{"uid":108886206,"limited":1,"carId":5167227,"upkeepUrl":"https://sale.qccr.com/appstatic/chezhuka/src/view/editCarMaintainInfo.shtml?carid=9342&usercarid=5167227","isDefault":1,"carName":"奔驰 C180L","plateNumber":"粤E578964","limitTip":"外地车限行","extAttr":[],"certified":0,"remindingDescLink":"http://sale.qccr.com/washCar/limitline.shtml?u=D6FC0FE0126CC955632B05D99BCA2222&cityId=22&carId=5167227","limitInfoDesc":"杭州市限行4/6","carCategoryName":"奔驰 C180L","carPic":"https://static.qichechaoren.com/upload/logo/BenChi.png","limitRemindingDesc":"开启后自动提醒（20:00~21:00）","limitEnable":1,"modelId":9342,"limitReminding":0,"carNo":"粤E578964","categoryList":[{"carCategoryType":1,"carCategoryName":"奔驰","carCategoryId":1061},{"carCategoryType":2,"carCategoryName":"C180L","carCategoryId":9342}],"carCategoryId":9342,"cateIds":"1061,9342"}];
  		super(props);
  		var url='https://m.qccr.com/car/getCarList?cityId=22';
  		this.state={info:info};
    }
 	
    componentDidMount() {
    	var _this = this;
    	// var url='./carlist.json';
    	var url='https://m.qccr.com/car/getCarList?cityId=22';
    	const str = querystring.encode({ code: 'utf-8', q: 111, }); //转成 code=utf-8&q=111;
    	// jsonp(`https://suggest.taobao.com/sug?${str}`)  字符串拼接
  //   	jsonp(`${url}&${str}`)
  //   	.then(function(response) {
		//   return response.json();
		// }).then(function(data) {
		//   console.log(data);
		// }).catch(function(e) {
		//   alert("Oops, error");
		// });


	  //   fetch(url+'&'+str,{
	  //   	 mode: "cors" ,
	  //   	//credentials: 'include',   //指定cookie连同HTTP请求一起发出。
	  //   }).then(function(response) {
			//   return response.text();
			// }).then(function(data) {
			//   console.log(data);
			// }).catch(function(e) {
			//   alert("Oops, error");
			// });
			// 
		

		reqwest({
		    url: url,
		  	type: 'jsonp',
		    success: function (resp) {
		  		console.log(resp);
		  		_this.setState({info:resp.info});		
		  		// alert(_this.state)  		
		    }
		})
	}
	handleOpen(res){
		// console.log(this.refs.carid.getAttribute('data-carid') )
		console.log(res.target.getAttribute('data-carid'))
		var carid =  res.target.getAttribute('data-carid');
		window.location.href='https://sale.qccr.com/appstatic/carillegal/index.shtml?carid='+carid;
	}
	handedit(res){
		var carid =  res.target.getAttribute('data-carid');
		window.location.href='https://sale.qccr.com/appstatic/carillegal/carinfo.shtml?myusercar='+carid+'&_type=1';
	}
	render(){
		return (
			<ul className="switch_cont">
				{
					this.state.info.map(function(info){
						return(
							<li data-carid={info.carId} key={info.carId} ref="carid"> 
								<span className="logo" style={{backgroundImage:'url('+info.carPic+')'}}></span>
								<span className="car_name" data-carid={info.carId} onClick={this.handleOpen} >{info.carNo}<em className="name_sec" data-carid={info.carId}>{info.carName}</em></span>
								<span className="car_edit" data-carid={info.carId} onClick={this.handedit}>编辑</span>
							</li>
						);
					}.bind(this))
				}
			</ul>
		);
	}
	
}
export default Car;
//Request对象实例的mode属性，用来设置是否跨域，合法的值有以下三种：same-origin、no-cors（默认值）、cors。当设置为same-origin时，只能向同域的URL发出请求，否则会报错。
//如果mode属性为no-cors，就与默认的浏览器行为没有不同，类似script标签加载外部脚本文件、img标签加载外部图片。如果mode属性为cors，就可以向部署了CORS机制的服务器，发出跨域请求。
//{ mode: "same-origin" }