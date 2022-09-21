import { useState } from 'react';
import { Card } from './style';
import EditItem from './EditItem';

const Data = ({ id, nome, categoria, descricao, imagem, preco, onDelete }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
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
					<button onClick={() => setIsOpen(!isOpen)}>EDITAR</button>
					<button onClick={() => onDelete(id)}>DELETAR</button>
				</div>
			</Card>
			{isOpen && (
				<EditItem
					idE={id}
					nomeE={nome}
					categoriaE={categoria}
					descricaoE={descricao}
					imagemE={imagem}
					precoE={preco}
				/>
			)}
		</>
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
