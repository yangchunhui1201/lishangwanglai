import React,{Component} from 'react'
import './about.css'
import {NavLink} from 'react-router-dom'
export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
		<div>
			<div id='me'>
				<div id="me-head">我的</div>
			</div>
			<div id="dengl">
				<div id="dengl-span">调用QQ,微信昵称</div>
			</div>
			<NavLink to="/sz">
				<div id="gengd">
					<div id="gengd-span">设置</div>
				</div>
			</NavLink>
			<NavLink to="/fk">
				<div id="gengd">
					<div id="gengd-span">反馈</div>
				</div>
			</NavLink>
			<NavLink to='/bj'>
				<div id="gengd">
					<div id="gengd-span">帮助</div>
				</div>
			</NavLink>
			<NavLink to='/gy'>
				<div id="gengd">
					<div id="gengd-span">关于</div>
				</div>
			</NavLink>
			<NavLink to="/fx">
				<div id="gengd">
					<div id="gengd-span">分享</div>
				</div>
			</NavLink>
		</div>
    )
}
}
