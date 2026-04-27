"use client";

import { motion, Variants } from 'motion/react';
import React from 'react';

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn';

interface ScrollRevealProps {
    children: React.ReactNode;
    variant?: AnimationVariant;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

const variants: Record<AnimationVariant, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    slideLeft: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 }
    },
    slideRight: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }
};

export function ScrollReveal({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.6,
    className,
    once = true
}: ScrollRevealProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-100px' }}
            variants={variants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94] // Easing suave "pesado"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for animating children in sequence
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    once = true
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-50px' }}
            transition={{ staggerChildren: staggerDelay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item to be used inside StaggerContainer
interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
    variant?: AnimationVariant;
    duration?: number;
}

export function StaggerItem({
    children,
    className,
    variant = 'fadeUp',
    duration = 0.5
}: StaggerItemProps) {
    return (
        <motion.div
            variants={variants[variant]}
            transition={{
                duration,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
