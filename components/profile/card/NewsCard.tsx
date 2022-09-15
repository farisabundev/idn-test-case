import moment from 'moment'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NewsCard = (props: any) => {
  const [dateFormatted, setDateFormatted] = useState("");

  useEffect(() => {
    setDateFormatted(moment(props.data.date).format('DD MMMM YYYY, HH:mm') || "")
  }, [props.data])
  return (
    <div className='news-card'>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <div>{dateFormatted}</div>
          <div>
            <label className='title'>{props.data.title}</label>
          </div>
        </div>

        <div>
          <Image src={props.data.img} width="100%" height="100%" />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <div>Bisnis</div>
        <div>Icon</div>
      </div>
    </div>
  )
}

export default NewsCard;