
import React, { useState, useMemo } from 'react';
import type { Service, Theme } from '../types';
import { Sun, Moon, Search, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    services: Service[];
    activeService: Service | null;
    onServiceSelect: (service: Service) => void;
    onToggleSidebar: () => void;
    onToggleTheme: () => void;
    currentTheme: Theme;
}

const Sidebar: React.FC<SidebarProps> = ({
    isOpen,
    services,
    activeService,
    onServiceSelect,
    onToggleSidebar,
    onToggleTheme,
    currentTheme
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredServices = useMemo(() => {
        return services.filter(service =>
            service.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [services, searchTerm]);

    const SidebarToggle = () => (
        <button
            onClick={onToggleSidebar}
            className="absolute -right-3 top-8 z-20 rounded-full bg-slate-200 dark:bg-slate-700 p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
            {isOpen ? <ChevronsLeft size={16} /> : <ChevronsRight size={16} />}
        </button>
    );

    return (
        <aside
            className={`fixed top-0 left-0 h-full bg-slate-100 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col transition-all duration-300 ease-in-out z-10 ${
                isOpen ? 'w-64' : 'w-20'
            }`}
        >
            <SidebarToggle />
            <div className="flex items-center justify-center h-16 border-b border-slate-200 dark:border-slate-700">
                 {isOpen ? (
                    <h1 className="text-xl font-bold text-primary">Synergy Hub</h1>
                 ) : (
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                 )}
            </div>

            <div className="p-2 mt-2">
                <div className="relative">
                    <Search size={18} className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isOpen ? 'left-3' : 'left-1/2 -translate-x-1/2'}`} />
                    {isOpen && (
                         <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-slate-200 dark:bg-slate-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    )}
                </div>
            </div>

            <nav className="flex-1 overflow-y-auto overflow-x-hidden p-2">
                <ul>
                    {filteredServices.map(service => (
                        <li key={service.id}>
                            <button
                                onClick={() => onServiceSelect(service)}
                                className={`w-full flex items-center p-3 my-1 rounded-md transition-all duration-200 ${
                                    activeService?.id === service.id
                                        ? 'bg-primary/20 text-primary-dark dark:text-primary-light'
                                        : 'hover:bg-slate-200 dark:hover:bg-slate-700/50'
                                } ${!isOpen ? 'justify-center' : ''}`}
                                title={service.name}
                            >
                                {service.icon}
                                {isOpen && <span className="ml-4 font-medium text-sm text-left truncate">{service.name}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-2 border-t border-slate-200 dark:border-slate-700">
                 <button
                    onClick={onToggleTheme}
                    className={`w-full flex items-center p-3 rounded-md transition-colors hover:bg-slate-200 dark:hover:bg-slate-700/50 ${!isOpen ? 'justify-center' : ''}`}
                    title={currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                 >
                    {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    {isOpen && <span className="ml-4 text-sm font-medium">Toggle Theme</span>}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;