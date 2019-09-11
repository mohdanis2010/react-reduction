import {connect} from 'react-redux'
import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import user1Image from 'assets/img/users/100_1.jpg';
import { UserCard } from 'components/Card';
import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const CardPageSearch = props => {
  const { results:{userId, title, body, id, color='', results = {}} = {}} = props;
  return (
    <Page title="Cards" breadcrumbs={[{ name: 'cards', active: true }]}>
       <Row>
        
          <Col  md={6} sm={6} xs={12} className="mb-3">
           <Card
              inverse
              className={`border-0 bg-gradient-theme${
                !!color ? '-' : ''
              }${color}`}
              style={{
                height: 200,
              }}
            >
              <CardBody className="d-flex justify-content-between align-items-center">
              <CardTitle><strong>{title}</strong></CardTitle>
              <CardText><strong>{userId}</strong></CardText>
              </CardBody>
              <CardBody className="d-flex flex-column justify-content-start align-items-start">
                <CardText>{body}</CardText>
              </CardBody>
            </Card>
          </Col>
      </Row>
    </Page>
  );
};

const mapStateToProps = (state) => ({results: state.searchResult})

export default connect(mapStateToProps)(CardPageSearch)
// export default CardPage;
