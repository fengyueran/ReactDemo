import ReactDOM from 'react-dom';
import React from 'react';// jsx编译需要调用React.createElement，因此React需在作用域内


const namesArr = [<h1>jay</h1>,<h1>xh</h1>,<h1>snow</h1>];// eslint-disableline
const foods = ["meat", "fish", "apple"];
/*
  jsx允许插入变量，如果变量是一个数组则会展开这个数组的所有成员。
 */
const createExample3 = () => {
  ReactDOM.render(
    <div>
      { namesArr }
      {foods.map((food) =>
        <span key={food}>food</span>)} 
    </div>
    , document.getElementById('app')
  );
};

export { createExample3 };
