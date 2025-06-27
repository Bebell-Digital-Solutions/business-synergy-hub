
import React, { useState, useEffect } from 'react';
import type { Service } from '../types';
import { Bot } from 'lucide-react';

interface ContentPanelProps {
    service: Service | null;
}

const LoadingSpinner: React.FC = () => (
    <div className="absolute inset-0 bg-content-light dark:bg-content-dark bg-opacity-75 dark:bg-opacity-75 flex items-center justify-center z-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
);

const WelcomeScreen: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-center text-slate-500 dark:text-slate-400 p-8">
        <div className="p-6 bg-primary/10 rounded-full mb-6">
            <Bot size={64} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-200 mb-2">Welcome to Synergy Hub</h2>
        <p className="max-w-md">Select a service from the sidebar to begin your workflow. All your tools, one single view.</p>
    </div>
);


const ContentPanel: React.FC<ContentPanelProps> = ({ service }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (service) {
            setIsLoading(true);
        }
    }, [service]);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="h-full w-full bg-content-light dark:bg-content-dark relative">
            {!service ? (
                <WelcomeScreen />
            ) : (
                <div className="relative h-full w-full">
                    {isLoading && <LoadingSpinner />}
                    <iframe
                        key={service.id}
                        src={service.url}
                        title={service.name}
                        className="w-full h-full border-none"
                        onLoad={handleIframeLoad}
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default ContentPanel;
