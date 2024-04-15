import { useEffect, useRef } from "react";

const FocusImg = ({stateFocus, setStateFocus, setStateMain, img, resize }) => {
  const handleClickCloseFocus = () => {
    setStateFocus("focus_img-isClosed");
    setStateMain("");
  }
  
  const btnCloseRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (stateFocus === "focus_img-isOpened") {
      if (resize >= 585) {
        btnCloseRef.current.style.top = `-${(imgRef.current.height / 2) + 8}px`
        btnCloseRef.current.style.right = '-3rem'
      } else {
        btnCloseRef.current.style.top = `-${(imgRef.current.height / 2) - 8}px`
        btnCloseRef.current.style.right = '0.8rem'
      }
    }
  }, [stateFocus, resize]);
  
  useEffect(() => {    
  }, [resize])

  return (
    <div className={`focus_img ${stateFocus}`} onClick={handleClickCloseFocus}>
      <img src={img} alt="" ref={imgRef} />
      <button ref={btnCloseRef} className="btn_close" onClick={handleClickCloseFocus}></button>
    </div>
  )
}
export default FocusImg;