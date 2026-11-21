import { createApp } from './app/App';
import './styles/global.scss';

import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('Root element #app not found');
}

root.append(createApp());
