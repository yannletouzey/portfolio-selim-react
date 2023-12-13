const FocusImg = ({stateFocus, setStateFocus, setStateMain, img }) => {
    const handleClickCloseFocus = () => {
        setStateFocus("focus_img-isClosed");
        setStateMain("");
    }
    return (
        <div className={`focus_img ${stateFocus}`} onClick={handleClickCloseFocus}>
            <img src={img} alt="" />
        </div>
    )
}
export default FocusImg;