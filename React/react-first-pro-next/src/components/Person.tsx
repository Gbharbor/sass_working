const getWeekday = (today:Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday:'long'}).format(today);
};
type Props = {
    name: string;
    avatar: string;
    roles: string[];
    adress?: string;
}

export const Person = ({name, avatar='urldimagempadrao', roles}: Props) => {
    //const name: string = 'Elon Musk';
    //const avatar: string = 'urlqualquer.jpg'
    //const today: Date = new Date();

    //const data = {
    //    roles: ['CEO tesla','CEO SpaceX']
    //}
    //const { name, avatar, roles} = props;
    return (

        <div className="p-3">
            <h1>{name}</h1>
            <img 
                src={avatar}
                alt={name}
                className="w-40"
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    );
};