type ErrorLabelProps = {
    id: string;
    errors: string[] | undefined;
}

export default function ErrorLabel({ id, errors } : ErrorLabelProps) {
    return (
        <div id={id} aria-live="polite" aria-atomic="true">
            {errors && errors.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                </p>
            ))}
        </div>
    );
}