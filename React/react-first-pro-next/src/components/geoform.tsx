import { Square } from "./square"
import { Circle } from "./circle"

export const GeoForm = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold">Formar Geometricas</h3>
            {/*digamos que n quer q fique um abaixo do outro, ai podemos editar usando tailwind puro.*/}
            <div className="flex gap-2 font-bold p-3">
                <Square/>
                <Circle/>
            </div>
        </div>
    )
}