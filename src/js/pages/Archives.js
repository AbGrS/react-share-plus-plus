import React from "react";

import { Link } from "react-router";
import Settingsss from "./Settings";
import Featured from "./Featured";

export default class Archieved extends React.Component {

	// if(this.params.article==='article-1'){
		
	// }
 render() {
 	if(this.props.params.article==='article-1'){
		return (
			<div>
			      <Link to="archieve/article-1" class="btn btn-success">table1</Link>
			      <Link to="archieve/article-2" class="btn btn-primary">table2</Link>
			      <Link to="archieve/article-3" class="btn btn-success">table3</Link>
			      
					<Settingsss/>
      		</div>);
	}
	else if(this.props.params.article==='article-2'){
		return (
			<div>
			      <Link to="archieve/article-1" class="btn btn-success">table1</Link>
			      <Link to="archieve/article-2" class="btn btn-primary">table2</Link>
			      <Link to="archieve/article-3" class="btn btn-success">table3</Link>
			      
					<Featured/>
      		</div>);
	}
  }
}