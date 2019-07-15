import React, { Component } from "react";
import { Responsive, Segment } from "semantic-ui-react";
import { Grid, Image, Header, List, Button } from "semantic-ui-react";
//import ContactUsSmall from "./ContactUs/ContactUsSmall";
import ContactUsLarge from "./ContactUs/ContactUsLarge";
import { observer } from "mobx-react";
import store from "./stores/TodoStore";

import TopButton from "./TopButton";

const TodoView = observer(
  class ContactUs extends Component {
    constructor(props) {
      super(props);
      console.log(store);
    }
    render() {
      return (
        <div className="ContactUsPage">
        <Header as="h1">ติดต่อเรา</Header>
        <div className="pageContent">
          <Grid columns={1} relaxed="very">
            <Grid.Column>
              <Header as="h2">คณะวิศวกรรมศาสตร์ มหาวิทยาลัยมหิดล</Header>
              <List>
                {/* <List.Item>
                  <List.Header>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยมหิดล</List.Header>
                </List.Item> */}
                <List.Item>
                  25/25 ถ.พุทธมณฑล สาย 4 ต. ศาลายา อ.พุทธมณฑล จ.นครปฐม 73170
                </List.Item>

                <List.Item>หมายเลขโทรศัพท์ 0-2889-2138 </List.Item>
                <List.Item>โทรสาร 0-2441-9731</List.Item>
                {/* <List.Item as="a" href="https://www.eg.mahidol.ac.th">
                  เว็บไซต์ : https://www.eg.mahidol.ac.th
                </List.Item> */}
                <List.Item as="span">
                  เว็บไซต์ : <a href="https://www.eg.mahidol.ac.th">https://www.eg.mahidol.ac.th</a>
                </List.Item>
              </List>

              <Header as="h2">
                เบอร์ภายในของงานต่าง ๆ ในคณะวิศวกรรมศาสตร์
              </Header>
              <List bulleted>
                <List.Item>ภาควิชาวิศวกรรมคอมพิวเตอร์ 6251-6252</List.Item>
                <List.Item>ภาควิชาวิศวกรรมเคมี 6101-6102</List.Item>
                <List.Item>ภาควิชาวิศวกรรมเครื่องกล 6401-6402</List.Item>
                <List.Item>ภาควิชาวิศวกรรมชีวการแพทย์ 6351-6352</List.Item>
                <List.Item>ภาควิชาวิศวกรรมไฟฟ้า 6501-6502</List.Item>
                <List.Item>
                  ภาควิชาวิศวกรรมโยธาและสิ่งแวดล้อม 6396-6397
                </List.Item>
                <List.Item>ภาควิชาอุตสาหการ 6201-6202</List.Item>
                <List.Item>
                  กลุ่มสาขาวิชาเทคโนโลยีการจัดการระบบสารสนเทศ 6301-6303
                </List.Item>
                <List.Item>
                  กลุ่มสาขาวิชาโลจิสติกส์และระบบขนส่งทางราง 6619
                </List.Item>

                <List.Item>
                  สำนักงานคณบดี
                  <List.List>
                    <List.Item>งานทรัพยากรบุคคล 6070-6076</List.Item>
                    <List.Item>งานคลังและพัสดุ 6014-6018, 6021-6025</List.Item>
                    <List.Item>งานกายภาพและสิ่งแวดล้อม 6037-6038</List.Item>
                    <List.Item>งานเทคโนโลยีสารสนทศ 6083-6084</List.Item>
                    <List.Item>งานบริหารทั่วไป 6039-6042</List.Item>
                  </List.List>
                </List.Item>

                <List.Item>
                  สำนักงานจัดการกลยุทธ์
                  <List.List>
                    <List.Item>งานยุทธศาสตร์และงบประมาณ 6060-6063</List.Item>
                    <List.Item>งานพัฒนาคุณภาพ 6090-6093</List.Item>
                    <List.Item>
                      งานสื่อสารองค์กรและวิเทศสัมพันธ์ 6044-6047, 6088
                    </List.Item>
                  </List.List>
                </List.Item>

                <List.Item>
                  สำนักงานการศึกษา 6028-6030, 6033-6034
                  <List.List>
                    <List.Item>งานบริหารการศึกษาและนานาชาติ</List.Item>
                    <List.Item>งานกิจการนักศึกษาและศิษย์เก่าสัมพันธ์</List.Item>
                  </List.List>
                </List.Item>

                <List.Item>
                  สำนักงานวิจัย นวัตกรรมและบริการวิชาการ 6052-6055
                  <List.List>
                    <List.Item>งานวิจัยและนวัตกรรม</List.Item>
                    <List.Item>งานบริการวิชาการและธุรกิจสัมพันธ์</List.Item>
                    <List.Item>งานวิศวกรรมเพื่อความรับผิดชอบต่อสังคม</List.Item>
                  </List.List>
                </List.Item>

                <List.Item>
                  ศูนย์เครือข่ายวิจัยประยุกต์ทางเทคโนโลยีหุ่นยนต์และชีวการแพทย์
                </List.Item>
                <List.Item>
                  ศูนย์การจัดการโลจิสติกส์และโซ่อุปทานและสุขภาพ
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Image
                src="https://www.eg.mahidol.ac.th/egmu/images/slides/mapsalaya.jpg"
                href="https://www.eg.mahidol.ac.th/egmu/images/slides/mapsalaya.jpg"
              />
            </Grid.Column>
          </Grid>
        </div>
        <div className="foot">
        <div className="social-button">
            <Button
              href="https://www.facebook.com/egmahidol/"
              target="_blank"
              circular
              color="facebook"
              icon="facebook"
              size="medium"
            />
            <Button
              href="https://www.youtube.com/channel/UCuPpIQBQiPUZMAFua_sYg8Q"
              target="_blank"
              circular
              color="youtube"
              icon="youtube"
              size="medium"
            />
          </div>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
            <Image
                 href='https://goo.gl/maps/N5vTZA64RUqpXKJz6'
                 target="_blank"
                 src="https://www.eg.mahidol.ac.th/egmu_eng/images/logos/map-03.jpg"
                 alt="NO IMAGE"
              />
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยมหิดล</List.Item>
                <List.Item>25/25 ถ.พุทธมณฑลสาย 4, ศาลายา,</List.Item>
                <List.Item>พุทธมณฑล, นครปฐม, 73170 </List.Item>
                <List.Item>Tel: 0 2889 2138 </List.Item>
                <List.Item>Fax: 0 2441 9731</List.Item>
                <List.Item>ผู้ดูแลเว็บ: racha.tha@mahidol.edu</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
        <TopButton />
      </div>

          
      );
    }
  }
);

export default TodoView;
