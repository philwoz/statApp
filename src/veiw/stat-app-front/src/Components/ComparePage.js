

export const ComparePage = (props) => {
  return (
    <div>
      <div className="comp-head">
        <img className="comp-img-logo" src={props.item.teams.home.logo} alt="home-team-logo" />
        <img className="comp-img-logo" src={props.item.teams.away.logo} alt="away-team-logo" />
      </div>
      <div className="comp-body">
        <h1 className="compare-game">{props.item.teams.home.name} v {props.item.teams.away.name}</h1>
        <h3 className="comp-sub-head">Probability</h3>
        <h3 className="comp-sub-head">Home - Draw - Away</h3>
        <h3 >{props.item.predictions.percent.home} - {props.item.predictions.percent.draw} - {props.item.predictions.percent.away}</h3>
        <h3 className="comp-sub-head">Goal Expectency</h3>
        <h3 className="comp-stat">{props.item.teams.home.league.goals.for.average.home} - {props.item.teams.away.league.goals.for.average.away}</h3>
        <h2>H2H Strengths</h2>
        <h3 className="comp-sub-head">Attacking</h3>
        <h3 >{props.item.comparison.att.home} - {props.item.comparison.att.away}</h3>
        <h3 className="comp-sub-head">Defensive</h3>
        <h3 >{props.item.comparison.def.home} - {props.item.comparison.def.away}</h3>
        <h3 className="comp-sub-head">Goals </h3>
        <h3 >{props.item.comparison.goals.home} -  {props.item.comparison.goals.away}</h3>
        <h3 className="comp-sub-head">Form</h3>
        <h3 className="comp-stat">{props.item.teams.home.league.form}  -  {props.item.teams.away.league.form}</h3>
        <button className="back-button" onClick={() => { props.clickFunc() }}>Back</button>
      </div>
    </div>
  )
}

