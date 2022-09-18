import Image from "next/image";

const LivestreamCard = (props: any) => {
  return(
    <div className="col-6">
      <div className="livestream-card-wrapper">
        <div className="thumbnail-wrapper">
          <Image src={props.data.img} width="100%" height="100%" />
        </div>

        <div className="count">
          <span className="fc-white">{props.data.total_live} | </span><label className="fc-red">Live</label>
        </div>

        <div className="thumbnail-wording-wrapper">
          <div className="title-wrapper">
            <label className="fw-bold-900 fc-white">{props.data.title}</label>
            <div>
              <span className="fs-11 fc-white">{props.data.category}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LivestreamCard;