import { AppTile } from './AppTile';

export const AppGrid = (props) => {
    if (!props) {
        return <></>;
    }
    const apps = props.apps || [];

    return <div className="app-grid">
        {apps.map(app => <AppTile {...app} />)}
    </div>;
};
