
import React from 'react';
import type { Service } from './types';
import {
    Megaphone,
    BarChart3,
    ShoppingCart,
    MousePointerClick,
    Bot,
    LifeBuoy,
    MessageSquare,
    Package,
    Shield,
    Briefcase,
    PenTool,
    Lock,
    FolderKanban,
    Landmark,
    FlaskConical,
    Gavel
} from 'lucide-react';

export const SERVICES: Service[] = [
    { id: 'org', name: 'Organization Hub', url: 'https://trello.com/', icon: <FolderKanban size={20} /> },
    { id: 'privacy', name: 'Privacy & Security Hub', url: 'https://1password.com/', icon: <Lock size={20} /> },
    { id: 'finance', name: 'Financial Hub', url: 'https://www.stripe.com/', icon: <Landmark size={20} /> },
    { id: 'research', name: 'Research Hub', url: 'https://www.google.com/search/howsearchworks/mission/search-for-everyone/', icon: <FlaskConical size={20} /> },
    { id: 'identity', name: 'Professional & Commercial Identity', url: 'https://www.linkedin.com/', icon: <Briefcase size={20} /> },
    { id: 'prevention', name: 'Prevention & Protection Hub', url: 'https://www.cloudflare.com/', icon: <Shield size={20} /> },
    { id: 'design', name: 'Product Design (Offer) Hub', url: 'https://www.figma.com/', icon: <Package size={20} /> },
    { id: 'sales', name: 'Online Sales Hub', url: 'https://www.shopify.com/', icon: <ShoppingCart size={20} /> },
    { id: 'marketing', name: 'Digital Marketing Hub', url: 'https://mailchimp.com/', icon: <MousePointerClick size={20} /> },
    { id: 'comms', name: 'Communication Hub', url: 'https://slack.com/', icon: <MessageSquare size={20} /> },
    { id: 'content', name: 'Content Creation Hub', url: 'https://www.canva.com/', icon: <PenTool size={20} /> },
    { id: 'ads', name: 'Online Advertisement Hub', url: 'https://ads.google.com/', icon: <Megaphone size={20} /> },
    { id: 'support', name: 'Customer Service Hub', url: 'https://www.zendesk.com/', icon: <LifeBuoy size={20} /> },
    { id: 'analytics', name: 'Analytics & Refinement Hub', url: 'https://analytics.google.com/', icon: <BarChart3 size={20} /> },
    { id: 'automation', name: 'Automatization Hub', url: 'https://zapier.com/', icon: <Bot size={20} /> },
    { id: 'formalization', name: 'Formalization Hub', url: 'https://www.legalzoom.com/', icon: <Gavel size={20} /> },
];