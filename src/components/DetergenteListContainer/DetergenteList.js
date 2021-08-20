import { DetergenteItem } from "./DetergenteItem"

export const DetergenteList = ({detergentes = []}) => {
    return (
        <section className="container my-5">
            <h2>Detergentes LIQUIDOS</h2>
            <hr/>
            <div className="row">
                {detergentes.map((detergente) => <DetergenteItem key={detergente.id} {...detergente}/> )}
            </div>
        </section>
    )
}