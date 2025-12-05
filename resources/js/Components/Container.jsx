export default function Container({
    children,
    className
}) {
    return (
        <div className={"overflow-hidden bg-white shadow-sm sm:rounded-lg " + className}>
            {children}
        </div>
    );
}
