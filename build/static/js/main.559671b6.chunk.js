(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/undraw_Dest.92237f69.svg"},128:function(e,t){},129:function(e,t){},130:function(e,t){},131:function(e,t){},142:function(e,t,a){e.exports=a(267)},267:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(23),o=a.n(l),r=a(46),c=a(52),h=a(47),s=a(2),d=a(6),m=a(7),g=a(8),u=a(9),p=a(4),f=a(10),w=a(78),b=a(87),E=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={userLocation:{lat:32,lng:32},loading:!0,width:0,height:0},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(e){var t=this;navigator.geolocation.getCurrentPosition(function(e){var a=e.coords,n=a.latitude,i=a.longitude;t.setState({userLocation:{lat:n,lng:i},loading:!1})},function(){t.setState({loading:!1,width:t.props.width,height:t.props.height})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.userLocation;e.width,e.height,this.props.google;return t?null:i.a.createElement(b.a,{display:"flex",flex:1},i.a.createElement(w.Map,{google:this.props.google,style:{width:"75%",height:"70%"},initialCenter:a,zoom:15}))}}]),t}(n.Component),y=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyDxVsSGOb4WWkeeS0ngE9kOAsrRT8zGWYU"})(E),j=a(36),x=a(88),v=a(281),C=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).state={height:e.height},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight+"px",width:window.innerWidth})}},{key:"render",value:function(){var e;return e=this.props.home?i.a.createElement(x.a,{appearance:"minimal",onClick:this.logout,iconBefore:"logout"},"Logout"):i.a.createElement(x.a,{appearance:"minimal",is:"a",href:this.props.link,iconBefore:"person"},this.props.button),i.a.createElement(b.a,{elevation:3,display:"flex",padding:16,background:"tint2",margin:20,borderRadius:3},i.a.createElement(b.a,{flex:1,alignItems:"center",display:"flex"},i.a.createElement(v.a,{size:600},"Ejuma")),i.a.createElement(b.a,null,e))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={home:!1,jobs:!1,messages:!1,profile:!1,wallet:!1,settings:!1},a.getActive=function(){switch(a.props.active){case"Home":a.setState({home:!0});break;case"Jobs":a.setState({jobs:!0});break;case"Profile":a.setState({profile:!0});break;case"Messages":a.setState({messages:!0});break;case"Wallet":a.setState({wallet:!0});break;case"Settings":a.setState({settings:!0});break;default:a.setState({home:!0})}},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.home,a=e.jobs,n=e.messages,l=e.profile,o=e.wallet,r=e.settings;return i.a.createElement(b.a,{width:"100%",display:"flex",flexDirection:"column"},i.a.createElement(x.a,{appearance:"minimal",is:"a",href:"/home",isActive:t,height:35,iconBefore:"home"},"Home"),i.a.createElement(x.a,{appearance:"minimal",is:"a",href:"/jobs",isActive:a,height:35,iconBefore:"briefcase"},"Jobs"),i.a.createElement(x.a,{appearance:"minimal",is:"a",href:"/messages",isActive:n,height:35,iconBefore:"chat"},"Messages"),i.a.createElement(x.a,{appearance:"minimal",is:"a",href:"/profile",isActive:l,height:35,iconBefore:"person"},"Profile"),i.a.createElement(x.a,{appearance:"minimal",is:"a",href:"/wallet",isActive:o,height:35,iconBefore:"bank-account"},"Wallet"),i.a.createElement(x.a,{appearance:"minimal",is:"a",href:"/settings",isActive:r,height:35,iconBefore:"cog"},"Settings"))}}]),t}(n.Component),k=a(22),O=a.n(k),D=(n.Component,a(290)),I=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).validateForm=function(){var e=a.state;e.password,e.confirmpassword,e.email,e.name,e.skill,e.phone},a.handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.login=function(){a.setState({loading:!0})},a.state={height:e.height,loading:!1,name:"",skill:"",dob:"",phone:"",password:"",email:"",confirmpassword:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth}),window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){return console.log(this.props),this.state.width<=500?i.a.createElement(b.a,{display:"flex",flexDirection:"column",height:.9*this.state.height,flex:1},i.a.createElement(C,{link:"/signup",button:"Signup"}),i.a.createElement(b.a,{display:"flex",justifyContent:"center",height:.7*this.state.height,maxHeight:this.state.width,padding:16,flexDirection:"column",alignItems:"center",background:"white"},i.a.createElement(b.a,{flexDirection:"column",height:.4*this.state.height,background:"white",padding:16,width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement(D.a,{required:!0,label:"Email",height:35,width:300,marginBottom:20}),i.a.createElement(D.a,{required:!0,type:"password",label:"Password",height:300}),i.a.createElement(x.a,{isLoading:this.state.loading,onClick:this.login},"Login"),i.a.createElement(b.a,{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"})))):i.a.createElement(b.a,{height:.9*this.state.height},i.a.createElement(C,{button:"Signup",link:"/signup"}),i.a.createElement(b.a,{width:this.state.width,justifyContent:"center",display:"flex"}," ",i.a.createElement(v.a,{size:700},"Welcome back")),i.a.createElement(b.a,{display:"flex",justifyContent:"center",height:.7*this.state.height,padding:16,margin:10,alignItems:"center",background:"white"},i.a.createElement(b.a,{flexDirection:"column",height:.7*this.state.height,background:"white",padding:16,display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement(D.a,{required:!0,label:"Email",height:35,width:300,marginBottom:20}),i.a.createElement(D.a,{required:!0,type:"password",label:"Password",height:35,width:300}),i.a.createElement(x.a,{isLoading:this.state.loading,onClick:this.login},"Login"))))}}]),t}(i.a.Component),W=Object(h.e)(Object(r.b)(function(e){return e})(I)),B=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).changeInput=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.validateForm=function(){var e=a.state;e.password,e.confirmpassword,e.email,e.name,e.skill,e.phone},a.handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.Signup=function(){a.setState({loading:!0})},a.state={height:e.height,loading:!1,name:"",skill:"",dob:"",phone:"",password:"",email:"",confirmpassword:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth}),window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){return this.state.width<=500?i.a.createElement(b.a,{display:"flex",flexDirection:"column",height:.9*this.state.height,flex:1},i.a.createElement(C,{link:"/login",button:"Login"}),i.a.createElement(b.a,{width:this.state.width,justifyContent:"center",display:"flex"}," ",i.a.createElement(v.a,{size:700},"Join Us")),i.a.createElement(b.a,{display:"flex",justifyContent:"center",height:.7*this.state.height,maxHeight:this.state.width,padding:16,alignItems:"center",background:"white"},i.a.createElement(b.a,{flexDirection:"column",height:.7*this.state.height,background:"white",padding:16},i.a.createElement(D.a,{required:!0,label:"Full name",height:35,width:300,marginBottom:20,onChange:this.changeInput,name:"name"}),i.a.createElement(D.a,{required:!0,label:"Skill",height:35,width:300,marginBottom:20,onChange:this.changeInput,name:"skill"}),i.a.createElement(D.a,{required:!0,label:"Phone number",type:"tel",height:35,width:300,marginBottom:20,onChange:this.changeInput,name:"phone"}),i.a.createElement(D.a,{required:!0,label:"Email",height:35,onChange:this.changeInput,width:300,name:"email",type:"email",marginBottom:20}),i.a.createElement(D.a,{required:!0,label:"Date of birth",height:35,width:300,onChange:this.changeInput,name:"dob",type:"date",marginBottom:20}),i.a.createElement(D.a,{required:!0,onChange:this.changeInput,type:"password",name:"password",label:"Password",width:300,height:35}),i.a.createElement(D.a,{required:!0,type:"password",name:"confirmpassword",label:"Confirm Password",onChange:this.changeInput,height:35,width:300}),i.a.createElement(b.a,{justifyContent:"center",marginTop:20,display:"flex"},i.a.createElement(x.a,{isLoading:this.state.loading,onClick:this.Signup},"Signup"))))):i.a.createElement(b.a,{height:.9*this.state.height,flex:1},i.a.createElement(C,{button:"Login",link:"/login"}),i.a.createElement(b.a,{width:this.state.width,justifyContent:"center",display:"flex"}," ",i.a.createElement(v.a,{size:700},"Join Us")),i.a.createElement(b.a,{display:"flex",padding:16,margin:10,flexDirection:"column",background:"white"},i.a.createElement(b.a,{flexDirection:"column",background:"white",padding:16,alignItems:"center",justifyContent:"center",height:.6*this.state.height,display:"flex"},i.a.createElement(D.a,{required:!0,label:"Full name",height:35,onChange:this.changeInput,name:"name",width:300,marginBottom:20}),i.a.createElement(D.a,{required:!0,label:"Skill",height:35,onChange:this.changeInput,name:"skill",width:300,marginBottom:20}),i.a.createElement(D.a,{required:!0,label:"Phone number",type:"tel",height:35,onChange:this.changeInput,name:"phone",width:300,marginBottom:20}),i.a.createElement(D.a,{required:!0,label:"Email",height:35,width:300,marginBottom:20}),i.a.createElement(D.a,{required:!0,label:"Date of birth",height:35,width:300,type:"date",marginBottom:20}),i.a.createElement(D.a,{required:!0,label:"Password",height:35,width:300,type:"password",onChange:this.changeInput,name:"password",marginBottom:20}),i.a.createElement(D.a,{required:!0,type:"password",label:"Confirm Password",onChange:this.changeInput,name:"confirmpassword",height:35,width:300,marginBottom:20})),i.a.createElement(b.a,{justifyContent:"center",display:"flex"},i.a.createElement(x.a,{isLoading:this.state.loading,onClick:this.Signup},"Signup"))))}}]),t}(n.Component),J=a(293),T=a(295),z=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).state={height:e.height},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth})}},{key:"render",value:function(){return this.state.width<=500?i.a.createElement(b.a,{height:.9*this.state.height},i.a.createElement(C,{button:"login",link:"/login"}),i.a.createElement(b.a,{elevation:1,display:"flex",height:.8*this.state.height,flexDirection:"column",padding:16,background:"white",margin:10,borderRadius:3},i.a.createElement(b.a,{flex:1,display:"flex",alignItems:"center",justifyContent:"center",margin:10,flexDirection:"column"},i.a.createElement(J.a,{height:"medium",width:"medium",overflow:"hidden"},i.a.createElement(T.a,{fit:"cover",src:a(106)})),i.a.createElement(b.a,{display:"flex",justifyContent:"center"},i.a.createElement(v.a,{size:300},"Find work easily when it matters"))),i.a.createElement(b.a,{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},i.a.createElement(b.a,{flexDirection:"column",margin:20,flex:1,display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement(v.a,{size:500},"Start earning by joining the family now"),i.a.createElement(x.a,{marginTop:30,is:"a",href:"/signup",appearance:"default"},"Signup now"))))):i.a.createElement(b.a,{height:.9*this.state.height},i.a.createElement(C,{button:"login",link:"/login"}),i.a.createElement(b.a,{elevation:1,display:"flex",height:.8*this.state.height,padding:16,background:"white",margin:10,borderRadius:3},i.a.createElement(b.a,{flex:1,alignItems:"center",justifyContent:"center",display:"flex"},i.a.createElement(J.a,{height:"medium",width:"medium",overflow:"hidden"},i.a.createElement(T.a,{fit:"cover",src:a(106)}),i.a.createElement(v.a,{size:400},"Find work easily when it matters"))),i.a.createElement(b.a,{flex:1,alignItems:"center",justifyContent:"center",display:"flex"},i.a.createElement(b.a,{flexDirection:"column",flex:1,display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement(v.a,{size:800},"Start earning by joining the family now"),i.a.createElement(x.a,{marginTop:30,is:"a",href:"/signup",appearance:"default"},"Signup now")))))}}]),t}(n.Component),H=Object(h.e)(Object(r.b)()(z)),M=(a(259),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).state={height:e.height,data:[{kogi:"jdhd",plo:""}]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth})}},{key:"render",value:function(){return this.state.width<=500?i.a.createElement(b.a,{height:.9*this.state.height},i.a.createElement(C,{button:"login",link:"/login"}),i.a.createElement(b.a,{elevation:1,display:"flex",height:.8*this.state.height,flexDirection:"column",padding:16,background:"white",margin:10,borderRadius:3},i.a.createElement(y,null))):i.a.createElement(b.a,{height:this.state.height,width:this.state.width,display:"flex",flexDirection:"row"},i.a.createElement(b.a,{width:.2*this.state.width,style:{position:"sticky",left:0,top:0,bottom:0},alignItems:"start",justifyContent:"center",display:"flex",flexDirection:"column",height:this.state.height,elevation:2},i.a.createElement(S,null)),i.a.createElement(b.a,{width:.8*this.state.width,height:.8*this.state.height,display:"flex",flexDirection:"column"},i.a.createElement(C,{button:"login",link:"/login",home:!0}),i.a.createElement(b.a,{elevation:1,display:"flex",padding:16,background:"white",margin:10,borderRadius:3},i.a.createElement("div",{style:{width:.7*this.state.width,height:.7*this.state.height}},i.a.createElement(y,{jobsData:this.state.data})))))}}]),t}(n.Component)),_=a(292),L=a(285),P=a(71),q=a(286),U=a(289),A=a(288),R=a(291),N=a(296),F=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).changeInput=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.getData=function(){var e=Object(p.a)(a);O.a.get("https://api.myjson.com/bins/6lgoa").then(function(t){e.setState({postedJobs:t.data}),console.log(e.state.postedJobs)}).catch(function(e){})},a.state={height:e.height,postedJobs:[],appliedJobs:[],isShown:!1,jobBudget:0,jobTitle:"",jobDescription:"",jobUrgency:"",jobCategory:"",jobMedia:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth}),this.getData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.width,n=t.postedJobs;t.isShown;return a<=500?i.a.createElement(b.a,{height:.9*this.state.height},i.a.createElement(C,{button:"login",link:"/login"}),i.a.createElement(b.a,{elevation:1,display:"flex",height:.8*this.state.height,flexDirection:"column",padding:16,background:"white",margin:10,borderRadius:3},i.a.createElement(y,null))):i.a.createElement(b.a,{height:this.state.height,width:this.state.width,display:"flex",flexDirection:"row"},i.a.createElement(b.a,{width:.1*this.state.width,alignItems:"start",display:"flex",flexDirection:"column",backgroundColor:"#d32f2f",height:this.state.height,elevation:2},i.a.createElement(S,{active:"Jobs"})),i.a.createElement(b.a,{width:.9*this.state.width,height:.9*this.state.height,display:"flex",flexDirection:"column"},i.a.createElement(C,{button:"login",link:"/login",home:!0}),i.a.createElement(b.a,{elevation:1,display:"flex",flexDirection:"column",padding:10,background:"white",width:.8*this.state.width,height:.9*this.state.height,margin:10,borderRadius:3},i.a.createElement(b.a,{display:"flex",flexDirection:"row",width:"100%",height:"10%",alignItems:"center"},i.a.createElement(j.a,{initialState:{isShown:!1}},function(t){var a=t.state,n=t.setState;return i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{isShown:a.isShown,onCloseComplete:function(){return n({isShown:!1})},containerProps:{display:"flex",flex:"1",flexDirection:"column"}},i.a.createElement(b.a,{zIndex:1,flexShrink:0,elevation:0,backgroundColor:"white"},i.a.createElement(b.a,{padding:16},i.a.createElement(v.a,{size:600},"Post a job"))),i.a.createElement(b.a,{flex:"1",overflowY:"scroll",background:"tint1",padding:16},i.a.createElement(L.a,{backgroundColor:"white",elevation:0,height:.8*e.state.height,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},i.a.createElement(b.a,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",padding:10,width:"100%"},i.a.createElement(P.a,{placeholder:"Job Title",onChange:e.changeInput,name:"jobTitle",value:e.state.jobTitle})),i.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center",padding:10,width:"100%"},i.a.createElement(q.a,{placeholder:"Job Description",name:"jobDescription",onChange:e.changeInput,value:e.state.jobDescription})),i.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center",padding:10,width:"100%"},i.a.createElement(N.a,{value:e.state.jobBudget,color:"light",name:"jobBudget",max:1e3,onChange:e.changeInput})),i.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center",padding:10,width:"100%"},i.a.createElement(j.a,{initialState:{selected:null}},function(t){var a=t.setState,n=t.state;return i.a.createElement(U.a,{title:"Select a job category",options:["Education & Internships","Customer Service & Call Center","Office work & administration","Transport, logistics & traffic","Gardening & Farming","Purchasing & Sales","Social Sector & Care","Gastronomy & Tourism","Construction, Craft & Production"].map(function(e){return{label:e,value:e}}),selected:n.selected,onSelect:function(e){return a({selected:e.value})}},i.a.createElement(x.a,{name:"jobCategory",onChange:e.changeInput},n.selected||"Choose a job category"))})),i.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center",padding:10,width:"100%"},i.a.createElement(A.a,{multiple:!0,width:250,marginBottom:32,onChange:function(e){return console.log(e)}}))))),i.a.createElement(x.a,{appearance:"primary",onClick:function(){return n({isShown:!0})}},"Post a new job"))})),i.a.createElement(b.a,{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around",height:"100%"},i.a.createElement(b.a,{elevation:2,display:"flex",flexDirection:"column",padding:15,width:"40%",height:"100%"},i.a.createElement(b.a,{width:"100%",display:"flex",marginBottom:5,flexDirection:"row",justifyContent:"center",alignItems:"center"},i.a.createElement(v.a,{size:500,marginTop:"default"},"Jobs posted by you")),i.a.createElement(b.a,{className:"content",width:"100%",height:"85%",elevation:1},i.a.createElement(R.a,null,i.a.createElement(R.a.Head,null,i.a.createElement(R.a.SearchHeaderCell,null),i.a.createElement(R.a.TextHeaderCell,null,"Last Activity"),i.a.createElement(R.a.TextHeaderCell,null,"ltv")),i.a.createElement(R.a.VirtualBody,{height:240},n.length?n.map(function(e){return i.a.createElement(R.a.Row,{key:e.id,isSelectable:!0,onSelect:function(){return alert(e.first_name)}},i.a.createElement(R.a.TextCell,null,e.first_name),i.a.createElement(R.a.TextCell,null,e.email),i.a.createElement(R.a.TextCell,{isNumber:!0},e.ip_address))}):i.a.createElement(b.a,null,"No jobs posted"))))),i.a.createElement(b.a,{elevation:2,display:"flex",flexDirection:"column",padding:15,width:"40%",height:"100%"},i.a.createElement(b.a,{width:"100%",display:"flex",marginBottom:5,flexDirection:"row",justifyContent:"center",alignItems:"center"},i.a.createElement(v.a,{size:500,marginTop:"default"},"Jobs you have applied to")),i.a.createElement(b.a,{className:"content",width:"100%",height:"85%",elevation:1},i.a.createElement(R.a,null,i.a.createElement(R.a.Head,null,i.a.createElement(R.a.SearchHeaderCell,null),i.a.createElement(R.a.TextHeaderCell,null,"Last Activity"),i.a.createElement(R.a.TextHeaderCell,null,"ltv")),i.a.createElement(R.a.VirtualBody,{height:240},n.length?n.map(function(e){return i.a.createElement(R.a.Row,{key:e.id,isSelectable:!0,onSelect:function(){return alert(e.first_name)}},i.a.createElement(R.a.TextCell,null,e.first_name),i.a.createElement(R.a.TextCell,null,e.email),i.a.createElement(R.a.TextCell,{isNumber:!0},e.ip_address))}):i.a.createElement(b.a,null,"No jobs posted")))))))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).changeInput=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.getData=function(){var e=Object(p.a)(a);O.a.get("https://api.myjson.com/bins/6lgoa").then(function(t){e.setState({postedJobs:t.data}),console.log(e.state.postedJobs)}).catch(function(e){})},a.state={height:e.height,postedJobs:[],appliedJobs:[],isShown:!1,jobBudget:0,jobTitle:"",jobDescription:"",jobUrgency:"",jobCategory:"",jobMedia:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth}),this.getData()}},{key:"render",value:function(){var e=this.state,t=e.height,a=e.width;return i.a.createElement(b.a,{display:"flex",flexDirection:"row",height:t,width:a},i.a.createElement(b.a,{flexDirection:"column",display:"flex",width:.1*a,height:t},i.a.createElement(S,null)),i.a.createElement(b.a,{elevation:1,flexDirection:"column",display:"flex",width:.9*a,height:t},i.a.createElement(C,null),i.a.createElement(b.a,{height:.8*t,width:"100%",display:"flex",flexDirection:"row",padding:10},i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"}),i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"}))))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).changeInput=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.getData=function(){var e=Object(p.a)(a);O.a.get("https://api.myjson.com/bins/6lgoa").then(function(t){e.setState({postedJobs:t.data}),console.log(e.state.postedJobs)}).catch(function(e){})},a.state={height:e.height,postedJobs:[],appliedJobs:[],isShown:!1,jobBudget:0,jobTitle:"",jobDescription:"",jobUrgency:"",jobCategory:"",jobMedia:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth}),this.getData()}},{key:"render",value:function(){var e=this.state,t=e.height,a=e.width;return i.a.createElement(b.a,{display:"flex",flexDirection:"row",height:t,width:a},i.a.createElement(b.a,{flexDirection:"column",display:"flex",width:.1*a,height:t},i.a.createElement(S,null)),i.a.createElement(b.a,{elevation:1,flexDirection:"column",display:"flex",width:.9*a,height:t},i.a.createElement(C,null),i.a.createElement(b.a,{height:.8*t,width:"100%",display:"flex",flexDirection:"row",padding:10},i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"}),i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"}))))}}]),t}(n.Component),X=a(127),K=a.n(X),Y=function(e){return 100*e},$=function(e){alert("Payment Successful")},Q=function(e){console.log(e),alert("Payment Error")},Z=function(e,t){return function(a){return O.a.post("http://myapidomain.com",{description:t,source:a.id,currency:"EUR",amount:Y(e)}).then($).catch(Q)}},ee=function(e){var t=e.name,a=e.description,n=e.amount;return i.a.createElement(K.a,{name:t,description:a,amount:Y(n),token:Z(n,a),currency:"EUR",stripeKey:"pk_live_Fu5HjslghM5HkeHUGxpwNNUw"})},te=a(282),ae=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).changeInput=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.getData=function(){var e=Object(p.a)(a);O.a.get("https://api.myjson.com/bins/6lgoa").then(function(t){e.setState({postedJobs:t.data}),console.log(e.state.postedJobs)}).catch(function(e){})},a.state={height:e.height,postedJobs:[],appliedJobs:[],isShown:!1,jobBudget:0,jobTitle:"",jobDescription:"",jobUrgency:"",jobCategory:"",jobMedia:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth}),this.getData()}},{key:"render",value:function(){var e=this.state,t=e.height,a=e.width;return i.a.createElement(b.a,{display:"flex",flexDirection:"row",height:t,width:a},i.a.createElement(b.a,{flexDirection:"column",display:"flex",width:.1*a,height:t},i.a.createElement(S,null)),i.a.createElement(b.a,{elevation:1,flexDirection:"column",display:"flex",width:.9*a,height:t},i.a.createElement(C,null),i.a.createElement(b.a,{height:.8*t,width:"100%",display:"flex",flexDirection:"row",padding:10},i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"},i.a.createElement(j.a,{initialState:{isShown:!1}},function(e){var t=e.state,a=e.setState;return i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{isShown:t.isShown,onCloseComplete:function(){return a({isShown:!1})},containerProps:{display:"flex",flex:"1",flexDirection:"column"}},i.a.createElement(b.a,{zIndex:1,flexShrink:0,elevation:0,backgroundColor:"white"},i.a.createElement(b.a,{padding:16},i.a.createElement(v.a,{size:600},"Title"),i.a.createElement(te.a,{size:400},"Optional description or sub title"))),i.a.createElement(b.a,{flex:"1",overflowY:"scroll",background:"tint1",padding:16},i.a.createElement(L.a,{backgroundColor:"white",elevation:0,height:240,display:"flex",alignItems:"center",justifyContent:"center"},i.a.createElement(v.a,null,"Some content"),i.a.createElement(ee,{name:"Ejuma wallet",description:"Add money to your wallet",amount:1})))),i.a.createElement(x.a,{onClick:function(){return a({isShown:!0})}},"Add money to wallet"))})),i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"}))))}}]),t}(n.Component),ne=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).changeInput=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.getData=function(){var e=Object(p.a)(a);O.a.get("https://api.myjson.com/bins/6lgoa").then(function(t){e.setState({postedJobs:t.data}),console.log(e.state.postedJobs)}).catch(function(e){})},a.state={height:e.height,postedJobs:[],appliedJobs:[],isShown:!1,jobBudget:0,jobTitle:"",jobDescription:"",jobUrgency:"",jobCategory:"",jobMedia:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth}),this.getData()}},{key:"render",value:function(){var e=this.state,t=e.height,a=e.width;return i.a.createElement(b.a,{display:"flex",flexDirection:"row",height:t,width:a},i.a.createElement(b.a,{flexDirection:"column",display:"flex",width:.1*a,height:t},i.a.createElement(S,null)),i.a.createElement(b.a,{elevation:1,flexDirection:"column",display:"flex",width:.9*a,height:t},i.a.createElement(C,null),i.a.createElement(b.a,{height:.8*t,width:"100%",display:"flex",flexDirection:"row",padding:10},i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"}),i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"}))))}}]),t}(n.Component),ie=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(u.a)(t).call(this,e))).changeInput=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.getData=function(){var e=Object(p.a)(a);O.a.get("https://api.myjson.com/bins/6lgoa").then(function(t){e.setState({postedJobs:t.data}),console.log(e.state.postedJobs)}).catch(function(e){})},a.state={height:e.height,postedJobs:[],appliedJobs:[],isShown:!1,jobBudget:0,jobTitle:"",jobDescription:"",jobUrgency:"",jobCategory:"",jobMedia:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth}),this.getData()}},{key:"render",value:function(){var e=this.state,t=e.height,a=e.width;return i.a.createElement(b.a,{display:"flex",flexDirection:"row",height:t,width:a},i.a.createElement(b.a,{flexDirection:"column",display:"flex",width:.1*a,height:t},i.a.createElement(S,null)),i.a.createElement(b.a,{elevation:1,flexDirection:"column",display:"flex",width:.9*a,height:t},i.a.createElement(C,null),i.a.createElement(b.a,{height:.8*t,width:"100%",display:"flex",flexDirection:"row",padding:10},i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"}),i.a.createElement(b.a,{height:"100%",width:"45%",display:"flex",flexDirection:"column"}))))}}]),t}(n.Component),le=function(e){var t=e.store;return i.a.createElement(r.a,{store:t},i.a.createElement(c.a,null,i.a.createElement("div",null,i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/login:id?",component:W}),i.a.createElement(h.a,{path:"/signup",component:B}),i.a.createElement(h.a,{path:"/",component:H}),i.a.createElement(h.a,{path:"/home:id?",component:M}),i.a.createElement(h.a,{exact:!0,path:"/messages/:id?",component:V}),i.a.createElement(h.a,{path:"/profile/:id?",component:G}),i.a.createElement(h.a,{path:"/jobs/:id?",component:F}),i.a.createElement(h.a,{exact:!0,path:"/wallet/:id?",component:ae}),i.a.createElement(h.a,{exact:!0,path:"/settings",component:ne}),i.a.createElement(h.a,{exact:!0,path:"/earnings",component:ie})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(39);var re=a(128),ce=a.n(re),he=a(129),se=a.n(he),de=a(130),me=a.n(de),ge=a(131),ue=a.n(ge),pe=Object(oe.b)({user:me.a,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return arguments.length>1&&arguments[1],e},messages:se.a,wallet:ue.a,jobs:ce.a}),fe=Object(oe.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),we=Object(oe.d)(pe,{user:{name:"Kofi"},auth:{loggedIn:!0},jobs:{jobs:[{jobName:"jdjdj"}]},wallet:{balance:78},messages:[{kofi:"hey there"}]},fe);o.a.render(i.a.createElement(le,{store:we}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[142,1,2]]]);
//# sourceMappingURL=main.559671b6.chunk.js.map