import React,{Component} from 'react'
import './Lishi.css'
export default class director extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<div class="header">
				<p class="left">fuhao</p>
				
					<span class="ban">待参加</span>
					<span class="ban1">已参加</span>
				
				<p class="right">fuhao</p>
			</div>
			<div class="list">
				<div class="list-top">
					<div class="top-con">
						<p class="top-le">王大锤搬家请客</p>
						<p class="bot-ri1">待参加</p>
					</div>
					<div class="bootton-con">
						<p class="top-le">地点名称</p>
						<p class="bot-rig">
							<span>2016.8.21</span>
						</p>
					</div>
				</div>
				<div class="list-top">
					<div class="top-con">
						<p class="top-le">王大锤搬家请客</p>
						<p class="bot-ri1">已参加</p>
					</div>
					<div class="bootton-con">
						<p class="top-le">地点名称</p>
						<p class="bot-rig">
							<span>2016.6.21</span>
						</p>
					</div>
				</div>
			
			</div>
					
		</div>
    )
}
}
