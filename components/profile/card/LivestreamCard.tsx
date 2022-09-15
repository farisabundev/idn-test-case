const LivestreamCard = (props: any) => {
  return(
    <div className="row">
      <div className="col-sm-6">
        <div className="livestream-card-wrapper">
          <div className="count">
            total live
          </div>
          
          <div className="title-wrapper">
            <label>Title</label><br />
            <span>Category Livestream</span>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="livestream-card-wrapper">
          <div className="count">
            total live
          </div>
          
          <div className="title-wrapper">
            <label>Title</label><br />
            <span>Category Livestream</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LivestreamCard;