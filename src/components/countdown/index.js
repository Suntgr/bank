function countdowm() {
  
  return (
    {!timing ? (
      <button className="code-btn border-1px" onClick={getCode}>
        获取验证码
      </button>
    ) : (
      <div className="count">{second}s</div>
    )}
  )
}
export default countdowm