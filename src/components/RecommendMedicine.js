import React, { Component } from "react";
import { Card, Icon, Image, Modal } from "semantic-ui-react";
import { observer } from "mobx-react";

const RecommendMedicine = observer(
  class RecommendMedicine extends Component {
    constructor(props) {
      super(props);
      // console.log(this.props.store)
      // console.log(this.props.store.RecommendMedicine)

      // console.log(this.props.store.RecommendMedicine.length)
      this.state = {
        card: this.props.store.RecommendMedicine
      };
      console.log(this.state.card);
    }

    createCard = () => {
      let ncard = [];
      for (let i = 0; i < this.state.card.length; i++) {
        ncard.push(
          <Modal
            key={i}
            trigger={
              <div className="card-cover">
                <Card
                  image={this.state.card[i].image}
                  header={this.state.card[i].header}
                  meta={this.state.card[i].categories}
                  description={this.state.card[i].description}
                  extra={
                    <p className='price'>
                      <Icon name="bitcoin" />
                      {this.state.card[i].price} บาท
                    </p>
                  }
                />
              </div>
            }
            closeIcon
          >
            <Modal.Header>
              รายละเอียดยา {this.state.card[i].header}
            </Modal.Header>
            <Modal.Content image scrolling>
              <Image size="medium" src={this.state.card[i].image} />

              <Modal.Description>
                <h2>ชื่อสินค้า: {this.state.card[i].header}</h2>
                <p>
                  <b>ประเภท: </b>
                  {this.state.card[i].categories}
                </p>
                <p>
                  <b>คุณสมบัติ: </b>
                  {this.state.card[i].description}
                </p>
                <p>
                  <b>คำแนะนำ: </b>
                  {this.state.card[i].recommend}
                </p>
                <ul>
                  <b>คำเตือน: </b>
                  {this.state.card[i].caution.map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ul>
                <ul>
                  <b>ผลข้างเคียง: </b>
                  {this.state.card[i].sideEffect.map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ul>
                {/* <p>ผลข้างเคียง: {this.state.card[i].sideEffect}</p> */}
                <p>
                  <b>ขนาดบรรจุ: </b>
                  {this.state.card[i].contain}
                </p>
              </Modal.Description>
            </Modal.Content>
            {/* <Modal.Actions>
              <Button color="red">ปิด</Button>
            </Modal.Actions> */}
          </Modal>
        );
      }
      return ncard;
    };

    render() {
      return (
        <div className="RecommendMedicinePage">
          <Image src="http://www.savedrug.co.th/imagespage/ourproduct/medicines_icon_49_49.png" />
          <h1>แนะนำยา</h1>
          {this.createCard()}
        </div>
      );
    }
  }
);
export default RecommendMedicine;
