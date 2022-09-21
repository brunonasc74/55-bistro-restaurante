import { useState } from 'react';
import { StyledAddItem } from './style';

const AddItem = ({ onAdd }) => {
	const [nome, setNome] = useState('');
	const [categoria, setCategoria] = useState('');
	const [descricao, setDescricao] = useState('');
	const [imagem, setImagem] = useState('');
	const [preco, setPreco] = useState();

	const onSubmit = (e) => {
		e.preventDefault();

		if (!nome || !categoria || !descricao || !imagem || !preco)
			return alert('Todos os campos necessários');

		onAdd({
			nome: nome,
			categoria: categoria,
			descricao: descricao,
			imagem: imagem,
			preco: preco
		});

		setNome('');
		setCategoria('');
		setDescricao('');
		setImagem('');
		setPreco('');
	};

	return (
		<StyledAddItem className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>Nome</label>
				<input
					type='text'
					placeholder='Nome do item a ser cadastrado'
					value={nome}
					onChange={(e) => setNome(e.target.value)}
				></input>
			</div>
			<div className='form-control'>
				<label>Categoria</label>
				<input
					type='text'
					placeholder='Categoria do item'
					value={categoria}
					onChange={(e) => setCategoria(e.target.value)}
				></input>
			</div>
			<div className='form-control'>
				<label>Descrição</label>
				<input
					type='text'
					placeholder='Descrição do item'
					value={descricao}
					onChange={(e) => setDescricao(e.target.value)}
				></input>
			</div>
			<div className='form-control'>
				<label>Imagem</label>
				<input
					type='text'
					placeholder='Link da imagem'
					value={imagem}
					onChange={(e) => setImagem(e.target.value)}
				></input>
			</div>
			<div className='form-control'>
				<label>Preço</label>
				<input
					type='number'
					placeholder='Preço do item (apenas números)'
					value={preco}
					onChange={(e) => setPreco(e.target.value)}
				></input>
			</div>

			<input
				type='submit'
				value='Cadastrar item'
				className='btn btn-block'
			></input>
		</StyledAddItem>
	);
};

export default AddItem;
