---
title: "Custom Image Viewer in React js"
date: "15-07-2022"
tags: "react.js, next.js, react-modal, bootstrap"
description: "In this tutorial I try to explain how can you make a custom image viewer in react js using react modal and react useState hook."
cover_image: "/images/posts/custom-image-viewer.png"
---

In this is tutorial I will explain how can we build a simple custom image viewer.  
[Tutorial code at github](https://github.com/umershabir/custom-image-viewer)

The library I am going to use in this tutorial is react modal, so let's start.
I am assuming this that all the boiler plates to get start with react you have done.

## Step 1:

First I am going to install react modal with this command.

> npm install react-modal

## Step 2:

Next I am going to render a clickable component, It could be anything a text or a image which can be click and view the image or a link having multiple images to view, In my case there are multiple images to view I will render a simple clickable text to view images Which I will pass as a prop.

```javascript
export default function ImageViewer() {
  return <span className="image-view">View File</span>;
}
```

## Step 3:

Next I am going to make this line clickable by applying onClick function and link it to the react modal.

```javascript
import React from 'react'
import Modal from 'react-modal'
export default function ImageViewer() {
const openModal => () {
    setIsOpen(true)
  }
  const closeModal => () {
    setIsOpen(false)
  }
  return (
  <span className='image-view' onClick={openModal}>
        View File
      </span>
  )
  }
```

## Step 4:

Next step is all about the view how you want to open and view your react modal, in my case it will look like this.  
![post-image](/images/posts/imageview.png)  
you can check this JSX in github,  
[Tutorial code at github](https://github.com/umershabir/custom-image-viewer)

## Step 5:

let's render our images, In my case Images are coming from an API that's why I passed that in a prop, but for the sake of this tutorial I will statically pass an array of some random images.

```javascript
const images = [
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
];
```

and map these Images.

```javascript
images.map((item, index) => (
<img
  onClick={() => setImgItem(index)}
  key={index}
  className={index === im'active-image' : ''}
  src={item}
  alt=''
  style={{
    width: '100px',
    height: '125px',
    margin: '5px',
    cursor: 'pointer',
  }}
  />
```

I styled active image with active class the logic is if image index is equal to ImageItem number add active class by onClicking function which set the image index to image item so the condition equates true and active class added.  
and pass the index number of image to the main hero image with array index to get the acutal image.

```javascript
<img
  src={images[imgItem]}
  alt=""
  style={{ width: "400px", height: "550px" }}
  className="rounded"
/>
```

## Step 6: Forward and Reverse the images

To view forward image and reverse I just creadet two simple buttons with fontawesome icons and functioned them onclick to just step one array index number or step back array index number check out this.

##### Step Back

```javascript
<button
  className="btn"
  style={{ color: "#666666" }}
  onClick={() => setImgItem(imgItem === 0 ? imgItem : imgItem - 1)}
>
  <i className="fas fa-chevron-circle-left" style={{ fontSize: 30 }}></i>
</button>
```

##### Step Forward

```javascript
<button
  className='btn'
  style={{ color: '#666666' }}
  onClick={() =>
   setImgItem(imgItem === recordLength ? imgItem : imgItem + 1)
  }
 >
```

### Summary

In this article I wanted to help others to view images in react with just simple and low coding technique, I always prefer to code little functionalites rather than using libraries for every little things. I hope you enjoyed it and it helped you.  
thanks for reading!

[Tutorial code at github](https://github.com/umershabir/custom-image-viewer)
