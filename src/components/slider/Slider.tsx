import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
// replace line below with your list
import { employeeList } from '../../assets/sliderContent';

const Slider = () => {
  const sliderList = employeeList;

  const [current, setCurrent] = useState(0);
  const [touchSwipeDirection, setTouchSwipeDirection] = useState([0, 0]);
  const [mouseSwipeDirection, setMouseSwipeDirection] = useState([0, 0]);
  const [next, setNext] = useState(1);
  const [prev, setPrev] = useState(sliderList.length - 1);
  const [boxHeight, setBoxHeight] = useState<number>();
  const [activeAnimationRight, setActiveAnimationRight] = useState(false);
  const [activeAnimationLeft, setActiveAnimationLeft] = useState(false);

  const slider = [sliderList[prev], sliderList[current], sliderList[next]];
  const sliderElement = useRef<HTMLDivElement>(null);

  const endAnimationHandler = () => {
    setActiveAnimationRight(false);
    setActiveAnimationLeft(false);
  };

  useEffect(() => {
    if (current === 0) {
      setPrev(sliderList.length - 1);
    } else {
      setPrev(current - 1);
    }
    if (current === sliderList.length - 1) {
      setNext(0);
    } else {
      setNext(current + 1);
    }
    setBoxHeight(sliderElement.current?.offsetHeight);
  }, [activeAnimationRight, activeAnimationLeft]);

  const slideRightHandler = () => {
    if (!activeAnimationLeft) {
      setActiveAnimationRight(true);
    }
  };

  useEffect(() => {
    if (!activeAnimationRight) {
      if (current === sliderList.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  }, [activeAnimationRight]);

  const slideLeftHandler = () => {
    if (!activeAnimationRight) {
      setActiveAnimationLeft(true);
    }
  };

  useEffect(() => {
    if (!activeAnimationLeft) {
      if (current === 0) {
        setCurrent(sliderList.length - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  }, [activeAnimationLeft]);

  useEffect(() => {
    if (touchSwipeDirection[0] < touchSwipeDirection[1]) {
      slideLeftHandler();
    } else if (touchSwipeDirection[0] > touchSwipeDirection[1]) {
      slideRightHandler();
    }
  }, [touchSwipeDirection]);

  useEffect(() => {
    if (mouseSwipeDirection[0] < mouseSwipeDirection[1]) {
      slideLeftHandler();
    } else if (mouseSwipeDirection[0] > mouseSwipeDirection[1]) {
      slideRightHandler();
    }
  }, [mouseSwipeDirection]);

  const sliderClassnames: { [key: number]: string } = {
    0: `slider slider--prev-content ${
      activeAnimationLeft ? 'slider--left-animation' : ''
    }`,
    1: `slider ${
      activeAnimationRight
        ? 'slider--center-move-right'
        : activeAnimationLeft && 'slider--center-move-left'
    }`,
    2: `slider slider--next-content ${
      activeAnimationRight ? 'slider--right-animation' : ''
    }`,
  };

  return (
    <>
      <div
        onMouseDown={(e) => {
          setMouseSwipeDirection([e.clientX]);
        }}
        onMouseUp={(e) => {
          setMouseSwipeDirection([...mouseSwipeDirection, e.clientX]);
        }}
        onTouchStart={(e) => {
          setTouchSwipeDirection([e.changedTouches[0].clientX]);
        }}
        onTouchEnd={(e) => {
          setTouchSwipeDirection([
            ...touchSwipeDirection,
            e.changedTouches[0].clientX,
          ]);
        }}
        className="slider-wrapper"
      >
        <button onClick={slideLeftHandler} className="left-arrow"></button>
        <div
          style={{ height: `${boxHeight}px` }}
          className="slider--visible-content-window"
        >
          {slider.map((item, i) => {
            return (
              <div
                onAnimationEnd={endAnimationHandler}
                ref={sliderElement}
                key={`${i}`}
                className={sliderClassnames[i]}
              >
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    background:
                      'linear-gradient(to right, rgb(240, 5, 5), rgb(239, 239, 11))',
                  }}
                >
                  <h1>{item.name}</h1>
                  <h1>{item.age}</h1>
                  <h1>{item.ocupation}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={slideRightHandler} className="right-arrow"></button>
      </div>
    </>
  );
};
export default Slider;
