import {AppType} from 'types';
import { baseRouter } from './routes';

const App = (app: AppType) => app.use('/', baseRouter);


export {App};