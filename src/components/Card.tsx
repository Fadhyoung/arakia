'use client';

import { forwardRef, HTMLAttributes } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

export type ThumbnailImage = {
  src: string;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  alt?: string;
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  thumbnailImage?: ThumbnailImage;
  header?: React.ReactNode;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  body?: React.ReactNode;
  paragraph?: React.ReactNode;
  footer?: React.ReactNode;
  action?: string;
  onClickAction?: () => void;
  radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  style?: React.CSSProperties;
  id?: string;
  type?: 'outline' | 'elevated' | 'filled';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      thumbnailImage,
      header,
      heading,
      subheading,
      body,
      paragraph,
      footer,
      action,
      onClickAction,
      radius = 'md',
      style,
      type = 'filled',
      id,
      className,
      ...props
    },
    ref
  ) => {

    const TypeStyles = {
        outline: 'bg-white border border-gray-300 text-black',
        elevated: 'lg:box-shadow-4 xs:shadow-md',
        filled: 'bg-secondaryGreen text-white',
      };

    const radiusStyles = {
        none: "rounded-none",
        xs: "rounded-sm",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      };

    return (
      <div
        id={id}
        ref={ref}
        className={clsx(
                  radiusStyles[radius],
                  TypeStyles[type],
                  className
                )}
        style={style}
        {...props}
      >
        {thumbnailImage && (
          <Image
            src={thumbnailImage.src}
            alt={thumbnailImage.alt || 'Thumbnail'}
            width={100}
            height={100}
            onError={thumbnailImage.onError}
          />
        )}
        {header && <div className="card-header">{header}</div>}
        {heading && <h3 className="card-heading">{heading}</h3>}
        {subheading && <h4 className="card-subheading">{subheading}</h4>}
        {body && body}
        {paragraph && <p className="card-paragraph">{paragraph}</p>}
        {footer && <div className="card-footer">{footer}</div>}
        {action && (
          <button className="card-action" onClick={onClickAction}>
            {action}
          </button>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
