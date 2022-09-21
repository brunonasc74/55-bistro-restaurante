import React from 'react';
// import Container from "../../../components/styles/Container";
import useForm from './useForm';
import { StyledBoxForm } from './styles';

const BoxForm = () => {
	const name = useForm();
	const email = useForm('email');
	const cpf = useForm('cpf');
	const phone = useForm();

	function handleSubmit(e) {
		e.preventDefault();
		if (email.validate() && cpf.validate()) {
			console.log('enviar');
			alert('Enviado');
		} else {
			console.log('não enviar');
		}
	}

	return (
		<StyledBoxForm>
			<div className='rightContainer'>
				<div className='formContainer'>
					<form onSubmit={handleSubmit}>
						<div className='imgContainer'>
							<img src='./images/restaurant.jpg' alt='restaurant' />
						</div>
						<div className='formInner'>
							<div className='Box'>
								<input
									className='name'
									type='name'
									required
									placeholder='Nome'
									{...name}
								/>
								<input
									className='cpf'
									type='text'
									required
									placeholder='CPF'
									{...cpf}
								/>

								<input
									className='email'
									type='email'
									required
									placeholder='Email'
									{...email}
								/>
								<input
									className='phone'
									type='tel'
									required
									placeholder='Telefone'
									{...phone}
								/>
							</div>

							<div className='dateTime'>
								<input className='date' type='date' />
								<input className='time' type='time' />
							</div>

							<button>
								<span>Agendar</span>
								{/* <BsArrowRight /> */}
							</button>
						</div>
					</form>
				</div>
			</div>
		</StyledBoxForm>

		// <RightContainer>
		//   {/* <div className="background">
		//     <img src="/public/images/bg1.jpg" alt="" />
		//   </div> */}
		//   <FormContainer>
		//     <form onSubmit={handleSubmit}>
		//       <ImgContainer>
		//         <img src="./public/images/restaurant.jpg" alt="restaurant" />
		//       </ImgContainer>

		//       <FormInner>
		//         <div className="boxOne">
		//           <input
		//             id="name"
		//             type="text"
		//             required
		//             placeholder="Nome"
		//             {...name}
		//           />

		//           <input id="cpf" type="text" required placeholder="CPF" {...cpf} />
		//         </div>

		//         <div className="boxTwo">
		//           <input type="email" required placeholder="Email" {...email} />

		//           <input
		//             type="tel"
		//             id="phone"
		//             required
		//             placeholder="Telefone"
		//             {...phone}
		//           />
		//         </div>

		//         <div className="DateTime">
		//           <input type="date" />
		//           <input className="Time" type="time" />
		//         </div>

		//         <button>
		//           <span>Agendar</span>
		//         </button>

		//       </FormInner>
		//     </form>
		//   </FormContainer>
		// </RightContainer>
		// // </Container>
	);
};

export default BoxForm;
