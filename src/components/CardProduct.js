import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CardProduct = ({ data }) => (
	<Card>
		<Image src={data.img} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{data.title}</Card.Header>
			<Card.Meta>
				<span className='date'>${data.price}</span>
			</Card.Meta>
			<Card.Description>Stock: {data.stock}</Card.Description>
		</Card.Content>
	</Card>
);

export default CardProduct;
