export const AppTile = ({ id, name, description, colour, url }) => {
    return <div className="app-tile">
        <div className="app-tile-title-bar">
            <img src="/assets/app-tile-window-controls.svg" />
        </div>
        <div className="app-tile-content-wrapper">
            <div className="app-tile-content">
                <div className={`app-tile-overlay ${colour}`}>
                    <h2><a href={url} target="_blank">{name}</a></h2>
                    <h3>{description}</h3>
                </div>
                <img className="app-tile-image" src={`/assets/app-images/${id}.webp`} />
            </div>
        </div>
    </div>;
};
