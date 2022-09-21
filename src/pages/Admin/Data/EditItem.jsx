import { useState } from 'react';
import { StyledEditItem } from './style';

const EditItem = ({ nomeE, categoriaE, descricaoE, imagemE, precoE, idE }) => {
	const [nome, setNome] = useState(nomeE);
	const [categoria, setCategoria] = useState(categoriaE);
	const [descricao, setDescricao] = useState(descricaoE);
	const [imagem, setImagem] = useState(imagemE);
	const [preco, setPreco] = useState(precoE);

	const onSubmit = async (e) => {
		e.preventDefault();

		if (!nome || !categoria || !descricao || !imagem || !preco)
			return alert('Todos os campos necessários');

		await fetch(
			`https://restaurante-api-resilia.herokuapp.com/cardapios/${idE}`,
			{
				method: 'PUT',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({
					nome: nome,
					categoria: categoria,
					descricao: descricao,
					imagem: imagem,
					preco: preco
				})
			}
		);
	};

	return (
		<StyledEditItem className='add-form' onSubmit={onSubmit}>
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
				value='Concluir edição'
				className='btn btn-block'
			></input>
		</StyledEditItem>
	);
};

export default EditItem;
