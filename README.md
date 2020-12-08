# HTML Content Slider

HTML Content Slider is a React application created without any third-party libraries. Only core react libraries are used.

## Live DEMO

[Github Pages link](https://mart-j.github.io/html-content-slider/)

## Installation

open a terminal on your desktop and run the command

```bash
git clone https://github.com/mart-j/html-content-slider.git
```
then open terminal in html-content-slider folder or navigate there using same terminal

```bash
cd slider
```
then install necessary packages for you to run the app.

```react
nmp i
```

## Usage

import the list you want to display into the Slider.tsx file

```javascript
// slider/src/component/Slider.tsx
import { myList } from '../../assets/myList';
```
And then assign, right below the Slider function assign sliderList to your list
```javascript
 const sliderList = myList;
```
Inside the div with className 'slider--visible-content-window', you will map trough the slider array like in an example below
```react
<div
  style={{ height: `${boxHeight}px` }}
  className="slider--visible-content-window"
>
  {slider.map((item, i) => {
    return (
      <div ref={sliderElement} key={`${i}`} className={sliderClassnames[i]}>
        <h1>{item.name}</h1>
      </div>
    );
  })}
</div>
```
## Default attributes and elements
Slider must include these default attributes and elements to work properly 

```javascript
// parent div with className "slider--visible-content-window" 
// style attribute in parent div with values: { height: `${boxHeight}px` }
```


```react
// parent div example
<div
  style={{ height: `${boxHeight}px` }}
  className="slider--visible-content-window" 
>
  {/* there you will man trough the slider*/}
</div>

```
```javascript
// index is required when you map trough slider
// should return div width className {sliderClassnames[i]}
// ref attribute with value {sliderElement} is required
```

```react
// children of 'slider--visible-content-window' example
{slider.map((item, i) => {
    return (
      <div ref={sliderElement} key={`${i}`} className={sliderClassnames[i]}>
        <h1>{item.name}</h1>
      </div>
    );
  })}
```
