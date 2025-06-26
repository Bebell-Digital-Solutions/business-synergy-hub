
import React, { useState, useEffect, useCallback } from 'react';
import type { Service, Theme } from './types';
import { SERVICES } from './constants';
import Sidebar from './components/Sidebar';
import ContentPanel from './components/ContentPanel';

const App: React.FC = () => {
    const [activeService, setActiveService] = useState<Service | null>(null);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedTheme = window.localStorage.getItem('theme');
            if (storedTheme === 'light' || storedTheme === 'dark') {
                return storedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleServiceSelect = useCallback((service: Service) => {
        setActiveService(service);
    }, []);

    const toggleSidebar = useCallback(() => {
        setSidebarOpen(prev => !prev);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar
                isOpen={isSidebarOpen}
                services={SERVICES}
                activeService={activeService}
                onServiceSelect={handleServiceSelect}
                onToggleSidebar={toggleSidebar}
                onToggleTheme={toggleTheme}
                currentTheme={theme}
            />
            <main
                className={`flex-1 transition-all duration-300 ease-in-out ${
                    isSidebarOpen ? 'ml-64' : 'ml-20'
                }`}
            >
                <ContentPanel service={activeService} />
            </main>
        </div>
    );
};

export default App;
