(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(11),s=n.n(o),r=(n(18),n(1)),i=n(2),c=n(4),u=n(3),m=n(5),h=function(e){var t=e.user,n=e.changeActivePage,a=e.onSignout;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"navbar-brand"},"Team-up"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item",onClick:function(){window.location.reload(),e("home")}},l.a.createElement("div",{className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item",onClick:function(){e("posts")}},l.a.createElement("div",{className:"nav-link"},"Posts")))}(n),t?function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item",onClick:function(){return e("change-password")}},l.a.createElement("div",{className:"nav-link"},"Change Password")),l.a.createElement("li",{className:"nav-item",onClick:function(){return t()}},l.a.createElement("div",{className:"nav-link"},"Sign Out")),l.a.createElement("li",{className:"nav-item",onClick:function(){return e("profile")}},l.a.createElement("div",{className:"nav-link"},"Profile")),l.a.createElement("li",{className:"nav-item",onClick:function(){return e("UserInfo")}},l.a.createElement("div",{className:"nav-link"},"Update profile")))}(n,a):function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item",onClick:function(){return e("sign-in")}},l.a.createElement("div",{className:"nav-link"},"Sign In")),l.a.createElement("li",{className:"nav-item",onClick:function(){return e("sign-up")}},l.a.createElement("div",{className:"nav-link"},"Sign Up")))}(n))))};n(19);function d(e){localStorage.setItem("user",JSON.stringify(e))}var p=function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"};function g(){var e=localStorage.getItem("user");return"undefined"===e?null:JSON.parse(e)}var f=n(6),v="https://postgresql-dimensional-94411.herokuapp.com",E="http://localhost:3001",k="localhost"===window.location.hostname?E:v,b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={formData:{email:null,password:null},err:null},n.handleLoginRequest=function(e){var t="".concat(k,"/sign-in");console.log(t),fetch(t,{mode:"cors",credentials:"include",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.status>200?n.setState({err:e.message}):(n.setState({err:null}),d(e),n.props.onSignin())}).catch(function(e){return console.log(e)})},n.handleSubmit=function(e){e.preventDefault(),n.handleLoginRequest(n.state.formData)},n.handleChange=function(e){var t=e.currentTarget,a=Object(f.a)({},n.state.formData);a[t.name]=t.value,n.setState({formData:a})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pt-5 mt-5 container"},l.a.createElement("h1",null,"PLEASE SIGININ"),this.state.err?l.a.createElement("div",{className:"alert alert-danger"}," ",this.state.err," "):"",l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email "),l.a.createElement("input",{name:"email",className:"form-control",onChange:this.handleChange}),l.a.createElement("label",null,"Password"),l.a.createElement("input",{name:"password",className:"form-control",type:"password",onChange:this.handleChange})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={formData:{email:null,password:null,password_confirmation:null},err:null},n.handleLoginRequest=function(e){var t="".concat(k,"/sign-up");fetch(t,{mode:"cors",credentials:"include",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({credentials:e})}).then(function(e){return e.json()}).then(function(e){e.status>200?n.setState({err:e.message}):(console.log(e),d(e),n.props.onSignin())}).catch(function(e){return console.log(e)})},n.handleSubmit=function(e){e.preventDefault(),n.handleLoginRequest(n.state.formData)},n.handleChange=function(e){var t=e.currentTarget,a=Object(f.a)({},n.state.formData);a[t.name]=t.value,n.setState({formData:a})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pt-5 mt-5 container"},l.a.createElement("h1",null,"PLEASE SIGNUP"),this.state.err?l.a.createElement("div",{className:"alert alert-warning"}," ",this.state.err," "):"",l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"email "),l.a.createElement("input",{name:"email",className:"form-control",onChange:this.handleChange}),l.a.createElement("label",null,"Password"),l.a.createElement("input",{name:"password",className:"form-control",type:"password",onChange:this.handleChange}),l.a.createElement("label",null,"Password Confirmation"),l.a.createElement("input",{name:"password_confirmation",className:"form-control",type:"password",onChange:this.handleChange})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={formData:{old:null,new:null},err:null},n.handleLoginRequest=function(e){var t="".concat(k,"/change-password");console.log({email:g().email,passwords:e}),console.log(t),fetch(t,{method:"PATCH",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:g().email,passwords:e})}).then(function(e){return e.json()}).then(function(e){n.props.changeActivePage("home")}).catch(function(e){return console.log(e)})},n.handleSubmit=function(e){e.preventDefault(),n.handleLoginRequest(n.state.formData)},n.handleChange=function(e){var t=e.currentTarget,a=Object(f.a)({},n.state.formData);a[t.name]=t.value,n.setState({formData:a})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pt-5 mt-5"},l.a.createElement("h1",null,"Change Password"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Old Password"),l.a.createElement("input",{name:"old",className:"form-control",type:"password",onChange:this.handleChange}),l.a.createElement("label",null,"new Password "),l.a.createElement("input",{name:"new",type:"password",className:"form-control",onChange:this.handleChange})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={color:""},n.handleDeleteSkillRequest=function(){var e=n.props.skill.userskills.user_id,t=n.props.skill.userskills.skill_id;console.log("deeellllleeeeetttteeee",e);var a="".concat(k,"/user/").concat(e,"/skill");fetch(a,{mode:"cors",credentials:"include",method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify({skill_id:t})}).then(function(e){e.json()}).then(function(t){n.props.gettingUserSkills(e)}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.skill.userskills.level>=75?this.setState({color:"#4CAF50"}):this.props.skill.userskills.level>=50?this.setState({color:"#e8e666"}):this.setState({color:"red"})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"skillContainer"},l.a.createElement("h3",null,this.props.skill.name),l.a.createElement("div",{className:"bar"},l.a.createElement("div",{className:"skills",id:"level",style:{width:this.props.skill.userskills.level+"%",backgroundColor:this.state.color}},this.props.skill.userskills.level+"%")),this.props.edit?l.a.createElement("p",{style:{width:"10%",color:"red",display:"inline",cursor:"pointer"},onClick:this.handleDeleteSkillRequest},"Delete"):""))}}]),t}(a.Component),A=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"skillContainer p-4"},l.a.createElement("h2",null,this.props.project.name),l.a.createElement("p",null,this.props.project.desc),l.a.createElement("a",{className:"pl-4",href:this.props.project.link},"Project link "))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={id:null,name:null,location:null,skills:[],formData:{id:null,level:null},userSkills:[],projects:[{name:"Tic Tac toe ",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only five centuries",link:"https://rawanah995.github.io/project1/gamePage.html"}],contact:{},addSkill:"hide",skillvalue:30,edit:!1,github:null,linkedin:null},n.hideForm=function(){"false"===n.state.addSkill?n.setState({addSkill:"hide"}):n.setState({addSkill:"false"})},n.skillvalue=function(e){var t=e.target.value;n.setState({skillvalue:t})},n.handleChange=function(e){var t=e.currentTarget,a=Object(f.a)({},n.state.formData);a[t.name]=t.value,n.setState({formData:a}),console.log(n.state.formData)},n.handleSubmit=function(e){n.handleAddSkillRequest(n.state.formData)},n.gettingUserSkills=function(e){var t="".concat(k,"/user/").concat(e,"/skills");fetch(t,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log("id",e),console.log("dddddddddddd",t.skill[0]);var a=t.skill;n.setState({userSkills:a})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleAddSkillRequest",value:function(e){var t=this,n="".concat(k,"/user/").concat(this.state.id,"/skill");fetch(n,{mode:"cors",credentials:"include",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({data:e})}).then(function(e){e.json()}).then(function(e){console.log("handleAddSkillRequest: ",e),t.gettingUserSkills(t.state.id)}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){var e=this;if(null!=this.props.id){var t="".concat(k,"/user-info/").concat(this.props.id);fetch(t,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({name:t.user.name}),e.setState({id:t.user.id});var n=t.user.id;console.log(n),e.setState({location:t.user.location}),e.setState({github:t.user.github}),e.setState({linkedin:t.user.linkedin}),e.gettingUserSkills(n)}).catch(function(e){return console.log(e)})}else{var n="".concat(k,"/user-id/").concat(g().email);fetch(n,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({name:t.user.name}),e.setState({id:t.user.id});var n=t.user.id;console.log(n),e.setState({location:t.user.location}),e.setState({linkedin:t.user.linkedin}),e.setState({edit:!0}),e.gettingUserSkills(n)}).catch(function(e){return console.log(e)})}var a="".concat(k,"/skills");fetch(a,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({skills:t.skills})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.skills.map(function(e){return l.a.createElement("option",{value:e.id},e.name)}),n=this.state.userSkills.map(function(t){return l.a.createElement(S,{gettingUserSkills:e.gettingUserSkills,edit:e.state.edit,skill:t})}),a=this.state.projects.map(function(e){return l.a.createElement(A,{project:e})});return l.a.createElement("div",null,l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),l.a.createElement("div",{className:"profile"},l.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEXk5ueutLfo6eqqsLTU19mzuLu3vL/Z3N6+wsXGyszR1NbN0NLJzc/c3+Ds7u/h4+TqYnFJAAACxElEQVR4nO2ayXLDIAxAQZjVdvn/v623pEtikByJzGR4l7YnXiXEJivV6XQ6nU6n0+l0Oh8JgFL5+PmW4f0UglsIcczNJUANwRh9Y/k1+pYOkKdlVP0POzRzgGQfht8i4eYmDqDc0/E3h6mBAvjT8bcwZHGBsTD+qqCFMwFjKQI7olGAoS6gtaRAcQ7csXIGGTP+MheC1FSAgDPQRmptQk2CHRkDQI+vdZRQgIQPgVBJWoKAyPKMq8QbAhWJLoQjCAO7AXItuMO/JhBKcYdbACJRQHtuA0olrJiROw3UELBPhJls4JgNBrIB995ALgVtmA0SOQTdgN/g/TPRkwXsx60HlCPahuE+qIGjKiReAQUTdUmamQ2IhzQtcWAnpoH/vE48ohj2JCz1SEqD4xdQinJYNkni0kQJgswFnnBjkLo8468M3CvyDfyqJFAIh0JAKchMwwPMrYF9T/oDYirIvSLtVM8JRmoW3oD8/FW7VQQ2StOR/7b4jPOnZWMbtTkgPw9DmwDcHf73WIwd2/aa1kaT1eZAu+hV84YbQJ6HNMU4Jj+3H34VWPg6WH9vO3b2wxiDs3rLg7YuxCn53KL1CSr7aTsn/J2Ix18uDqIJAeUnZ02x07VOykGJWAD4WB79V0BCYs8HzPGxyVqMRfCMEsu/T3tU3nGJKxngz5us5UDYkcMBZtzR7MTh5UPz2SaEd3ixGw70B6xHh/hKKl4MwKFwOQzgSQVYcrh2cKD11ioK4YpA5BO49F0C8nqEh3qbZhegKggI0BToT3co8C87uC8t6ODvU1lGAH+tpz/g4hVQNSk0CXZQKxO1wUwC88QlUog/IEqS3sogUd+kiJ8ZXKCaBtEc6PqnEbUP3xioLUviSdDmzUmopoHcy7lA8cETJnmB8hYpX4sLtrg5yG1Kvyi9vGdrGlD8SgdaUBLodDqdznv5BtU9HtL6MEh1AAAAAElFTkSuQmCC"}),l.a.createElement("h1",null,this.state.name),l.a.createElement("h4",null,this.state.location),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"),l.a.createElement("div",{className:"contact profile"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{href:this.state.linkedin},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{href:this.state.github},l.a.createElement("i",{className:"fa fa-github"})))),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Skills"),this.state.edit?l.a.createElement("h2",{style:{cursor:"pointer"},onClick:this.hideForm},"+"):"",n,l.a.createElement("div",{id:this.state.addSkill},l.a.createElement("h2",null,"New skill"),l.a.createElement("div",{className:"skillContainer "},l.a.createElement("select",{name:"id",className:"form-control",onChange:this.handleChange},t),l.a.createElement("div",{className:"slidecontainer"},l.a.createElement("input",{type:"range",min:"1",max:"100",name:"level",value:this.state.formData.level,className:"slider",onChange:this.handleChange}),l.a.createElement("p",null,this.state.formData.level<=50?"Beginner":this.state.formData.level<=75?"Intermediate":"Advanced"),l.a.createElement("button",{class:"btn btn-default",onClick:this.handleSubmit},"Add"))),l.a.createElement("p",null,"Value:",this.state.formData.level))),l.a.createElement("h1",null,"Projects"),a,l.a.createElement("h1",null,"Contact")))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={activePage:"users"},n.profilePage=function(){console.log("clicked"),n.props.userid(n.props.user.id),n.props.changeActivePage("profile")},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=l.a.createElement("div",{className:"skillContainer",onClick:this.profilePage},l.a.createElement("img",{style:{display:"inline ",width:"100px",height:"100px"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEXk5ueutLfo6eqqsLTU19mzuLu3vL/Z3N6+wsXGyszR1NbN0NLJzc/c3+Ds7u/h4+TqYnFJAAACxElEQVR4nO2ayXLDIAxAQZjVdvn/v623pEtikByJzGR4l7YnXiXEJivV6XQ6nU6n0+l0Oh8JgFL5+PmW4f0UglsIcczNJUANwRh9Y/k1+pYOkKdlVP0POzRzgGQfht8i4eYmDqDc0/E3h6mBAvjT8bcwZHGBsTD+qqCFMwFjKQI7olGAoS6gtaRAcQ7csXIGGTP+MheC1FSAgDPQRmptQk2CHRkDQI+vdZRQgIQPgVBJWoKAyPKMq8QbAhWJLoQjCAO7AXItuMO/JhBKcYdbACJRQHtuA0olrJiROw3UELBPhJls4JgNBrIB995ALgVtmA0SOQTdgN/g/TPRkwXsx60HlCPahuE+qIGjKiReAQUTdUmamQ2IhzQtcWAnpoH/vE48ohj2JCz1SEqD4xdQinJYNkni0kQJgswFnnBjkLo8468M3CvyDfyqJFAIh0JAKchMwwPMrYF9T/oDYirIvSLtVM8JRmoW3oD8/FW7VQQ2StOR/7b4jPOnZWMbtTkgPw9DmwDcHf73WIwd2/aa1kaT1eZAu+hV84YbQJ6HNMU4Jj+3H34VWPg6WH9vO3b2wxiDs3rLg7YuxCn53KL1CSr7aTsn/J2Ix18uDqIJAeUnZ02x07VOykGJWAD4WB79V0BCYs8HzPGxyVqMRfCMEsu/T3tU3nGJKxngz5us5UDYkcMBZtzR7MTh5UPz2SaEd3ixGw70B6xHh/hKKl4MwKFwOQzgSQVYcrh2cKD11ioK4YpA5BO49F0C8nqEh3qbZhegKggI0BToT3co8C87uC8t6ODvU1lGAH+tpz/g4hVQNSk0CXZQKxO1wUwC88QlUog/IEqS3sogUd+kiJ8ZXKCaBtEc6PqnEbUP3xioLUviSdDmzUmopoHcy7lA8cETJnmB8hYpX4sLtrg5yG1Kvyi9vGdrGlD8SgdaUBLodDqdznv5BtU9HtL6MEh1AAAAAElFTkSuQmCC"}),l.a.createElement("div",{style:{display:"inline"}},l.a.createElement("h2",{style:{display:"inline"}},this.props.user.name),l.a.createElement("p",{style:{paddingLeft:"100px"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"))),t=l.a.createElement(j,null);return l.a.createElement("div",null,"users"===this.state.activePage?e:t)}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={users:[],activePage:"users",userId:null,skills:[],formData:{id:null,level:null}},n.changeActivePage=function(e){n.setState({activePage:e})},n.handleChange=function(e){var t=e.currentTarget,a=Object(f.a)({},n.state.formData);a[t.name]=t.value,n.setState({formData:a}),console.log(n.state.formData)},n.userid=function(e){console.log("iiiiiiiddddddddd",e),n.state.userId=e,console.log(n.state.userId)},n.find=function(){var e;"Beginner"===n.state.formData.level&&(e=25),"Intermediate"===n.state.formData.level&&(e=50),"Advanced"===n.state.formData.level&&(e=75);var t="".concat(k,"/search/users?id=").concat(n.state.formData.id,"&level=").concat(e);fetch(t,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){n.setState({users:e.users})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="".concat(k,"/skills");fetch(t,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({skills:t.skills})}).catch(function(e){return console.log(e)});var n="".concat(k,"/users");fetch(n,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({users:t.users}),console.log(e.state.users)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.users.map(function(t){return l.a.createElement(O,{user:t,userid:e.userid,changeActivePage:e.changeActivePage})}),n=l.a.createElement("select",{class:"form-control",name:"level",onChange:this.handleChange},l.a.createElement("option",null,"Beginner"),l.a.createElement("option",null,"Intermediate"),l.a.createElement("option",null,"Advanced")),a=this.state.skills.map(function(e){return l.a.createElement("option",{value:e.id},e.name)}),o=l.a.createElement("div",null,l.a.createElement("div",{style:{padding:"30px",width:"100%",background:"#e8e666"}},l.a.createElement("select",{name:"id",class:"form-control",onChange:this.handleChange},a),n,l.a.createElement("button",{class:"btn btn-default",onClick:this.find},"Find")),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,t)));return l.a.createElement("div",null,"users"===this.state.activePage?o:"","profile"===this.state.activePage?l.a.createElement(j,{id:this.state.userId}):"")}}]),t}(a.Component),D=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={formData:{name:null,location:null,github:null,twitter:null,linkedin:null}},n.handleLoginRequest=function(e){var t="".concat(k,"/user-info");console.log(g().email),fetch(t,{mode:"cors",credentials:"include",method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({email:g().email,data:e})}).then(function(e){e.json()}).then(function(e){}).catch(function(e){return console.log(e)}),n.props.changeActivePage("profile")},n.handleSubmit=function(e){e.preventDefault(),n.handleLoginRequest(n.state.formData)},n.handleChange=function(e){var t=e.currentTarget,a=Object(f.a)({},n.state.formData);a[t.name]=t.value,n.setState({formData:a}),console.log(n.state.formData)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"User Info"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h3",null,"Name:"),l.a.createElement("input",{class:"form-control",type:"text",onChange:this.handleChange,name:"name"}),l.a.createElement("h3",null,"Location:"),l.a.createElement("input",{class:"form-control",type:"text",onChange:this.handleChange,name:"location"}),l.a.createElement("h3",null,"Github:"),l.a.createElement("input",{class:"form-control",type:"text",onChange:this.handleChange,name:"github"}),l.a.createElement("h3",null,"Twitter:"),l.a.createElement("input",{class:"form-control",type:"text",onChange:this.handleChange,name:"twitter"}),l.a.createElement("h3",null,"LinkedIn:"),l.a.createElement("input",{class:"form-control",type:"text",onChange:this.handleChange,name:"linkedin"}),l.a.createElement("br",null),l.a.createElement("button",{class:"btn btn-primary",type:"submit"},"Save")))}}]),t}(a.Component),N=n(12),P=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"skillContainer"},l.a.createElement("h2",null,this.props.post.title),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,this.props.post.body),l.a.createElement("p",{style:{color:"gray"}},"has experience with ",this.props.skill[this.props.post.skill_id-1].name),l.a.createElement("p",{style:{color:"blue"}},"contact: ",this.props.post.contact)))}}]),t}(a.Component),T=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={skills:[],posts:[],formData:{title:null,body:null,skill:null,contact:null},skillIdArr:[],user_id:null},n.handleChange=function(e){var t=e.currentTarget,a=Object(f.a)({},n.state.formData);a[t.name]=t.value,n.setState({formData:a}),console.log(n.state.formData)},n.reset=function(){var e=Object(f.a)({},n.state.formData);Object(N.a)("formData"),e=e.map(function(e){return""}),n.setState({formData:e})},n.getPosts=function(){var e="".concat(k,"/posts");fetch(e,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var t=[],a=e.posts;null!=g()?n.state.skillIdArr.map(function(e){a.map(function(a){console.log("kkkkkkkkk",a),a.skill_id==e&&(t.push(a),n.setState({posts:t}))}),console.log(e)}):n.setState({posts:a}),console.log(t),console.log(n.state.posts)}).catch(function(e){return console.log(e)})},n.getUserId=function(){var e="".concat(k,"/user-id/").concat(g().email);fetch(e,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){n.setState({user_id:e.user.id}),n.gettingUserSkills(e.user.id)}).catch(function(e){return console.log(e)})},n.handleSubmit=function(e){e.preventDefault(),n.handleAddSkillRequest(n.state.formData)},n.gettingUserSkills=function(e){var t="".concat(k,"/user/").concat(e,"/skills");fetch(t,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log("id",e);var a=t.skill.map(function(e){return e.id});console.log("dddddddddddd",a),n.setState({skillIdArr:a}),n.getPosts()}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;null!=g()?(console.log("Lllllllllllllhhhhhhhhhhhhhh"),this.getUserId()):this.getPosts();var t="".concat(k,"/skills");fetch(t,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({skills:t.skills})}).catch(function(e){return console.log(e)})}},{key:"handleAddSkillRequest",value:function(e){var t=this,n="".concat(k,"/post");fetch(n,{mode:"cors",credentials:"include",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({data:e})}).then(function(e){e.json()}).then(function(e){console.log("handleAddSkillRequest: ",e),t.getPosts()}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.skills.map(function(e){return l.a.createElement("option",{value:e.id},e.name)}),n=this.state.posts.map(function(t){return l.a.createElement(P,{skill:e.state.skills,post:t})}),a=l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"col-sm-3 postform"},l.a.createElement("h1",null,"New post"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h3",null,"Title"),l.a.createElement("input",{class:"form-control",type:"text",onChange:this.handleChange,name:"title"}),l.a.createElement("h3",null,"Body"),l.a.createElement("textarea",{onChange:this.handleChange,class:"form-control",rows:"5",name:"body",id:"comment"}),l.a.createElement("br",null),l.a.createElement("select",{style:{width:"100% !important"},onChange:this.handleChange,name:"skill",className:"form-control post"},t),l.a.createElement("h3",null,"Contact"),l.a.createElement("input",{class:"form-control",type:"text",onChange:this.handleChange,name:"contact"}),l.a.createElement("br",null),l.a.createElement("button",{class:"btn btn-primary",type:"submit"},"Post"))),l.a.createElement("div",{class:"col-sm-8 post"},n));return l.a.createElement("div",{class:"container"},g()?a:l.a.createElement("div",{class:"col-sm-8"},n))}}]),t}(a.Component),I=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={user:null,activePage:"home"},n.changeActivePage=function(e){n.setState({activePage:e})},n.onSignin=function(){n.setState({user:g()}),n.changeActivePage("profile")},n.onSignout=function(){console.log("sigin out"),n.setState({user:null}),document.cookie="jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",p("jwt"),localStorage.removeItem("user")},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=g();e&&this.setState({user:e})}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.activePage;return l.a.createElement("div",null,l.a.createElement(h,{user:t,changeActivePage:this.changeActivePage,onSignout:this.onSignout}),l.a.createElement("div",null,"home"===n?l.a.createElement(w,null):"","sign-in"===n?l.a.createElement(b,{onSignin:this.onSignin}):"","sign-up"===n?l.a.createElement(y,{onSignin:this.onSignin}):"","change-password"===n?l.a.createElement(C,{changeActivePage:this.changeActivePage}):"","UserInfo"===n?l.a.createElement(D,{changeActivePage:this.changeActivePage}):"","profile"===n?l.a.createElement(j,null):"","posts"===n?l.a.createElement(T,null):""))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(20),n(10),n(21),n(22);s.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.c49289a0.chunk.js.map