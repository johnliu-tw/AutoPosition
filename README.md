# AutoPosition 
[demo](https://youtu.be/kQHGiA7RPJk)
##### This is a library for the frond-end developer to add function: when the window scroll down to the position where users can't see the specific element, the specific element will locate to the specified location (And developer can set the position, sure!)
##### Then, if users doesn't like the position we provide, users can drag the element to where they want.

##### Actually, I have to thanks to [this article](https://ithelp.ithome.com.tw/articles/10187756), which guide me to finish this function and motivate me to package it as a library.
##### Hope you will enjoy it!
*****
### How to use it?
#### step 1 : Including js file (RxJs and my js file)
``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.0.1/Rx.js"></script>
<script  src="js/autoPosition.js"></script>
```
#### step 2 : Call function on anywhere !
```js
    // params:
    // box: the id name of element which you want to locate
    // anchor : the id name of parenet element of the element you want to locate 
    autoPosition("box","anchor")
```
```html
//element structure
<div id="anchor">
  <div class="test" id="box">
  </div>
</div>
```

#### step 3 : Pass attribute to set position
```js
    // Provide four params now, to set the position after user scroll down
    var attribute ={
      top: "20px",
      left: "100px",
      width: "200px",
      height: "200px"
    }
    autoPosition("box","anchor",attribute)
```



 


 