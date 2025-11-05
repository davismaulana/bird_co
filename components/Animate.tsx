import React, { ReactNode, ElementType } from 'react';

interface AnimateProps {
    children: ReactNode;
    className?: string;
    variant?: 'pop';
    delay?: number; // in ms
    as?: ElementType;
    style?: React.CSSProperties;
    [key: string]: any;
}

const Animate: React.FC<AnimateProps> = ({ children, className = '', variant, delay, as: Tag = 'div', style, ...rest }) => {
    const classes = ['reveal', className];
    if (variant === 'pop') {
        classes.push('reveal--pop');
    }

    const dataAttrs: { [key: string]: any } = { ...rest };
    if (delay) {
        dataAttrs['data-reveal-delay'] = `${delay}ms`;
    }

    return (
        <Tag className={classes.join(' ')} {...dataAttrs} style={style}>
            {children}
        </Tag>
    );
};

export default Animate;
