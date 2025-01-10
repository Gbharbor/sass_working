const getWeekday = (today:Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday:'long'}).format(today);
};

export const Person = () => {
    const name: string = 'Elon Musk';
    const avatar: string = 'urlqualquer.jpg'
    const today: Date = new Date();

    const data = {
        roles: ['CEO tesla','CEO SpaceX']
    }
    return (
        <>
            <h1 style={{color: 'red', fontSize: '30px'}}> Nome: {name} - {getWeekday(today)}</h1>
            <img 
                src={avatar}
                alt={name}
                className="w-40"
            />
            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
            </ul>
        </>
    );
};