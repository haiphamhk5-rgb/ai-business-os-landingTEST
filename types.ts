import React from 'react';

export interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatar: string;
}

export interface PricingTier {
    name: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    cta: string;
}

export enum ChatRole {
    USER = 'user',
    MODEL = 'model'
}

export interface ChatMessage {
    role: ChatRole;
    text: string;
}