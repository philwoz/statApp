import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export const ResultCard = (props) => {
  return (
    <div className="res-card" onClick={() => props.clickFunction(props.item.fixture.id)}>
      <Container >
        <Row>
          <Col >

            <div className="res-card-home">
              {/* <img className="res-card-img" src={props.item.teams.home.logo} alt="home-team-logo" /> */}

              <p className="res-card-game">{props.item.teams.home.name}</p>
            </div>
          </Col>
          <Col >
            <div className="res-score-cont">
              <p className="res-card-score">{props.item.goals.home}</p>
              <p className="res-card-score">{props.item.goals.away}</p>
            </div>
          </Col>
          <Col >
            <div className="res-card-away">
              <p className="res-card-game">{props.item.teams.away.name}</p>
              {/* <img className="res-card-img" src={props.item.teams.away.logo} alt="away-team-logo" /> */}
            </div>

          </Col>
        </Row>
      </Container >




    </div >
  )

}