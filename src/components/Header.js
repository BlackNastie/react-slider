import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Link from './Link';

import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 49px;
    padding: 0;
`;

class Header extends Component {
    render() {
        return (
            <Row>
                <Col lg={12}>
                    <nav>
                        <List>
                            <Link link="#" text="Вызов мастера" />
                            <Link link="#" text="Прайс на ремонт" />
                            <Link link="#" text="Наши преимущества" />
                            <Link link="#" text="Схема работы" />
                            <Link link="#" text="Отзывы клиентов" />
                            <Link link="#" text="Примеры работ" />
                            <Link link="#" text="Контакты" />
                        </List>
                    </nav>
                </Col>
            </Row>
        );
    }
}

export default Header;