import { AppTile } from './AppTile';

export const AppGrid = ({ apps }) => {
    return <div class="app-grid">
        {apps.map(app => <AppTile {...app} />)}
    </div>;
};
