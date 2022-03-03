import Card from './Card';

const Cards = ({ contents }) => {
	return (
		<>
			{contents.map((content, index) => (
				<Card key={index} content={content} />
			))}
		</>
	);
};

export default Cards;
