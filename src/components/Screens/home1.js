import React, { useState } from 'react';
import './home.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Header from '../Header/header';
import { Form } from 'react-bootstrap';

function Home() {
	const [consult, setConsult] = useState(null);

	const { register, handleSubmit, errors } = useForm();

	const history = useHistory();

	const onSubmit = data => {
		setConsult(data);

		const informacoes = {
			cod_cliente: data.cod_cliente,
			cnpj: data.cnpj,
			motivo_first: data.first,
			motivo_second: data.second,
			motivo_third: data.third,
			cod_fatura: data.cod_fatura,
			vencimento: data.vencimento,
		};

		localStorage.setItem('info', JSON.stringify(informacoes));

		history.push('/search');
	};

	return (
		<div>
			<Header />

			<div className='home-window'>
				<div className='split left'>
					<div className='home-contentbox'>
						<form onSubmit={handleSubmit(onSubmit)} className='formfields'>
							<div>
								<label className='labelinput'>CÓD CLIENTE RAÍZ</label>
								<input
									type='text'
									placeholder='CÓDIGO CLIENTE'
									ref={register({
										required: 'Código Cliente Raiz obrigatório',
									})}
									name='cod_cliente_raiz'
									className='inputtext'
								/>
							</div>

							<div>
								<label className='labelinput'>CÓD CLIENTE R.P.</label>
								<input
									type='text'
									placeholder='CÓDIGO CLIENTE R.P.'
									name='cod_cliente_rp'
									ref={register({
										required: 'Codigo Cliente RP obrigatório',
									})}
									className='inputtext'
								/>
							</div>

							<div>
								<label className='labelinput'>NÚMERO DO ACESSO</label>
								<input
									type='text'
									placeholder='NÚMERO DO ACESSO'
									name='numero_acesso'
									ref={register({
										required: 'Número Do Acesso obrigatório',
									})}
									className='inputtext'
								/>
							</div>

							<div>
								<label className='labelinput'>CNPJ</label>
								<input
									type='text'
									placeholder='CNPJ'
									name='cnpj'
									ref={register({
										required: 'CNPJ obrigatório',
									})}
									className='inputtext'
								/>
							</div>

							<div>
								<label className='labelinput'>CÓD. FATURA</label>
								<input
									type='text'
									placeholder='CÓDIGO FATURA'
									ref={register({
										required: 'Cód. Fatura obrigatório',
									})}
									name='cod_fatura'
									className='inputtext'
								/>
							</div>
							<div>
								<label className='labelinput'>DATA DE VENCIMENTO FATURA</label>
								<input
									type='text'
									placeholder='DATA VENCIMENTO FATURA'
									ref={register({
										required: 'Data vencimento obrigatório',
									})}
									name='vencimento'
									className='inputtext'
								/>
							</div>

							<div>
								<div>
									<label className='labelinput'>MOTIVO DA CONTESTAÇÃO</label>
									<div className='home-checkboxs'>
										<label>
											<input name='first' type='checkbox' ref={register} />
											First
										</label>

										<label>
											<input name='second' type='checkbox' ref={register} />
											Second
										</label>

										<label>
											<input name='third' type='checkbox' ref={register} />
											Third
										</label>
									</div>
								</div>

								<button type='submit' className='home-submitbutton'>
									BUSCAR
								</button>
							</div>
						</form>
					</div>
					{errors.cod_cliente && <p>{errors.cod_cliente.message}</p>}
					{errors.cnpj && <p>{errors.cnpj.message}</p>}
					{errors.cod_fatura && <p>{errors.cod_fatura.message}</p>}
					{errors.vencimento && <p>{errors.vencimento.message}</p>}
				</div>

				<div className='split right'>
					<label
						style={{
							color: '#0280f5',
							fontSize: '25px',
							marginTop: '20px',
							marginLeft: '10px',
						}}>
						CONSULTAS RECENTES
					</label>
					{consult && (
						<div className='home-recentes'>
							<p>Codigo_Cliente: {consult.cod_cliente}</p>
							<p>CNPJ: {consult.cnpj}</p>
							<p>First: {consult.first.toString()}</p>
							<p>Second: {consult.second.toString()}</p>
							<p>Third: {consult.third.toString()}</p>
							<p>Codigo_Fatura: {consult.cod_fatura}</p>
							<p>Data_Vencimento: {consult.vencimento}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;
