import Node from '../Node.js';

export default class JSXOpeningFragment extends Node {
	transpile(code, transforms) {
		code.overwrite(this.start, this.end, `${this.program.jsx}( React.Fragment, null`);
	}
}
