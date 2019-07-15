import React, { Component } from "react";
import { Button, Icon, Modal, Form } from "semantic-ui-react";

class NestedModal extends Component {
  constructor(props){
    super(props)
    this.state = { Modal2: false };
  }
  

  openModal2 = () => this.setState({ Modal2: true });
  closeModal2 = () => this.setState({ Modal2: false });

  render() {

    return (
      <Modal
        dimmer="blurring"
        closeOnEscape={true}
        closeOnDimmerClick={false}
        open={this.Modal2}
        onOpen={this.openModal2}
        onClose={this.closeModal2}
        size="tiny"
        trigger={
          <Button primary icon>
            Send <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>Forgot Password</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
          <Button primary icon="redo" content="ส่งอีกครั้ง" />
        </Modal.Content>
        <Modal.Actions>
          <Button
            positive
            icon="check"
            content="เสร็จสิ้น"
            onClick={this.closeModal2}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
var ForgotPSWEmail= "";
const ModalExampleMultiple = () => (
  
  <Modal
    trigger={<a>ลืมรหัสผ่าน?</a>}
    size="tiny"
    closeIcon
    dimmer="blurring"
    closeOnEscape={true}
    closeOnDimmerClick={false}
  >
    <Modal.Header>Forgot Password</Modal.Header>
    {/* <Modal.Content image>
      <div className='image'>
        <Icon name='right arrow' />
      </div>
      <Modal.Description>
        <p>We have more to share with you. Follow us along to modal 2</p>
      </Modal.Description>
    </Modal.Content> */}
    <Modal.Content>
      กรุณาป้อนที่อยู่อีเมลที่คุณใช้ลงชื่อเข้าสู่ระบบ Drugstore Clinic
      แล้วเราจะส่งรหัสผ่านไปท่ี่อีเมลของคุณ
    </Modal.Content>
    <Modal.Content>
      <Form>
        <Form.Input
          required
          icon="user"
          iconPosition="left"
          label="ป้อนที่อยู่อีเมลที่คุณใช้ลงชื่อเข้าสู่ระบบ"
          type="email"
          placeholder="กรุณากรอกอีเมล"
          onChange={(e, { value }) => {
            // console.log("ForgotPSWEmail: ", value);
            ForgotPSWEmail= value;
            console.log("ForgotPSWEmail: ", ForgotPSWEmail);
          }}
        />
      </Form>
    </Modal.Content>

    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
);

export default ModalExampleMultiple;
