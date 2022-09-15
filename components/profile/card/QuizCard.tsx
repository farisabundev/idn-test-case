const QuizCard = (props: any) => {
  return(
    <div className="row">
      <div className="col-sm-6">
        <div className="quiz-card-wrapper">
          <div>Image</div>

          <div>Category</div>
          
          <div>
            <label>Quiz Title</label><br />
            <span>Total Plays</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizCard;