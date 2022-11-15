module.exports=  ({types: t}) =>{
  return {
    visitor: {
      // ReturnStatement: {
      //     enter(path, state) {
      //       console.log(state.opts, 333)
      //       path.node.argument.name = path.node.argument.name + '*100'
      //       //path.node.argument.name = 100
      //       // const name = path.node.name;
      //       // reverse the name: JavaScript -> tpircSavaJ
      //       // path.node.name = name
      //       //   .split("")
      //       //   .reverse()
      //       //   .join("");
      //   },
      //   exit(path) {
      //     console.log(path.node.argument.name, 4444)
      //   }
        
      // }
      // VariableDeclaration(path) {
      //   console.log(t, 333)
      //   console.log(path.get('kind'), 11)
      // }
      FunctionDeclaration(path) {
        // console.log(t.binaryExpression("**", path.node.left, t.NumericLiteral(2)))
        path.replaceWithSourceString(function add(a, b) { return a + b; });
        // throw path.buildCodeFrameError("Error message here11");
      }
    },
  };
}