import React, { useState } from 'react';
import './home.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Header from '../Header/header';
import {
	Form,
	Button,
	Col,
	Row,
	InputGroup,
	FormControl,
	Container,
	Alert,
	Breadcrumb,
	Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
	return (
		<div>
			<Header />
			<Card>
				<Card.Img></Card.Img>
			</Card>
			<Breadcrumb>
				<Breadcrumb.Item>Test</Breadcrumb.Item>
				<Breadcrumb.Item>Test 1</Breadcrumb.Item>
				<Breadcrumb.Item>Test 2</Breadcrumb.Item>
			</Breadcrumb>
			<Alert variant='success'>This is a button</Alert>
			<Button>Test Button</Button>
		</div>
	);
}

export default Home;
