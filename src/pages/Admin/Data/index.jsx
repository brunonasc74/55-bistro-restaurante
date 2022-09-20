import React from 'react';

const Data = ({ id, nome, categoria, descricao, imagem, preco }) => {
	return (
		<div>
			<div>id: {id}</div>
			<div>nome: {nome}</div>
			<div>categoria: {categoria}</div>
			<div>descricao: {descricao}</div>
			<div>imagem:{imagem}</div>
			<div>preco: {preco}</div>
		</div>
	);
};

Data.defaultProps = {
	id: '0',
	nome: 'Nome da comida',
	categoria: 'Nome da comida',
	descricao:
		'descrição de comida descrição de comida descrição de comida descrição de comida descrição de comida ',
	imagem: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
	preco: 100
};

export default Data;
