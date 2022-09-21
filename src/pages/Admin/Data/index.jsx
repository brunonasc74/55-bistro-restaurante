import React from 'react';
import { Card } from './style';

const Data = ({
	id,
	nome,
	categoria,
	descricao,
	imagem,
	preco,
	edit,
	onDelete
}) => {
	return (
		<Card>
			<div>
				<div>
					id: <span>{id}</span>
				</div>
				<div>
					nome: <span>{nome}</span>
				</div>
				<div>
					categoria: <span>{categoria}</span>
				</div>
				<div>
					descrição: <span>{descricao}</span>
				</div>
				<div>
					imagem:{' '}
					<a href={imagem} target='_blank'>
						{imagem}
					</a>
				</div>
				<div>
					preço: <span>R${preco}</span>
				</div>
			</div>
			<div className='btns'>
				<button onClick={() => alert(edit)}>EDITAR</button>
				<button onClick={() => onDelete(id)}>DELETAR</button>
			</div>
		</Card>
	);
};

Data.defaultProps = {
	id: 'null',
	nome: 'null',
	categoria: 'null',
	descricao: 'null',
	imagem: 'null',
	preco: 0
};

export default Data;
