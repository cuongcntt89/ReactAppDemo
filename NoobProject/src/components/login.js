import React, { Component } from 'react';
import myTheme from '../../Themes/myTheme';
import { Container, Content, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class LoginComponent extends Component {
    render() {
        return (
            <Container>
                <Content theme={myTheme}>
                    <Button primary>
                        <Text>Primary</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}