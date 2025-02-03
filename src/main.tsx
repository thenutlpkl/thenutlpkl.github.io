import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/rubik/300.css'; // Light
import '@fontsource/rubik/400.css'; // Regular
import '@fontsource/rubik/500.css'; // Medium
import '@fontsource/rubik/600.css'; // Semi-bold
import '@fontsource/rubik/700.css'; // Bold

createRoot(document.getElementById("root")!).render(<App />);
