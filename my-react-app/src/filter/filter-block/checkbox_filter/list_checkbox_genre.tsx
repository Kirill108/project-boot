interface CheckboxProps {
    id: number;
    name: string;
}

function CheckboxGenre(props: { genres: CheckboxProps }) {
    const { genres, arrGenres } = props;
    return (
        <div>
            <input
                type="checkbox"
                checked={arrGenres.includes(genres.id)}
                id={String(genres.id)}
                name={genres.name}
            />
            <label htmlFor={String(genres.id)}>{genres.name}</label>
        </div>
    );
}

export { CheckboxGenre };
