import styled from "styled-components";
import React, { useRef, useState } from "react";

const ZoomImage = (props) => {
  const { src } = props;
  const [isMoving, setIsMoving] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const imgRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      setZoom(zoom * 1.1);
    } else {
      setZoom(zoom / 1.1);
    }
  };

  const handleMouseDown = (e) => {
    setIsMoving(true);
  };

  const handleMouseUp = (e) => {
    setIsMoving(false);
  };

  const handleMouseMove = (e) => {
    if (isMoving) {
      setPosition({ x: position.x + e.movementX, y: position.y + e.movementY });
    }
  };

  return (
    <Image
      ref={imgRef}
      src={src}
      className="zoom-image"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
};

export default ZoomImage;

const Image = styled.img`
  /* user-drag: none; */
  user-select: none;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;
