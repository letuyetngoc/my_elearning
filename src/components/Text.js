export function TitleComponent({ children, className = '' }) {
    return <div className={`${className} titleComponent`}>
        {children}
    </div>
}
export function Title({ children, className = '' }) {
    return (
        <h2 className={`title ${className}`}>{children}</h2>
    )
}

export function TitleMark({ children, className = '' }) {
    return <span className={`titleMark ${className}`}> &nbsp;{children}&nbsp; </span>
}
export function TitleMarkNumber({ children, className = '' }) {
    return <span className={`titleMarkNumber ${className}`}> &nbsp;{children}&nbsp; </span>
}


export function TitleContent({ children, className = '' }) {
    return (
        <p className={`titleContent ${className}`}>{children}</p>
    )
}