(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),r=n.n(s),u=n(2),c=n(3),i=n(5),l=n(4),h=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).handleInput1=function(t){a.setState({name:t.target.value})},a.handleInput2=function(t){a.setState({Domain:t.target.value})},a.handlePush=function(){var t=a.state.arr;t.push({name:a.state.name,Domain:a.state.Domain}),a.setState({arr:t,name:"",Domain:""})},a.handlePop=function(){var t=a.state.arr;t.pop(),a.setState({arr:t})},a.handleDelete=function(t,e){var n=a.state.arr;n.splice(e,1),a.setState({arr:n})},a.state={arr:[{name:" Sambit ",Domain:"React JS"},{name:"Ansukun",Domain:"Node JS"},{name:"Ansumun",Domain:"Angular JS"}]},a}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Staff List"}),this.state.arr.map((function(e,n){return Object(a.jsxs)("div",{children:[e.name," Working on ",e.Domain,Object(a.jsx)("button",{onClick:function(e){t.handleDelete(e,n)},children:"Delete"})]})})),Object(a.jsx)("input",{placeholder:"Enter The name",value:this.state.name,onChange:this.handleInput1}),Object(a.jsx)("input",{placeholder:"Enter the Domain",value:this.state.Domain,onChange:this.handleInput2}),Object(a.jsx)("button",{disabled:""===this.state.name,onClick:this.handlePush,children:"PUSH"}),Object(a.jsx)("button",{onClick:this.handlePop,children:"POP"})]})}}]),n}(r.a.Component),o=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).handleNum1=function(t){a.setState({num1:t.target.value})},a.handleNum2=function(t){a.setState({num2:t.target.value})},a.handleResult=function(){a.setState({sum:parseInt(a.state.num1)+parseInt(a.state.num2)},(function(){a.setState({average:(parseInt(a.state.num1)+parseInt(a.state.num2))/2,num1:"",num2:""})}))},a.state={num1:"",num2:"",sum:0,average:0},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("input",{placeholder:"enter a number",value:this.state.num1,onChange:this.handleNum1}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{placeholder:"enter a number",value:this.state.num2,onChange:this.handleNum2}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:this.handleResult,children:"RESULT"}),Object(a.jsx)("br",{}),"SUM=",this.state.sum,Object(a.jsx)("br",{}),"AVERAGE=",this.state.average]})}}]),n}(r.a.Component),j=(s.Component,n(7)),b=n.n(j),d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,u=e.getTTFB;n(t),a(t),s(t),r(t),u(t)}))},m=(n(13),function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).handleSum=function(t){a.setState({sum:parseInt(a.props.num1)+parseInt(a.props.num2),num1:"",num2:""}),alert(parseInt(a.props.num1)+parseInt(a.props.num2))},a.handleSub=function(){a.setState({sub:parseInt(a.props.num1)-parseInt(a.props.num2),num1:"",num2:""}),alert(parseInt(a.props.num1)-parseInt(a.props.num2))},a.handleMul=function(){a.setState({mult:parseInt(a.props.num1)*parseInt(a.props.num2),num1:"",num2:""}),alert(parseInt(a.props.num1)*parseInt(a.props.num2))},a.handleDiv=function(){a.setState({div:parseInt(a.props.num1)/parseInt(a.props.num2),num1:"",num2:""}),alert(parseInt(a.props.num1)/parseInt(a.props.num2))},a.state={sum:0,div:0,sub:0,mult:0},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn",onClick:this.handleSum,children:"+"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn",onClick:this.handleSub,children:"-"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn",onClick:this.handleMul,children:"X"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn",onClick:this.handleDiv,children:"/"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("center",{children:Object(a.jsxs)("table",{border:"3",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"SUMMATION"}),Object(a.jsx)("th",{children:"SUBSTRACTION"}),Object(a.jsx)("th",{children:"MULTIPLICATION"}),Object(a.jsx)("th",{children:"DIVISION"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:this.state.sum}),Object(a.jsx)("td",{children:this.state.sub}),Object(a.jsx)("td",{children:this.state.mult}),Object(a.jsx)("td",{children:this.state.div})]})]})})]})}}]),n}(r.a.Component)),p=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={loggedIn:!1},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[!0===this.state.loggedIn?"You are Logged in":"You are Logged out",Object(a.jsx)("br",{}),!0===this.state.loggedIn&&"you are Logged in"]})}}]),n}(r.a.Component),O=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).handleInput=function(t){a.setState({taskInput:t.target.value})},a.pushTask=function(){var t=a.state.tasksArr;t.push(a.state.taskInput),a.setState({tasksArr:t,taskInput:""})},a.handleComplete=function(t,e){var n=a.state.tasksArr;n.splice(e,1),a.setState({tasksArr:n})},a.state={tasksArr:["React js"],taskInput:""},a}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Arrays Assignment!!!"}),Object(a.jsx)("input",{placeholder:"Enter The Task",value:this.state.taskInput,onChange:this.handleInput}),Object(a.jsx)("button",{disabled:""===this.state.taskInput,onClick:this.pushTask,children:"Add Task"}),0===this.state.tasksArr.length?Object(a.jsx)("h2",{children:"You have No tasks to do"}):Object(a.jsx)("h2",{children:"Tasks to do"}),Object(a.jsx)("div",{style:{backgroundColor:"#f2f2f2",padding:20,borderRadius:10,width:200},children:Object(a.jsx)("ul",{children:this.state.tasksArr.map((function(e,n){return Object(a.jsxs)("li",{children:[e,Object(a.jsx)("button",{onClick:function(e){t.handleComplete(e,n)},children:"Completed"})]})}))})})]})}}]),n}(r.a.Component),x=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).handleNum1=function(t){a.setState({num1:t.target.value})},a.handleNum2=function(t){a.setState({num2:t.target.value})},a.handleClc=function(){a.setState({num1:"",num2:""})},a.state={num1:"",num2:""},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"MY CALCULATOR"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"input",placeholder:"enter a number",value:this.state.num1,onChange:this.handleNum1}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"input2",placeholder:"enter a number",value:this.state.num2,onChange:this.handleNum2}),Object(a.jsx)("br",{}),Object(a.jsx)(m,{num1:this.state.num1,num2:this.state.num2}),Object(a.jsx)("button",{className:"btn",onClick:this.handleClc,children:"CLEAR"}),Object(a.jsx)("br",{})]})}}]),n}(r.a.Component);b.a.render(Object(a.jsxs)(r.a.StrictMode,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(o,{}),Object(a.jsx)(h,{}),Object(a.jsx)(O,{}),Object(a.jsx)(x,{})]}),document.getElementById("root")),d()}},[[14,1,2]]]);
//# sourceMappingURL=main.fea191df.chunk.js.map