import React, { useState, useEffect } from 'react';
import '../assets/BottomSheet.css';

const BottomSheet = ({ isOpen, toggleSheet }) => {
  const comments = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];
  const [position, setPosition] = useState(isOpen ? 0 : window.innerHeight);
  const [isFullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setFullscreen(!isFullscreen);
  };

  useEffect(() => {
    if (isOpen) {
      setFullscreen(false);
      setPosition(0);
    } else {
      setPosition(window.innerHeight);
    }
  }, [isOpen]);

  return (
    <div
      className={`bottom-sheet ${isOpen ? 'open' : ''} ${
        isFullscreen ? 'fullscreen' : ''
      } container-fluid container-bg text-center`}
      style={{ transform: `translateY(${position}px)` }}
    >
      <div className="handle"></div>
      {isOpen && (
        <div
          className="close-button"
          onClick={isFullscreen ? toggleSheet : toggleFullscreen}
        >
          <span>
            {isFullscreen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </svg>
            )}
          </span>
        </div>
      )}
      <div className="container comments px-5">
        {
          comments.map(comment => (
            <>
              <div style={{display: 'flex', marginTop: '50px'}}>
                <div className="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
                </div>
                <div className="">
                  {comment.text}
                </div>
              </div>
              <hr />
            </>
          ))
        }
      </div>
    </div>
  );
};

export default BottomSheet;
