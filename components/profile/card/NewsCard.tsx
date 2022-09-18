import moment from 'moment'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import shareIc from "../../../public/static/image/share.svg";

const NewsCard = (props: any) => {
  const [dateFormatted, setDateFormatted] = useState("");

  useEffect(() => {
    setDateFormatted(moment(props.data.date).format('DD MMMM YYYY, HH:mm') || "")
  }, [props.data])
  return (
    <div className='col-12 news-card'>
      <div className="d-flex justify-content-between">
        <div className='title-section'>
          <div>
            <label className='fs-11 fc-grey'>{dateFormatted}</label>
          </div>
          <div>
            <label className='fs-16 fw-bold-900'>{props.data.title}</label>
          </div>
        </div>

        <div className='thumbnail-wrapper'>
          <Image src={props.data.img} width="100%" height="100%" />
        </div>
      </div>

      <div className="mt-1 d-flex align-items-center justify-content-between">
        <div className='fs-12 fc-grey'>
          <label className='text-capitalize'>{props.data.category}</label>
        </div>
        <div>
          <button className='share-btn'>
            <Image src={shareIc} height={15} width={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsCard;