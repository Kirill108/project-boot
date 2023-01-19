interface CheckboxProps {
    id: number;
    name: string;
}

function CheckboxGenre(props) {
    // console.log('props: ', props);
    const { genres } = props;
    return (
        <div>
            <input type="checkbox" id={genres.id} name="cartoon" />
            <label htmlFor={genres.id}>{genres.name}</label>
        </div>
    );
}

export { CheckboxGenre };
