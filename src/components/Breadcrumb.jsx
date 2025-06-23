const Breadcrumb = ({title}) => {
    return(
        <div className="flex justify-between mb-3">
            <div className="text-2xl">{title}</div>
            <div>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>{title}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;