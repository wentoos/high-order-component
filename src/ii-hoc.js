import React from 'react';
// let getDisplayName = (callee)=>{
//     var _callee = callee.toString().replace(/[\s\?]*/g, ""),
//         comb = _callee.length >= 50 ? 50 : _callee.length;
//     _callee = _callee.substring(0, comb);
//     var name = _callee.match(/^function([^\(]+?)\(/);
//     if (name && name[1]) {
//         return name[1];
//     }
//     var caller = callee.caller,
//         _caller = caller.toString().replace(/[\s\?]*/g, "");
//     var last = _caller.indexOf(_callee),
//         str = _caller.substring(last - 30, last);
//     name = str.match(/var([^\=]+?)\=/);
//     if (name && name[1]) {
//         return name[1];
//     }
//     return "anonymous"
// };
function getDisplayName(WrappedComponent) {
    console.info(WrappedComponent)
    return WrappedComponent.displayName ||
            WrappedComponent.name ||
            'Component'
}
const hijackRenderHoc = config => WrappedComponent => class add extends WrappedComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;
    render() {
        const { style = {} } = config;
        const elementsTree = super.render();
        console.log(elementsTree, 'elementsTree');
        if (config.type === 'add-style') {
            return <div style={{ ...style }}>
                {elementsTree}
            </div>;
        }
        return elementsTree;
    }
};

export default hijackRenderHoc;
