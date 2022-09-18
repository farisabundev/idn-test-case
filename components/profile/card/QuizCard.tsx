import Image from "next/image";

const QuizCard = (props: any) => {
  return(
    <div className="col-6">
      <div className="quiz-card mb-5">
        <div className="thumbnail-wrapper">
          <img src={props.data.img} alt={props.data.title} />
        </div>

        <div className="category">{props.data.category}</div>
        
        <div>
          <label className="title">{props.data.title}</label>
          <div className="fs-12 fc-grey">
            <b>{props.data.total_play}</b>
            <span>&nbsp; plays</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizCard;