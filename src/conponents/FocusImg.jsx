import { useEffect, useRef } from "react";

export default function FocusImg({stateFocus, img }) {
  
  const imgRef = useRef(null);

  return (
    <div className={`focus_img ${stateFocus}`}>
      <img src={img} alt="" ref={imgRef} />
    </div>
  )
}