import ReactDOM from 'react-dom';
import React from 'react';// jsx编译需要调用React.createElement，因此React需在作用域内


const animals = ['dog', 'cat', 'fish'];
//  HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，jsx解析规则：遇到HTML标签（以< 开头）就用HTML规则解析，
// 遇到代码块(以{开头)就用JavaScript规则解析。
const createExample2 = () => {
  ReactDOM.render(
    <div>
      {
        animals.map((animal) => (
          <h1>{animal}</h1>))
      }
    </div>
    , document.getElementById('app')
  );
};

export { createExample2 };
