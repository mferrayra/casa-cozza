/*
* Este componente se renderiza cuando el usuario no está logueado e intenta operar con el carrito.
*/

export const NotLogin = () => {
	return (
		<>
			<div className="container d-flex mt-5 pt-5">
				<div className="card col-5">
					<img src={"/images/varios.png"} className={"img-fluid w-100"} alt={"si no esta logueado"} />					
				</div>
				<div className="card col-7 ml-2 text-center border-3 border-primary">
					<h2>¿Querés añadir tus productos a la cesta?</h2>
					<hr />				
					<p className="text-start">
						<h3>
							<ul>
								<li>Iniciá sesión con tu usuario</li>
								<li>Seleccioná y arma tu compra</li>
								<li>Revisá tu resumen, podés eliminar elementos de la cesta</li>
								<li>Incluso podés cancelar tu compra completa</li>
							</ul>
						</h3>
						<h3>Pero para esto, por favor no te olvides de <b><u>iniciar tu sesión!</u></b></h3>
					</p>
				</div>				
			</div>			
		</>
	)
}