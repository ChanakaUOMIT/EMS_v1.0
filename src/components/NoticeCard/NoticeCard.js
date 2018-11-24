import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Separator,ListItem } from "native-base";
import { PropTypes } from 'prop-types';
 
class NoticeCard extends Component{
    render() {
        const { noticeDate, noticeHeader, noticeText }= this.props;
        return (
          <Container>
            {/* <Header /> */}
            {/* <Content padder> */}
              <Card>
                <CardItem header bordered>
                  <Text>{noticeHeader}</Text>
                </CardItem>

                <CardItem bordered>

                  <Body>
                    <Text>
                      {/* NativeBase is a free and open source framework that enable
                      developers to build
                      high-quality mobile apps using React Native iOS and Android
                      apps
                      with a fusion of ES6.

                      NativeBase is a free and open source framework that enable
                      developers to build
                      high-quality mobile apps using React Native iOS and Android
                      apps
                      with a fusion of ES6. */}
                      {noticeText}

                    </Text>
                  </Body>

                </CardItem>
                <CardItem footer bordered>
                  <Text>{noticeDate}</Text>
                </CardItem>
              </Card>
            {/* </Content> */}
          </Container>
        );
      } 
}
 
export default NoticeCard;

NoticeCard.propsTypes={
    noticeHeader:PropTypes.string.isRequired,
    noticeText:PropTypes.string.isRequired,
    noticeDate:PropTypes.string.isRequired,
}